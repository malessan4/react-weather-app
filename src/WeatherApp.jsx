import {useState} from "react"

export const WeatherApp = () => {

  const urlBase = `https://api.openweathermap.org/data/2.5/weather`
  const API_KEY = 'a3961611948a9cd2b1c692920676a458'

  const [ciudad, setCiudad] = useState('')
  const [dataClima, setDataClima] = useState(null)

  const handleCambioCiudad = (e)=> {
    setCiudad(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(ciudad.length > 0) fetchClima()
  }

  const fetchClima = async () => {
    try{
      const response = await fetch (`${urlBase}?=${ciudad}&appid=${API_KEY}`)
      const data = await response.json()
      setDataClima(data)
  }catch(error){
    console.error(error)
  }
}
  return (
    <div className="container">
      <h1>Aplicación de clima</h1>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={ciudad}
        onChange={handleCambioCiudad}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}