import React from "react";
import './ResultsContainer.css';
import NameCard from "../NameCard/NameCard";

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNamesJsx = suggestedNames.map(suggestedNames => {
        return <NameCard key={suggestedNames} suggestedNames={suggestedNames} />;
    });

    return (
        <div className="results-container">
            {suggestNamesJsx}
        </div>
    );
}

export default ResultsContainer;