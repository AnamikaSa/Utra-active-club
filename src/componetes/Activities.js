import React, { useEffect, useState } from 'react';
import ActivityList from './ActivityList';
import Exercisetime from './Exercisetime';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [myBio, setBio] = useState([]);

    useEffect(() => {
        fetch('fitnes.JSON')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const handleAdd = (SelectTime) => {
        // console.log(SelectTime);
        let myBioTime = [...myBio, SelectTime];
        setBio(myBioTime);
    }

    return (
        <div className='bg-fuchsia-300 justify-between grid md:grid-cols-2 gap-y-20 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-56 md:gap-y-24 gap-y-10'>
                {
                    activities.map(activity => <ActivityList
                        key={activity.id}
                        activity={activity}
                        handleAdd={handleAdd}>
                    </ActivityList>)
                }
                </div>
            <div className=' md:ml-64 bg-purple-300 p-3'>
                <Exercisetime myBio={ myBio }></Exercisetime>
            </div>

        </div>

    );
};

export default Activities;