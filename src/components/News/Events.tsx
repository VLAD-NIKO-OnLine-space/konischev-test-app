import React from 'react';
import EventChar from './EventChar/EventChar';

interface EventsProps {
    
}

const Events: React.FC<EventsProps> = () => {
    return (
        <div>
            <EventChar/>
            <EventChar/>
            <EventChar/>
            <EventChar/>
        </div>
    );
};

export default Events;