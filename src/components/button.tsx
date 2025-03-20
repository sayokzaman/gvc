'use client'
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button className={`cursor-pointer ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button
