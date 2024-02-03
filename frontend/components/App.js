import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from "./card"

const api_key = "sdEFbLbKJ18dcGAt9aMN5TGSAh5EpQ5OLNVy6ohR"
const URL = "https://api.nasa.gov/#apod?apikey=${api_key}"




function App() {
  const [apod, setApod]= useState()

  useEffect(()=>{
    
  }, [])
  if (!apod)return 'fetching photo of the day'
  return (
    <section>
      <Card 
      title={apod.title}
      text = {apod.explanation}
      imageURL = {apod.url}
      date = {apod.date}/>
    </section>
  )
}

export default App
