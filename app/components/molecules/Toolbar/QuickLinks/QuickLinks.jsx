import {
  MdOutlineAlignHorizontalCenter,
  MdArrowRightAlt
} from "react-icons/md";
import * as Icons from 'react-icons/md';
import Link from "next/link";
import styles from './quicklinks.module.scss'

const QuickLinks = () => {


  const menuItems = [
    {
      id: "1",
      parentId: "1000",
      img: '',
      icon: 'MdMultipleStop',
      slug: '#',
      title: 'Açık Arttırmalar',
      subtitle: 'En yeni ürünler',
      order: "1",
      color: "var(--primary-color)"
    },
    {
      id: "2",
      parentId: "1000",
      img: '',
      icon: 'MdStore',
      slug: '#',
      title: 'Satıcı Olun',
      subtitle: 'Ürünlerinizi satın',
      order: "2",
      color: "var(--danger-color)"
    },
    {
      id: "3",
      parentId: "1000",
      img: '',
      icon: 'MdInfo',
      slug: '#',
      title: 'Hakkımızda',
      subtitle: 'Firmamız hakkında bilgi',
      order: "3",
    },
    {
      id: "4",
      parentId: "1000",
      img: '',
      icon: 'MdContactMail',
      slug: '#',
      title: 'İletişim',
      subtitle: 'Bize ulaşın',
      order: "4",
    }
  ];


  return (
    <div className={styles.icon}>
      <MdOutlineAlignHorizontalCenter size={22}  className={styles.figure}/>
      <div className={styles.menu}>
        <div className={styles.header}>
          <h3 className="text-white">Hızlı Bağlantılar</h3>
          <span className="badge badge-info my-1">33 Hızlı Bağlantı</span>
        </div>
        <ul className={styles.links}>
          {menuItems.map(mainItem => {
            const IconComponent = Icons[mainItem.icon];
            return (
              <li key={mainItem.id}>
                {IconComponent && <IconComponent size={30} color={mainItem.color} />}
                <Link href={mainItem.slug}>
                  {mainItem.title}
                  <span>{mainItem.subtitle}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.footer}>
          <a href="#" className={styles.view}>
            Tüm Bağlantılar <MdArrowRightAlt size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default QuickLinks