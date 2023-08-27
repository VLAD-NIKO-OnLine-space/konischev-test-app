import React from 'react';
import styles from './MainUserFrame.module.scss'

interface MainUserFrameProps {
    
}

const MainUserFrame: React.FC<MainUserFrameProps> = () => {
    return (
        <div className={styles.frame}>
            <div className={styles.main}> 
                <img src="./avatars/1.png" alt="" className={styles.userIcon}/>
                <div className={styles.infoUser}>
                    <p className={styles.name}>Рожков Денис Петрович</p>
                    <p className={styles.info}>30 лет, муж</p>
                </div>
            </div>
            <img src="./icons/Shape.svg" alt="icon" className={styles.shape}/>
        </div>
    );
};

export default MainUserFrame;