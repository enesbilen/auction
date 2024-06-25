import React from 'react';
import { MdSearch } from 'react-icons/md';
import styles from './search.module.scss';

const Search = () => {
  return (
    <div className={styles.search} >
      <MdSearch className={styles.searchIcon} />
      <input type="text" className={styles.searchInput} name="search"  placeholder="Arama yap..." />
    </div>
  );
};

export default Search;
