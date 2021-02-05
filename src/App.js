import { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header'
import CharacterGrid from './Components/CharacterGrid'
import Search from './Components/Search'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  
  return (
    <div className="contaner">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App;
