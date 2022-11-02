import React, { Component } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import NuevoPersonaje from './components/NuevoPersonaje'
import ModificarPersonaje from './components/ModificarPersonaje'
import Serie from './components/Serie'
import Personajes from './components/Personajes'
import MenuRutas from './components/MenuRutas'
import Home from './components/Home'
import { useParams } from 'react-router-dom'
export default class Router extends Component {
  render() {
    function SerieElement(){
        var{id}=useParams();
        return(<Serie id={id}/>)
    }

    function PersonajesElement(){
        var{id}=useParams();
        return(<Personajes id={id}/>)
    }
    return (
      <div>
        <BrowserRouter>
            <MenuRutas/>
            <Routes>
                <Route path='/nuevopersonaje' element={<NuevoPersonaje/>}/>
                <Route path='/modificar' element={<ModificarPersonaje/>}/>
                <Route path='/serie/:id' element={<SerieElement/>}/>
                <Route path='/personajes/:id' element={<PersonajesElement/>}/>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
