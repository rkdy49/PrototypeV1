import React from 'react';
import {Bids, Footer, Header } from '../../components'
import Chart from '../../components/Chart/Chart';

const Home = () => {

  return <div>
   <Header />
   <Bids title="Hot Bids"  />
   <Chart/>
   <Footer />
  </div>;
};

export default Home;
