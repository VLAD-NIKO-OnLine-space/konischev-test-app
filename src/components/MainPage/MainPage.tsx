import React, { useState } from 'react';

import { USERS } from '../../database/userData';
import styles from './MainPage.module.scss';
import { TUsers } from '../../types/UserType';
import LeftBar from '../LeftBar/LeftBar';
import RigthBar from '../RigthBar/RigthBar';


const InitState:TUsers[] = USERS

const MainPage: React.FC = () => {

    const [users, setUsers] = useState<TUsers[]>(InitState)

    return (
        <div className={styles.main}>
            <LeftBar users={users}/>
            <RigthBar/>
        </div>
    );
};

export default MainPage;