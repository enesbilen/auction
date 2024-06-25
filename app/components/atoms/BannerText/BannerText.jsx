import styles from './bannertext.module.scss'
import Search from './Search'

const BannerText = () => {
  return (
    <div className='d-flex d-flex-column d-flex-justify-center w-60 mr-5 '>
      <h1 className='fs-9 fw-700'>Sonraki Müzayedemize Katılın!</h1>
      <span className='fs-9 fw-700'>Ekipmanınızı Bulun</span>

      <Search />

    </div>
  )
}

export default BannerText