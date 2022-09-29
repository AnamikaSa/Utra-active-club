import React from 'react';

const ActivityList = (props) => {
    const { title, img, age, time, details } = props.activity;
    return (
        <div className='w-64'>
            <img className='rounded-lg h-52' src={img} alt="" />
            <p className='font-extrabold mt-5'>{title} <br /></p>
            <p className='mt-5'>{details}</p> <br />
            <p className='font-bold'>For Age: {age}</p>
            <p className='font-bold'>Time required: {time}</p>
            <button className='mt-6 rounded p-2 bg-fuchsia-500 w-full'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default ActivityList;