"use client"
import React, { useEffect, useState } from 'react';
import BrochureBox from '../../molecules/BrochureBox';
import productsData from '../../../lib/product.json';

import styles from './brochure.module.scss';

const Brochure = () => {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const [notStartedProducts, setNotStartedProducts] = useState([]);
  const [finishedProducts, setFinishedProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);

    // Ürünleri durumlarına göre ayırma
    const now = new Date();
    setActiveProducts(productsData.filter(product => {
      const auctionStartTime = new Date(product.auctionStartTime);
      const auctionEndTime = new Date(product.auctionEndTime);
      return now >= auctionStartTime && now < auctionEndTime; 
    }));
    setNotStartedProducts(productsData.filter(product => {
      const auctionStartTime = new Date(product.auctionStartTime);
      return now < auctionStartTime; 
    }));
    setFinishedProducts(productsData.filter(product => {
      const auctionEndTime = new Date(product.auctionEndTime);
      return now >= auctionEndTime;
    }));
  }, []);

  return (
    <div className='container my-3'>
      <div className='wrapper wrapper-xl'>
        
        <div><h2>Aktif İhaleler</h2></div>
        <div className={styles.productsList}>
          {activeProducts.length > 0 ? (
            activeProducts.map(product => (
              <BrochureBox key={product.id} product={product} />
            ))
          ) : (
            <p>Aktif ihale bulunmamaktadır.</p>
          )}
        </div>

        <div><h2>Henüz Başlamamış İhaleler</h2></div>
        <div className={styles.productsList}>
          {notStartedProducts.length > 0 ? (
            notStartedProducts.map(product => (
              <BrochureBox key={product.id} product={product} />
            ))
          ) : (
            <p>Henüz başlamamış ihale bulunmamaktadır.</p>
          )}
        </div>

        <div><h2>Sona Ermiş İhaleler</h2></div>
        <div className={styles.productsList}>
          {finishedProducts.length > 0 ? (
            finishedProducts.map(product => (
              <BrochureBox key={product.id} product={product} />
            ))
          ) : (
            <p>Sona ermiş ihale bulunmamaktadır.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brochure;