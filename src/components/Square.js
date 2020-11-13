import React from 'react';

const Square = ({ value, onClick }) => {
    return (
        <button className={value ? `squares ${value}` : 'squares'} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;
