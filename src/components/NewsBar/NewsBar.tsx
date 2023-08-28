import React from 'react';
import styles from './NewsBar.module.scss'
import { observer } from 'mobx-react';
import NewsSelect from '../../store/NewsSelect';
import Notes from '../News/Notes';
import Consultation from '../News/Consultation';
import Video from '../News/Video';
import Events from '../News/Events';

const NewsBar: React.FC = observer(() => {

    let component = <Notes/>

    switch(NewsSelect.selectNew){

        case '1': component=<Notes/>; break;
        case '2': component = <Consultation/>; break;
        case '3': component = <Video/>; break;
        case '4': component = <Events/>; break;

    }

    return (
        <div className={styles.main}>
            {component}
        </div>
    );
});

export default NewsBar;