import React from 'react';
import styles from './Header.module.css'



const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Работа Конищева Владислава. Извините, что не точно всё..оставался только день</h1>
        </header>
    );
};

export default Header;