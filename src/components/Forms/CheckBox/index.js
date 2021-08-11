import React from 'react';
import './../../../styles/components.scss'

const Checkbox = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="checkboxInput">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default Checkbox ;