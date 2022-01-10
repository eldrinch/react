import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { api } from '../../services/api';
import { Container } from '../home/style';

import { useDispatch } from 'react-redux';
import addNewUser from '../../store/modules/user/action';

interface ICollaborator {
  id: number;
  name: string;
  email: string;
  photo: {
    path: string;
  };
}

const Dash: React.FC = () => {
  const [data, setData] = useState<ICollaborator[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const token = localStorage.getItem('@gamaServiceToken')?.replace(/[""]/g, '');

  const dispach = useDispatch();

  useEffect(() => {
    api
      .get('colaborator', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setIsLoad(true);
        setData(response.data);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, [token]);

  useEffect(() => {
    data.map(user => dispach(addNewUser(user)));
  }, [data, dispach]);

  if (isLoad) {
    return <Loader />;
  }
  return (
    <Container>
      <div className="wrapper">
        <h1>Dashboard</h1>
        <div>
          {data?.map(el => (
            <div key={el.id} className="card">
              <img
                src={`https://sistemadeagendamento-san5v.ondigitalocean.app/tmp/uploads/${el.photo.path}`}
                alt="img"
                width="100px"
                height="100px"
              />
              <div className="content-information">
                <p>Nome: {el.name}</p>
                <p>Email: {el.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">Retornar para home</Link>
      </div>
    </Container>
  );
};

export default Dash;
