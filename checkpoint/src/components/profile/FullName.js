import React from 'react'
import Age from './Age'
import PropTypes from 'prop-types'; 

const FullName = ({esm, la9ab, AlertMe}) => {
  const style={color:"red", textDecoration:"underline"}
  return (
    <div>
      <h1 style={style}>my name is {esm} and my lastname is {la9ab}</h1>
      <Age> zdazdazdadz </Age>
      <button onClick={AlertMe}>click me </button>
    </div>
  )
}
FullName.defaultProps={
  esm:"foulen",
  la9ab:"ben foulen"
}
FullName.propTypes = {
  esm: PropTypes.string,
  la9ab: PropTypes.string,
  
}

export default FullName
