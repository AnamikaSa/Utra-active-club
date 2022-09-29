import React from 'react';

const ActivityList = ({ activity, handleAdd }) => {
    const { title, img, age, time, details } = activity;
    return (
        <div>
            <div className='w-64'>
                <img className='rounded-lg h-52' src={img} alt="" />
                <p className='font-extrabold mt-5'>{title} <br /></p>
                <p className='mt-5'>{details}</p> <br />
                <p className='font-bold'>For Age: {age}</p>
                <p className='font-bold'>Time required: {time} <span>s</span></p>
                <button onClick={() => handleAdd(activity)} className='mt-6 rounded bg-fuchsia-500 p-2 w-full hover:bg-purple-400'>
                    <p>Add to list</p>
                </button>
            </div>

        </div>

    );
};

export default ActivityList;