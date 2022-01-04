import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

interface IData {
  name: string;
  email: string;
}

const Contact: React.FC = () => {
  const [data, setData] = useState<IData>({} as IData);

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>
        Name: {data?.name}
        <br />
        E-mail: {data?.email}
        <div className="card">
          <form onSubmit={() => {}}>
            <input
              type="text"
              placeholder="nome"
              onChange={e => setData({ ...data, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="e-mail"
              onChange={e => setData({ ...data, email: e.target.value })}
            />
            <input type="submit" value="Cadasstrar" />
          </form>
        </div>
        <Link to="/">Voltar para home </Link>
      </div>
    </Container>
  );
};

export default Contact;
