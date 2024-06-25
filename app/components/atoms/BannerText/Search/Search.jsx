"use client"
import { useEffect, useRef, useState } from "react";
import styles from './search.module.scss';

const data = [
    { id: 1, title: 'Muz' },
    { id: 2, title: 'muzlu Süt' },
    { id: 3, title: 'Çilek' },
    { id: 4, title: 'çilekli süt' },
    { id: 5, title: 'Kahve' },
    { id: 6, title: 'Filtre kahve' },
    { id: 7, title: 'Soğuk Filtre Kahve' }
];

const Search = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState([]);
    const searchRef = useRef(null);

    const isTyping = search.trim().length > 0;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearch('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isTyping) {
            const filterResult = data.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
            setResult(filterResult);
        } else {
            setResult([]);
        }
    }, [search]);

    return (
        <div className={styles.search} ref={searchRef}>
            <input 
                type="text" 
                value={search} 
                className={isTyping ? styles.typing : null} 
                placeholder="Aradığın şey nedir?" 
                onChange={(e) => setSearch(e.target.value)} 
            />
            {isTyping && (
                <div className={styles.searchResult}>
                    {result.length > 0 ? (
                        result.map(item => (
                            <div key={item.id} className={styles.searchResultItem}>
                                <p>{item.title}</p>
                            </div>
                        ))
                    ) : (
                        <div className={styles.resultNotFound}>
                            "{search}" ile ilgili bilgi bulamadık!
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
