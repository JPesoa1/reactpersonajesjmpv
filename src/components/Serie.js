import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
export default class Serie extends Component {
    state={
        serie:{},
        status:false
    }
    cargarSerie=()=>{
        var request="/api/Series/";
        var url=Global.urlSeries+request+this.props.id;
        axios.get(url).then(res=>{
            this.setState({
                serie:res.data,
                status:true
            })
        })

    }
    componentDidMount=()=>{
        this.cargarSerie();
    }

    componentDidUpdate=(oldProps)=>{
        if(oldProps.id != this.props.id){
            this.cargarSerie();
        }
    }
    

  render() {
    if(this.state.status==false){
        return(<h1>No se ha realizado el GET</h1>)
    }
    return (
      <div>
        <h1>Serie</h1>
        <br/>
        <img src={this.state.serie.imagen} style={{width:"300px"}} alt="imagen"/>
        <br/>
        <h2>{this.state.serie.nombre}</h2>
        <br></br>
        <NavLink to={"/personajes/"+this.state.serie.idSerie} className="btn btn-info">Personajes</NavLink>
    
    
    
        </div>
    )
  }
}
