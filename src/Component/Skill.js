import React from 'react';
import './Skill.css';

function Skill () {
    return (
        <div className='skil' id='skil'>
            <div className='kiri'>
            <div className="progress">
                <div className="progress-value ani-1">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-value ani-2">
                    <p>CSS</p>
                    <p>85%</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-value ani-3">
                    <p>JavaScript</p>
                    <p>75%</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-value ani-4">
                    <p>React</p>
                    <p>93%</p>
                </div>
            </div>
            </div>
            <div className='kiri'>
            <div className="progress">
                <div className="progress-value ani-5">
                    <p>Node.Js</p>
                    <p>62%</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-value ani-6">
                    <p>Bootstrap</p>
                    <p>80%</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-value ani-7">
                    <p>UI Design</p>
                    <p>78%</p>
                </div>
            </div>
            <div className="progress">
                <div className="progress-value ani-8">
                    <p>Adobe XD</p>
                    <p>70%</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Skill;