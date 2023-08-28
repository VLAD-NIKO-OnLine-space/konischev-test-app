import React from 'react';
import styles from './FrameAction.module.scss'

const FrameAction: React.FC = () => {
    return (
        <div className={styles.frame}>
            <p className={styles.counter}>213</p>
            <button className={styles.btn}>Выбрать</button>
        </div>
    );
};

export default FrameAction;