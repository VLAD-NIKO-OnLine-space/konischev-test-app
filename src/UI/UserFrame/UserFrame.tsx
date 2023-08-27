import React from 'react';
import styles from './UserFrame.module.scss'

interface UserFrameProps {
    id: number
    name: string
    surName?: string
    avatar?: string
}

const UserFrame: React.FC<UserFrameProps> = ({ name, surName, avatar }) => {
    return (
        <div className={styles.frame}>
            <img src={avatar} alt="" className={styles.avatar}/>
            <p className={styles.name}>{name}</p>
            <p className={styles.name}>{surName}</p>
        </div>
    );
};

export default UserFrame;