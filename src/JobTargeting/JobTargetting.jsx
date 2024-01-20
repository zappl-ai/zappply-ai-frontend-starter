import React, {useState} from 'react';
import './JobTargetting.css';
import JobSearchTargetting from "../JobSearchTargetting/JobSearchTargetting"; // Assuming you have a corresponding CSS file for styles


const initialJobTitles = ['Full-Stack Engineer', 'Software Engineer', 'Devops Engineer', 'Cloud Devops Engineer', 'Machine Learning Engineer'];



const JobTargeting = ({ title }) => {
    const [showJobSearch, setShowJobSearch] = useState(false);

    const handleJobTargetClick = () => {
        setShowJobSearch(true);
    };

    const handleClose = () => {
        setShowJobSearch(false);
    };

    const onOpen = () => {
        setShowJobSearch(true);
    }




    return (
        <>
            <button onClick={onOpen} className="job-targeting-container">
                <div className="title-box">
                    <h1>{title}</h1>
                </div>
                <div className="job-type-box">
                    {initialJobTitles.map((jobTitle, index) => (
                        <div key={index} className="job-title-box">
                            {jobTitle}
                        </div>
                    ))}
                </div>
            </button>

            {
                showJobSearch && (
                    <JobSearchTargetting initialJobTitles={initialJobTitles} onClose={handleClose} />
                )
            }

        </>
    );
};

export default JobTargeting;
