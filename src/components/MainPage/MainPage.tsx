import React, { useState } from 'react';

import { USERS } from '../../database/userData';
import UserList from '../UserList/UserList';
import styles from './MainPage.module.scss'
import MyInput from '../../UI/MyInput/MyInput';
import FrameAction from '../../UI/FrameAction/FrameAction';
import { TUsers } from '../../types/UserType';
import LeftBar from '../LeftBar/LeftBar';
import RigthBar from '../RigthBar/RigthBar';


const InitState:TUsers[] = USERS

const MainPage: React.FC = () => {

    const [value, setValue] = useState<string>('')
    const [users, setUsers] = useState<TUsers[]>(InitState)

    return (
        <div className={styles.main}>
            <LeftBar users={users}/>
            <RigthBar/>
        </div>
    );
};

export default MainPage;