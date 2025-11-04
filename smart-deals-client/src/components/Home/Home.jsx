import React from 'react';
import MyContainer from '../MyContainer/MyContainer';
import Banner from '../Banner/Banner';
import LatestProducts from '../LatestProducts/LatestProducts';

const LatestProductsPromise = fetch("http://localhost:3000/latest-products").then(res => res.json())
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestProducts LatestProductsPromise={LatestProductsPromise}></LatestProducts>
    </div>
  );
};

export default Home;