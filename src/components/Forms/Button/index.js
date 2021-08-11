import React from 'react'
import './../../../styles/components.scss'

const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn bg-black w-56 md:w-96 lg:w-96 xl:w-96 h-14 mt-8 rounded-lg font-extrabold"{...otherProps}>
            {children}
        </button>
    )
}

export default Button
