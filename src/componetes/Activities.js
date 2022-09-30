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
        <div>
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
                    <Exercisetime myBio={myBio}></Exercisetime>
                </div>
            </div>

            <div className='md:mx-auto p-10 bg-fuchsia-300'>
                <p className='font-bold text-2xl mb-10 text-center'> Some Questions</p>
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  text-gray-900 dark:text-white"
                            data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                            aria-controls="accordion-collapse-body-1">
                            <span>How does React work?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 ">
                            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-2">
                        <button type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  text-gray-900 dark:text-white"
                            data-accordion-target="#accordion-collapse-body-2" aria-expanded="true"
                            aria-controls="accordion-collapse-body-2">
                            <span>Difference between Props And State?</span>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 ">
                            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-3">
                        <button type="button"
                            className="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  text-gray-900 dark:text-white"
                            data-accordion-target="#accordion-collapse-body-3" aria-expanded="true"
                            aria-controls="accordion-collapse-body-3">
                            <span>For what purpose useEffect used?</span>

                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 ">
                            <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Activities;