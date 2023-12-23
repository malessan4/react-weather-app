
export const WeatherApp = () => {

  const [ciudad, setCiudad] = useState()
  const [dataClima, setDataClima] = useState(second)

  const handleCambioCiudad = ()=>{
    setCiudad(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(ciudad.length > 0) fetchClima()
  }


  return (
    <div className="container">
      <h1>Aplicacion de clima</h1>

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
