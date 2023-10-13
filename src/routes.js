import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Erro from './pages/Erro'
import Filme from './pages/Filme'

function RoutesApp () {
    return(

        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/Favoritos' element={ <Favoritos/>} />
                <Route path='/Filme/:id' element={ <Filme/> } />

                <Route path='*' element={ <Erro/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default RoutesApp