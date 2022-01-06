import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api';

interface IData {
  name: string;
  email: string;
  senha: string;
}

const SingUp: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [load, setLoad] = useState(false);

  const history = useHistory();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoad(true);
      api
        .post('', data)
        .then(response => {
          setLoad(false);
          console.log(response.data);
          toast.success(
            'Cadastro realizado com sucesso! Você esta sendo redirecionado para pagina de login',
            {
              hideProgressBar: false,
              onClose: () => history.push('/signin'),
            }
          );
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
        <h5>Cadastre-se</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="informe seu nome"
            onChange={e => setData({ ...data, name: e.target.value })}
          />

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
          <input type="submit" value="Cadastrar" />
        </form>
        <Link to="/signin">Clique aqui Logar.</Link>
      </div>
    </Container>
  );
};

export default SingUp;
