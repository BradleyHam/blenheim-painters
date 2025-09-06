import React from 'react'

const HeadingTag = ({ children }) => {
  return (
    <div className="flex px-6 py-2 border border-gold/20 bg-gold/10 text-gold rounded-full">
     <p className={`text-sm font-bold tracking-normal`}>{children}</p>
    </div>
  )
}

export default HeadingTag