import React, { useState, MouseEventHandler } from 'react';
import styles from './MainUserAction.module.scss'

interface MainUserActionProps {
    
}

const MainUserAction: React.FC<MainUserActionProps> = () => {

    const [click, setClick] = useState<string>('1')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;
        setClick(button.name);
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.leftButtons}>
                <button className={click==='1' ? styles.activeBtn : styles.btn} name='1' onClick={handleClick}>Заметки</button>
                <span></span>
                <button className={click==='2' ? styles.activeBtn : styles.btn} name='2' onClick={handleClick}>Консультации</button>
                <span></span>
                <button className={click==='3' ? styles.activeBtn : styles.btn} name='3' onClick={handleClick}>Видео</button>
                <span></span>
                <button className={click==='4' ? styles.activeBtn : styles.btn} name='4' onClick={handleClick}>Мероприятия</button>
            </div>

            <div>
                <button className={styles.btn}>Новая заметка</button>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default MainUserAction;