import React, { useState } from 'react';
import './JobSearchTargetting.css'; // Make sure you have this CSS file

const JobSearchTargetting = ({ initialJobTitles, onClose }) => {
    const [jobTitles, setJobTitles] = useState(initialJobTitles);
    const [newTitle, setNewTitle] = useState('');

    const handleAddTitle = () => {
        if (newTitle) {
            setJobTitles([...jobTitles, newTitle]);
            setNewTitle('');
        }
    };

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    };

    const removeJobTitle = (index) => {
        setJobTitles(jobTitles.filter((_, i) => i !== index));
    };

    return (
        <div className="job-search-targetting-backdrop">
            <div className="job-search-targetting-container">
                <h2>Job Search Targeting</h2>
                <div className="job-search-input-container">
                    <input
                        type="text"
                        className={"input-box"}
                        value={newTitle}
                        onChange={handleTitleChange}
                        placeholder="Add Job Titles"
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTitle()}
                    />
                    <button className="add-button" onClick={handleAddTitle}>Add </button>
                </div>
                <div className="job-title-list">
                    {jobTitles.map((title, index) => (
                        <div key={index} className="job-title-item">
                            {title}
                            <button onClick={() => removeJobTitle(index)} className="remove-button">X</button>
                        </div>
                    ))}
                </div>
                <div className="actions">
                    <button onClick={onClose} className="cancel-button">Cancel</button>
                    <button onClick={onClose} className="confirm-button" disabled={jobTitles.length === 0}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default JobSearchTargetting;
