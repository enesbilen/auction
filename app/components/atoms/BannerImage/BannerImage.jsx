import Image from 'next/image'
import styles from './bannerimage.module.scss'

const BannerImage = () => {
  return (
    <div className='w-40'>
      <Image src="/image/banner/clock.png" alt='Açık Arttırma' className='border-rounded-xl' layout='fill' />
    </div>
  )
}

export default BannerImage