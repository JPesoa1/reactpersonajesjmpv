import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';


export default class NuevoPersonaje extends Component {
    cajaNombre=React.createRef();
    cajaImagen=React.createRef();
    cajaSerie=React.createRef();
    state={
        series:[],
        status:false
    }
    cargarSelect=()=>{
        var request="/api/Series";
        var url = Global.urlSeries+request;

        axios.get(url).then(res=>{
            this.setState({
                series:res.data,
                status:true
            })
            console.log(res.data)
        })

    }
    insertarPersonaje=(e)=>{
        e.preventDefault();
        var nombre=this.cajaNombre.current.value;
        var imagen=this.cajaImagen.current.value;
        var serie=parseInt(this.cajaSerie.current.value);

        var request="/api/Personajes";
        var url=Global.urlSeries+request;
        var personaje={
            "nombre":nombre,
            "imagen":imagen,
            "idSerie":serie
        }
        axios.post(url,personaje).then(res=>{
            this.setState({
                status:true
            })
            alert("Realizado")
        })

    }
    componentDidMount=()=>{
        this.cargarSelect();
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Nuevo Personaje</h1><br/>
        <form onSubmit={this.insertarPersonaje}>
            <label>Nombre:</label>
            <input type="text" ref={this.cajaNombre} required/><br/>

            <label>Imagen:</label>
            <input type="text" ref={this.cajaImagen} required/>

            <br/>
            <label>Serie:</label>
            <select ref={this.cajaSerie}>
                {
                    this.state.status==true &&
                        this.state.series.map((serie,index)=>{
                            return(<option value={serie.idSerie}>{serie.nombre}</option>)
                        })
                }
            </select>
            <br/>
            <button>Insertar personaje</button>
        </form>
        

    </div>
    )
  }
}
