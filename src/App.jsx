import {useState, useEffect} from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import RowPost from './components/Post/RowPost'
import { originals, action, comedy, romance } from './url'

export default function App() {

  const [blackHeader, setBlackHeader] = useState(false)

useEffect(() =>{
      const scrollListener = () =>{
        if(window.scrollY > 80) {
          setBlackHeader(true)
        } else {
          setBlackHeader(false)
        }

      }

      window.addEventListener('scroll', scrollListener)

      return() =>{
      window.removeEventListener('scroll', scrollListener)
      }
},[])

  return (
    <div>
    <NavBar black={blackHeader} />
    <Banner />
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={action} title='Action' />
    <RowPost url={romance} title='Romance' />
    <RowPost url={comedy} title='Comedy' />
    <Footer />
    </div>
  )
}


