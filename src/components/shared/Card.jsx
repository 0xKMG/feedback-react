import React from 'react'
import PropTypes from 'prop-types'
function Card({ children, reverse }) {

    const elementStyle = { backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white" }
    return (
        // <div className={`card ${reverse && 'reverse'}  `}> 
        // {children}</div >

        <div className='card' style={reverse ? elementStyle : null} >{children}</div >

    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {

    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,


}


export default Card