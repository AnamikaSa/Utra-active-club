import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../images/1648826689453.jpg';

const Exercisetime = (props) => {
    const { myBio }=props;
    // console.log( myBio );
    let totalTime=0;
    for (const activity of myBio){
        totalTime+=activity.time;
    }
    const [breaktime, setBreaktime] = useState([]);

    const handleAddBreaktime = (breaktime) => {

        // console.log(breaktime);
        setBreaktime(breaktime)
        localStorage.setItem('breaktime', JSON.stringify(breaktime));

    };
    const showToastMessage = () => {
            toast('Yes! Finished The Activity', {
                position: toast.POSITION.TOP_RIGHT
            });
        };

    useEffect(() => {
        const breaktime = localStorage.getItem('breaktime');
        if (breaktime) {
            setBreaktime(JSON.parse(breaktime));
        }
        else {
            setBreaktime(0);
        }

    }, []);

    

    return (
        <div>
                <div className='flex justify-center'>
                    <img className='rounded-full w-12' src={logo} alt="" />
                    <p className='ml-5'>Anamika Sarker <br /> <FontAwesomeIcon icon={faLocationDot}/> <span> Sydney,   Australia</span></p>
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
                    <div className='p-5 ml-1'>
                        <button onClick={() => handleAddBreaktime(10)} className=' rounded-full p-2 bg-purple-500 hover:bg-fuchsia-400'>10m</button>
                        <button onClick={() => handleAddBreaktime(20)} className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>20m</button>
                        <button onClick={() => handleAddBreaktime(30)} className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>30m</button>
                        <button onClick={() => handleAddBreaktime(40)} className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>40m</button>
                        <button onClick={() => handleAddBreaktime(50)} className=' rounded-full p-2 ml-3 bg-purple-500 hover:bg-fuchsia-400'>50m</button>
                    </div>
                </div>
                
                <div>
                    <p className='text-xl font-bold mt-8 ml-6'>Exercise Details</p>
                    <p className='p-5 text-lg ml-6'>Exercise time : {totalTime}<span> Seconds</span></p>
                    <p className='p-5 text-lg ml-6'>Break Time    : {breaktime} <span> min</span> </p>
                    <button onClick={showToastMessage}  className='rounded p-2 bg-fuchsia-500 w-full hover:bg-purple-400'>Activity Completed</button>
                    <ToastContainer/>
                </div>
            </div>
    );
    
};


export default Exercisetime;