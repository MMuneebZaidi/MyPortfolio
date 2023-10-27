import React from 'react';

const ProgressBar = ({ title, percentage, colorClass }) => {
    const strokeDashoffset = 440 - (440 * percentage) / 100;

    return (    
        <div className={`progressbar ${colorClass}`}>
        <svg className="progressbar__svg">
            <circle cx="80" cy="80" r="70" className="progressbar__svg-circle" style={{ strokeDashoffset }}></circle>
        </svg>
        <span className="progressbar__text">{title+" "+percentage+"%"}</span>
        </div>
    );
};

export default ProgressBar;
