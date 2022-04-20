import React from 'react'
import './style.css'

const Card = ({pName,img, skill, value, date, vs, ccode}) => {
    return (
        <div className='card'>
            <h2 className='mid'>{pName}</h2>
            <img src={`/images/${img}.jpg`} alt={pName} />
            <h3>Skills: <span className="grey">{skill}</span> </h3>
            <h4>Value: <span className="grey">${value}</span></h4>
            <h4> Upcoming Matches: <span className="grey">{ccode} vs {vs}</span> </h4>
            <h4>Date:- <span className="grey">{date}</span></h4>
        </div>
    )
}

export default Card
