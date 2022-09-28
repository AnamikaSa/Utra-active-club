import React, { useEffect, useState } from 'react';

const Activities = () => {
    const [activities, setActivities] =useState([]);

    useEffect(()=>{
        fetch('fitnes.Json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[])
    return (
        <div>
            <p>activities:{activities.length}</p>
        </div>
    );
};

export default Activities;