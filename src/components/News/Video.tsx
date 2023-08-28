import React from 'react';
import styles from './Video.module.css';
import VideoChar from './VideoChar/VideoChar';



const data = [
    {id: 1, title: 'Крабик, ходьба в бок в приседе с двумя резинками Кра…', avtor: 'Астахова Е.В.', date: '', img: './img/v1.jpg'},
    {id: 2, title: 'Разминка для локтевого сустава', avtor: 'Астахова Е.В.', date: '15.01.2019 - 22.01.2019', img: './img/v2.jpg'},
    {id: 3, title: 'Разминка для локтевого суставаРазминка для локтевого..', avtor: 'Астахова Е.В.', date: '15.01.2019 - 22.01.2019', img: './img/v3.jpg'},
]

const Video: React.FC = () => { 
    return (
        <div className={styles.main}>
            {data.map(e => <VideoChar img={e.img} title={e.title} avtor={e.avtor} date={e.date} key={e.id}/>)}
            
        </div>
    );
};

export default Video;