import React from 'react';
import ConsultationChar from './ConsultationChar/ConsultationChar';



const date = [
    {id: 1, title: 'Online консультация', date: '15.01.2019, 12:30-13:00', status: '', img: './icons/c1.svg'},
    {id: 2, title: 'Online консультация', date: '15.01.2019, 12:30-13:00', status: '', img: './icons/c2.svg'},
    {id: 3, title: 'Личный приём', date: '15.01.2019, 12:30-13:00', status: 'Не подтверждена', img: './icons/c2.svg'},
]

const Consultation: React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {date.map(e => <ConsultationChar img={e.img} title={e.title} date={e.date} status={e.status} key={e.id}/>)}
        </div>
    );
};

export default Consultation;