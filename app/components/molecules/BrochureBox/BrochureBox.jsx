import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './brochurebox.module.scss';

// Formatlama fonksiyonu
const formatPrice = (price) => {
  // Sayıyı string'e çeviriyoruz
  const a = price.toString();
  // Son iki rakamı virgül ile ayırıyoruz
  const b = a.slice(0, -2) + ',' + a.slice(-2);
  // Her üç rakamı nokta ile ayırıyoruz
  return b.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const BrochureBox = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [status, setStatus] = useState(product.status);

  const url = `/image/mezatresim/${product.imageUrl}`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const auctionStartTime = new Date(product.auctionStartTime);
      const auctionEndTime = new Date(product.auctionEndTime);

      if (now < auctionStartTime) {
        // Henüz başlamadı
        setTimeLeft('Başlamadı');
        setStatus('Henüz Başlamadı');
        return;
      }

      if (now >= auctionEndTime) {
        // İhale sona erdi
        setTimeLeft('00:00');
        setStatus('İhale Sona Erdi');
        clearInterval(intervalId);
        return;
      }

      // Geri sayım hesaplaması
      const timeDifference = auctionEndTime.getTime() - now.getTime();
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      setStatus('Aktif');
    }, 1000);

    return () => clearInterval(intervalId);
  }, [product.auctionStartTime, product.auctionEndTime]);

  let badgeClass = '';
  switch (status) {
    case 'Henüz Başlamadı':
      badgeClass = 'badge-warning';
      break;
    case 'Aktif':
      badgeClass = 'badge-primary';
      break;
    case 'İhale Sona Erdi':
      badgeClass = 'badge-secondary';
      break;
    default:
      badgeClass = 'badge-primary';
  }

  const formattedAuctionStartPrice = formatPrice(product.auctionStartPrice);
  const formattedBuyNowPrice = formatPrice(product.buyNowPrice);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.card}>
        <a href={product.slug}>
          <div className='position-relative'>
            <Image
              src={url}
              alt={product.name}
              className='border-rounded-xl'
              layout="fill"
            />
            <span className={`position-absolute top-0 right-0 badge ${badgeClass}`}>
              {status}
            </span>
            <div className='position-absolute bottom-0 w-100'>
              <p className={styles.time}>Geri Sayım: {timeLeft}</p>
            </div>
          </div>
        </a>
        <div className='mt-3 px-3'>
          <p className='fs-2 text-gray-600 fw-500'>Kategori: {product.category}</p>
          <a href={product.slug} className='fs-5 fw-700 text-gray-800 mb-3'>{truncateText(product.name, 17)}</a>
          <p className='text-primary fw-500 fs-2 my-1'><span className='fs-2 fw-500 text-gray-600'>Başlangıç: </span>{formattedAuctionStartPrice}₺</p>
          <p className='text-primary fw-500 fs-2 mb-1'><span className='fs-2 fw-500 text-gray-600'>Hemen Al: </span>{formattedBuyNowPrice}₺</p>
        </div>
        <div className='my-3 px-3'>
          <button className='btn btn-primary fs-2'>Teklif Ver</button>
        </div>
      </div>
    </div>
  );
};

export default BrochureBox;