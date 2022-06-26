import React from "react";
import './NameCard.css';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
const NameCard = ({ suggestedNames }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" className="card-link" href={`${nameCheapUrl}${suggestedNames}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedNames}</p>
            </div>
        </a>
    )
}

export default NameCard;