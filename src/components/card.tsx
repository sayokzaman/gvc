import React from 'react'

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return <div className={`bg-foreground/20 backdrop-blur-md rounded-2xl p-6 ${className}`}>{children}</div>
}

export default Card
