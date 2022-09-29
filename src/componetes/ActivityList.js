import React from 'react';

const ActivityList = (props) => {
    const { title, img, age, time, details } = props.activity;
    return (
        <div className='w-64'>
            <img className='rounded-lg h-52' src={img} alt="" />
            <p className='font-extrabold'>{title} <br /></p>
            <p className='mt-5'>{details}</p> <br />
            <p className='font-bold'>For Age: {age}</p>
            <p>Time required: {time}</p>
        </div>
    );
};

export default ActivityList;