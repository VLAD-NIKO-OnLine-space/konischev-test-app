import React from 'react';
import styles from './VideoChar.module.css'


interface VideoCharProps {
    img:string
    title: string
    avtor:string
    date: string
}


const VideoChar: React.FC<VideoCharProps> = ({ img, title, avtor, date }) => {
    return (
        <div className={styles.main}>
            <img src={img} alt="video" className={styles.img}/>
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <div className={styles.bottom}>
                    <p className={styles.avtor}>{avtor}</p>
                    <p className={styles.data}>{date}</p>

                </div>
            </div>
        </div>
    );
};

export default VideoChar;