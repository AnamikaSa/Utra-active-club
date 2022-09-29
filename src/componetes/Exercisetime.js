import React from 'react';
import logo from '../images/1648826689453.jpg';

const Exercisetime = (props) => {
    const { myBio }=props;
    // console.log( myBio );
    let totalTime=0;
    for (const activity of myBio){
        totalTime+=activity.time;
    }
    return (
        <div>
                <div className='flex justify-center'>
                    <img className='rounded-full w-12' src={logo} alt="" />
                    <p className='ml-5'>Anamika Sarker <br /> <span>Sydney,   Australia</span></p>
                </div>
                <div className='flex mt-10 ml-14'>
                    <div className='pr-5 ml-5'>
                        <h2 className='text-xl font-extrabold'>55kg</h2>
                        <p className='text-zinc-400'>Weight</p>
                    </div>
                    <div className='pr-5'>
                        <h2 className='text-xl font-extrabold'>5.3</h2>
                        <p className='text-zinc-400'>Height</p>
                    </div>
                    <div className='pr-5'>
                        <h2 className='text-xl font-extrabold'>25yrs</h2>
                        <p className='text-zinc-400'>Age</p>
                    </div>
                </div>

                <div>
                    <p className='text-xl font-bold mt-8 ml-6'>Add A Break</p>
                    <div className='p-6 ml-5'>
                        <button className=' rounded-full p-2 bg-purple-500 hover:bg-fuchsia-400'>10s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>20s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>30s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>40s</button>
                        <button className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>50s</button>
                    </div>
                </div>
                
                <div>
                    <p className='text-xl font-bold mt-8 ml-6'>Exercise Details</p>
                    <p className='p-5 text-lg ml-6'>Exercise time : {totalTime}<span> s</span></p>
                    <p className='p-5 text-lg ml-6'>Break Time    : </p>
                    <button className='rounded p-2 bg-fuchsia-500 w-full hover:bg-purple-400'>Activity Completed</button>
                </div>
            </div>
    );
};

export default Exercisetime;