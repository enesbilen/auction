
import BannerImage from '../../atoms/BannerImage'
import BannerText from '../../atoms/BannerText'
import styles from './banner.module.scss'

const Slider = () => {
  return (
    <div className='container banner-bg'>
    <div className='wrapper wrapper-xl'>
      <div className='d-flex d-flex-justify-between pt-5 pb-5'>
        <BannerText />
        <BannerImage />
      </div>
      </div>
    </div>
  )
}

export default Slider