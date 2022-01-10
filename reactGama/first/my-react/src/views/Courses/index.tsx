import React from 'react';
import NavBar from '../../components/Nav';
import Footer from '../../components/Footer';

import { Container } from './style';

const Courses: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>Courses</Container>
      <Footer />
    </>
  );
};

export default Courses;
