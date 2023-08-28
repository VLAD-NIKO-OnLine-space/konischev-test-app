import React from 'react';
import styles from './ConsultationChar.module.css'

interface ConsultationCharProps {
    img: string
    title: string
    date: string
    status: string
}

const ConsultationChar: React.FC<ConsultationCharProps> = ({ img, status, date, title }) => {
    return (
        <div className={styles.main}>
            <img src={img} alt="icon" className={styles.icon}/>
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.date}>{date}</p>
            </div>
            <p className={styles.status}>{status}</p>
        </div>
    );
};

export default ConsultationChar;