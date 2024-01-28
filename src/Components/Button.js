import React from 'react'


const Button = ({i}) => {
  return (
    <div>
       <button className="px-5 py-2 ml-3 bg-gray-300 rounded-lg">{i}</button>
    </div>
  )
}

export default Button;