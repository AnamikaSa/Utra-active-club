import React from 'react';
import logo from '../images/health.png'
const Fitnes = () => {
    return (
        <div>
            <div className='flex'>
            <img className='w-24' src={logo} alt=""/>
            <h1 className='text-purple-500 text-2xl font-bold mt-8'>Fitness Club <span className='text-purple-900'>ByAnamika </span></h1>
            </div>
            <p className='font-semibold '>Select Today's Activity</p>
        </div>
    );
};

export default Fitnes;