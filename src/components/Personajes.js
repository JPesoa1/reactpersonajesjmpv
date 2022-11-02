import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
export default class Personajes extends Component {
    state={
        personajes:[],
        status:false
    }
    cargarTabla=()=>{
        var request="/api/Series/PersonajesSerie/"
        var url=Global.urlSeries+request+this.props.id;

        axios.get(url).then(res=>{
            this.setState({
                personajes:res.data,
                status:true
            })
        })
    }
    componentDidMount=()=>{
        this.cargarTabla();
    }

  render() {
    return (
      <div>
        <NavLink to={"/serie/"+this.props.id} className="btn btn-danger">Volver</NavLink><br/>
        <table>
            <thead>
                <tr>
                    <th>Personaje</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status==true &&
                        this.state.personajes.map((personaje,index)=>{
                            return(<tr>
                                <td>{personaje.nombre}</td>
                                <td><img style={{width:"200px"}} src={personaje.imagen} alt="imagen"/></td>
                            </tr>)
                        })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
