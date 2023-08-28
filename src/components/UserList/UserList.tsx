import React from 'react';
import { TUsers } from '../../types/UserType';
import UserFrame from '../../UI/UserFrame/UserFrame';
import styles from './UserList.module.scss'

interface UserListProps {
    users: TUsers[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div className={styles.wrapper}>
            {users.map(e => <UserFrame name={e.name} surName={e.surName} avatar={e.avatar} key={e.id} id={e.id} info={e.info}/>)}
        </div>
    );
};

export default UserList;