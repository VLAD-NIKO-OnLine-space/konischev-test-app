import React, { useState } from 'react';
import MyInput from '../../UI/MyInput/MyInput';
import FrameAction from '../../UI/FrameAction/FrameAction';
import UserList from '../UserList/UserList';
import { USERS } from '../../database/userData';
import { TUsers } from '../../types/UserType';
import styles from './LeftBar.module.scss'

interface LeftBarProps {
    users: TUsers[]
}

const LeftBar: React.FC<LeftBarProps> = ({ users }) => {
    const [value, setValue] = useState<string>('')

    return (
        <div className={styles.main}>
            <MyInput 
                value={value}
                onChange={event => setValue(event.target.value)}
                placeholder='Поиск...'
            />
            <FrameAction/>
            <UserList users={users}/>
        </div>
    );
};

export default LeftBar;