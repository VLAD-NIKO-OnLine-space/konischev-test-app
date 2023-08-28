import React, { useState } from 'react';
import styles from './MainUserFrame.module.scss'
import UserActive from '../../store/UserActive';
import { observer } from 'mobx-react';

const MainUserFrame: React.FC = observer(() => {
    const [visible, setVisible] = useState<boolean>(false)
    const rootStyleModal = [styles.modal]
    if(visible){
        rootStyleModal.push(styles.modalAcrive)
    }
    return (
        <div className={styles.frame}>
            <div className={styles.main}> 
                <img src={UserActive.userAvatar} alt="avatar" className={styles.userIcon}/>
                <div className={styles.infoUser}>
                    <p className={styles.name}>{UserActive.userName}</p>
                    <p className={styles.info}>{UserActive.userInfo}</p>
                </div>
            </div>
            <img src="./icons/Shape.svg" alt="icon" className={visible ? styles.shapeActive : styles.shape} onClick={()=>setVisible(!visible)}/>
            <div className={rootStyleModal.join(' ')}>
                <button className={styles.actionButton}>Изменить</button>
                <button className={styles.actionButton}>Удалить</button>
            </div>
        </div>
    );
});
export default MainUserFrame;