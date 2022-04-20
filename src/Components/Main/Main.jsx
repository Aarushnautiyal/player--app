import React, { useState, useEffect } from 'react'
import CardList from './CardList'
import SearchBar from './SearchBar'
import './style.css'

const Main = () => {
    const [playerData, setPlayerData] = useState([])
    const [playerSearch, setPlayerSearch] = useState('')
    const [searchCategory, setSearchCategory] = useState('')
    // console.log(playerData);
    useEffect(()=>{
        fetch('https://api.npoint.io/20c1afef1661881ddc9c')
        .then(res=>res.json())
        .then(data=>setPlayerData(data.playerList))
    },[])

    const changeHandler = (e) =>{
        const val = e.target.value
        setSearchCategory(e.target.id)
        setPlayerSearch(val)
    }
        const filtered = playerData.filter(ele=>ele.TName.toLowerCase().includes(playerSearch.toLowerCase()))
        const filteredPlayer = playerData.filter(ele=>ele.PFName.toLowerCase().includes(playerSearch.toLowerCase()))
    return (
        <div className='main'>
            <SearchBar changeHandler={changeHandler}/>
            {searchCategory==='team'?<CardList playerData={filtered}/>:<CardList playerData={filteredPlayer}/>}
        </div>
    )
}

export default Main
