import React, { useState } from 'react'
import './style.css'


const SearchBar = ({changeHandler}) => {
    const [searchCategory, setSearchCategory] = useState('player')
    const changeSearch = (e) => {
        setSearchCategory(e.target.value) 
    }
    return (
        <div className='search'>
            <input type="text" className='input--box' id={searchCategory} placeholder={searchCategory==='player'?'search by player name':'search by team name'} onChange={changeHandler}/>
            <select name="searchCategory" onChange={changeSearch}>
                <option value="player">Player</option>
                <option value="team">Team</option>
            </select>
        </div>
    )
}

export default SearchBar
