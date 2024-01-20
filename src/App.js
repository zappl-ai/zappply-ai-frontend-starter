import React, { useState } from 'react';
import JobTargeting from './ComponentExample/JobTargetting';
import JobSearchTargetting from './ComponentExample/JobSearchTargetting'; // Adjust the path as needed

const App = () => {
    const [showJobSearch, setShowJobSearch] = useState(false);
    const initialJobTitles = ['Full-Stack Engineer', 'Software Engineer', 'Devops Engineer', 'Cloud Devops Engineer', 'Machine Learning Engineer'];

    const handleJobTargetClick = () => {
        setShowJobSearch(true);
    };

    const handleClose = () => {
        setShowJobSearch(false);
    };

    return (
        <div>
            <JobTargeting title="Job Titles" jobTitles={initialJobTitles} onOpen={handleJobTargetClick} />
            {showJobSearch && <JobSearchTargetting initialJobTitles={initialJobTitles} onClose={handleClose} />}
        </div>
    );
};

export default App;
