import React from 'react'
import Card from './Card'
import './style.css'


const CardList = ({playerData}) => {
    const render = playerData.map((ele,index)=><Card key={index} pName={ele.PFName} img={ele.Id} skill={ele.SkillDesc} value={ele.Value} ccode={ele.UpComingMatchesList[0].CCode} vs={ele.UpComingMatchesList[0].VsCCode}
    date={ele.UpComingMatchesList[0].MDate}/>)
    return (
        <div className='cards--list'>
            {render}
        </div>
    )
}

export default CardList
