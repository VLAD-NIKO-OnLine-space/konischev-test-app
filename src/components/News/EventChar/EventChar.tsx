import React from 'react';
import styles from './EventChar.module.css'



const EventChar: React.FC = () => {
    return (
        <div className={styles.main}>
            <img src="./img/video.png" alt="video" className={styles.video}/>
            <div className={styles.info}>
                <p className={styles.text}>Тяга резинки в шаге со сгибанием локтя под 90 градусов </p>
                <div className={styles.subInfo}>
                    <div className={styles.actions}>
                        <img src="./icons/camera.svg" alt="" />
                        <p>Вебинар</p>
                    </div>
                    <div className={styles.actions}>
                        <img src="./icons/calendar.svg" alt="" />
                        <p>9 марта 2021</p>
                    </div>
                    <div className={styles.actions}>
                        <img src="./icons/clock.svg" alt="" />
                        <p>17:00</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default EventChar;