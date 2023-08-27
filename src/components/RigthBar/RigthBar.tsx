import React from 'react';
import MainUserFrame from '../../UI/MainUserFrame/MainUserFrame';
import MainUserAction from '../../UI/MainUserAction/MainUserAction';
import styles from './RigthBar.module.scss'

interface RigthBarProps {
    
}

const RigthBar: React.FC<RigthBarProps> = () => {
    return (
        <div className={styles.main}>
            <MainUserFrame/>
            <MainUserAction/>
        </div>
    );
};

export default RigthBar;