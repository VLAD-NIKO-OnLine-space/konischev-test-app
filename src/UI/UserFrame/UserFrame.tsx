import React from 'react';
import styles from './UserFrame.module.scss'
import { observer } from 'mobx-react';
import UserActive from '../../store/UserActive';


interface UserFrameProps {
    id: number
    name: string
    surName?: string
    avatar: string
    info: string
}

const UserFrame: React.FC<UserFrameProps> = observer(({ name, surName, avatar, info }) => {

    const handleClick = () => {
        UserActive.selectUser(name, info, avatar)
    }

    return (
        <div className={styles.frame} onClick={handleClick}>
            <img src={avatar} alt="" className={styles.avatar}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.name}>{surName}</p>
        </div>
    );
});

export default UserFrame;