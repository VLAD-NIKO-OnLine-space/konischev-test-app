import React, { useState, MouseEventHandler } from 'react';
import styles from './MainUserAction.module.scss'
import { observer } from 'mobx-react';
import NewsSelect from '../../store/NewsSelect';
import Modal from '../Modal/Modal';

const MainUserAction: React.FC = observer(() => {
    const [click, setClick] = useState<string>('1')
    const [visible, setVisible] = useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const button: HTMLButtonElement = event.currentTarget;
        setClick(button.name);
        NewsSelect.addSelectNews(button.name)
    }

    let text:string = 'Новая заметка'
    switch(NewsSelect.selectNew){
        case '1': text='Новая заметка'; break;
        case '2': text = 'Записать'; break;
        case '3': text = 'Рекомендовать'; break;
        case '4': text = 'Рекомендовать'; break;
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
            <div className={styles.rigthWrapper}>
                <button className={styles.btn}>{text}</button>
                <img src="./icons/addButton.png" alt="add" className={styles.addBtn} onClick={()=>setVisible(true)}/>
            </div>
            <Modal visible={visible} setVisible={setVisible}>
                Модальное окно в разработке))
            </Modal>
        </div>
    );
});

export default MainUserAction;