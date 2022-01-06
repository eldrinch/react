import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api';

interface IData {
  email: string;
  senha: string;
}

const SingIn: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      api
        .post('session', data)
        .then(response => {
          const sessionToken = JSON.stringify(response.data.token);
          localStorage.setItem('@meuserviceToken', sessionToken);
          setLoad(false);
          console.log(response.data);
          toast.success('Cadastro realizado com sucesso', {
            hideProgressBar: false,
            onClose: () => history.push('/dashboard'),
          });
        })
        .catch(e => {
          toast.error('Oops algo deu errrado');
          setLoad(false);
        });
    },
    [data, history]
  );

  if (load) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="card">
        <h5>Logar no Sistema</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="informe seu email"
            onChange={e => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="informe sua senha"
            onChange={e => setData({ ...data, senha: e.target.value })}
          />
          <input type="submit" value="Logar" />
        </form>
        <Link to="/signup">Clique aqui para cadastrar.</Link>
      </div>
    </Container>
  );
};

export default SingIn;
