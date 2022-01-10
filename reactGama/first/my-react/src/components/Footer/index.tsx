import React from 'react';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../store/modules/user/types';
import { FooterStyle } from './style';

const Footer: React.FC = () => {
  const state = useSelector((state: IGlobalState) => state.users);
  return (
    <FooterStyle>
      <p>Rodape</p>
      <p>Temos {state.length} usuarios cadastrados</p>
    </FooterStyle>
  );
};

export default Footer;
