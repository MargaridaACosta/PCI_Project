import React from 'react';
import './../../../styles/components.scss'

const RadioButtons = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="radioButtons">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default RadioButtons;