import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div className="white f3">
            <p>{name} Your current entry count is ...</p>
            {`${entries}`}
        </div>
    )
}

export default Rank;