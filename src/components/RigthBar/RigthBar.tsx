import React from 'react';
import MainUserFrame from '../../UI/MainUserFrame/MainUserFrame';
import MainUserAction from '../../UI/MainUserAction/MainUserAction';
import styles from './RigthBar.module.scss'
import NewsBar from '../NewsBar/NewsBar';


const RigthBar: React.FC = () => {
    return (
        <div className={styles.main}>
            <MainUserFrame/>
            <MainUserAction/>
            <NewsBar/>
        </div>
    );
};

export default RigthBar;