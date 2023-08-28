import React from 'react';
import styles from './MainUserFrame.module.scss'
import UserActive from '../../store/UserActive';
import { observer } from 'mobx-react';


interface MainUserFrameProps {
    
}

const MainUserFrame: React.FC<MainUserFrameProps> = observer(() => {
    return (
        <div className={styles.frame}>
            <div className={styles.main}> 
                <img src={UserActive.userAvatar} alt="avatar" className={styles.userIcon}/>
                <div className={styles.infoUser}>
                    <p className={styles.name}>{UserActive.userName}</p>
                    <p className={styles.info}>{UserActive.userInfo}</p>
                </div>
            </div>
            <img src="./icons/Shape.svg" alt="icon" className={styles.shape}/>
        </div>
    );
});

export default MainUserFrame;