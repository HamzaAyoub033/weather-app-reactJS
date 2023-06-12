import React, { useEffect, useState } from "react";
//a2881c4575cbd5ec277fb7b6cbfd1e0a
//https://api.openweathermap.org/data/2.5/weather?q={city}&appid={}
const Weather = () =>{
    const [apiData, setApiData] = useState()
    const [search, setSearch] = useState("")
    useEffect(()=>{
const fetchData = async () =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a2881c4575cbd5ec277fb7b6cbfd1e0a`)
   const data= await (await res).json()
   console.log(data);
   if(res.ok){
    setApiData(data)
   }
}; fetchData()
    },
    [search])
    return (
<div className="box">
    <h1>Weather</h1>
    <input type="text" name="search" placeholder="Search city..." onChange={(e)=>setSearch(e.target.value)} value={search}/>
     {apiData? <div className="element">
     <img src={"http://openweathermap.org/img/w/" + apiData.weather[0].icon + ".png"} />
    <p>Temp : <span>{apiData.main.temp}</span></p>
    <p>pressure :<span>{apiData.main.pressure}</span> </p>
    <p>Main :<span>{apiData.weather[0].description}</span></p>
    
   </div> 
   : <p>No Data Found</p>}
    </div>
    )
}

export default Weather;