import React from 'react';
import './JobTargetting.css'; // Assuming you have a corresponding CSS file for styles

const JobTargeting = ({ title, jobTitles, onOpen }) => {
    return (
        <button onClick={onOpen} className="job-targeting-container">
            <div className="title-box">
                <h1>{title}</h1>
            </div>
            <div className="job-type-box">
                {jobTitles.map((jobTitle, index) => (
                    <div key={index} className="job-title-box">
                        {jobTitle}
                    </div>
                ))}
            </div>
            <button onClick={onOpen}>Edit Job Titles</button>
        </button>
    );
};

export default JobTargeting;
