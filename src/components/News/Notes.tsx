import React from 'react';
import styles from './Notes.module.css'
import { observer } from 'mobx-react';
import NewsSelect from '../../store/NewsSelect';


const Notes: React.FC = observer(() => {
    const date = new Date();
    return (
        <div className={styles.main}>
            {NewsSelect.userNotes.map((e,index) => <p key={index} className={styles.notes}><span>{date.toLocaleDateString()}</span>{e}</p>)}
            <img src="./img/map.jpg" alt="map" className={styles.map}/>
        </div>
    );
});

export default Notes;