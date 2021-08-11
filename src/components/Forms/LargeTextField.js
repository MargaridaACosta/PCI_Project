import React from 'react';
import './../../styles/components.scss'

const LargeTextField = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="formRowLarge">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default LargeTextField;
