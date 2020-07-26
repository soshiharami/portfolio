import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Skill from '../sections/Skills'

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Skill />
    <Footer />
  </Layout>
);

export default IndexPage;
