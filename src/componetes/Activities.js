import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('fitnes.Json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='flex justify-between'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    activities.map(activity => <ActivityList 
                    key={activity.id}
                    activity={activity}>

                    </ActivityList>)
                }
            </div>
            <div>
                <p>My Bio</p>
            </div>
        </div>
    );
};

export default Activities;