import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom';




export default class ModificarPersonaje extends Component {
    cajaSerie=React.createRef();
    cajaPersonajes=React.createRef();
    state={
        series:[],
        personajes:[],
        status:false,
        satus2:false,
        serie:{},
        personaje:{},
        statusPut:false
        
       
    }
    cargarSeries=()=>{
        var request="/api/Series";
        var url = Global.urlSeries+request;

        axios.get(url).then(res=>{
            this.setState({
                series:res.data,
                status:true
            })
           
        })
    }
    cargarPersonajes=()=>{
        var request="/api/Personajes";
        var url=Global.urlSeries+request;

        axios.get(url).then(resul=>{
            
            this.setState({
                personajes:resul.data,
                status2:true
            })
            
        })
       
        
    }
    
    serieImagen=()=>{
        
        var idSerie=0;
        var opcionserie=parseInt(this.cajaSerie.current.value);
        
        console.log(opcionserie)
        
        var request="/api/Series/";
        var url=Global.urlSeries+request+opcionserie;
        axios.get(url).then(res=>{
            console.log(res.data)
            this.setState({
                serie:res.data,
                status:true
            })
        })
        
    }
    personajeImagen=()=>{
        var opcionpersonaje=parseInt(this.cajaPersonajes.current.value);
        var request="/api/Personajes/";
        var url=Global.urlSeries+request+opcionpersonaje;

        axios.get(url).then(res=>{
            this.setState({
                personaje:res.data
            })
        })

    }

    cambiarPersonajeSerie=(e)=>{
        e.preventDefault();
        var opcionpersonaje=parseInt(this.cajaPersonajes.current.value);
        var opcionserie=parseInt(this.cajaSerie.current.value);

        var request="/api/Personajes/";
        var url=Global.urlSeries+request+opcionpersonaje+"/"+opcionserie;

        axios.put(url).then(res=>{
            console.log("Se ha realizado el PUT")
            this.setState({
                statusPut:true
            })
        })
        
    }

    componentDidMount=()=>{
        this.cargarSeries();
        this.cargarPersonajes();
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Personajes y series</h1>
        <br/>
        <form>
            <label>Seleccione una serie:</label>
            <br/>
            <select onChange={this.serieImagen} ref={this.cajaSerie}>
                {
                    this.state.status==true &&
                        this.state.series.map((serie,index)=>{
                            return(<option value={serie.idSerie}>{serie.nombre}</option>)
                        })
                }
            </select>
            <br/>
            <label>Seleccione un Personaje</label>
            <br/> 
            <select onChange={this.personajeImagen} ref={this.cajaPersonajes}>
                {
                    this.state.satus2==false &&
                        this.state.personajes.map((personaje,index)=>{
                            return(<option value={personaje.idPersonaje}>{personaje.nombre}</option>)
                        })
                }
            </select>
            <br/>
            <button onClick={this.cambiarPersonajeSerie}>Guardar Cambios</button>

           
        </form>
        {
            this.state.serie !=null &&
                (<div>
                    <h1>{this.state.serie.nombre}</h1>
                    <br/>
                     <img style={{width:"150px"}} src={this.state.serie.imagen} alt="imagen"/>
                </div>)

               
        }
        <br/>

        {
            this.state.personaje !=null &&
            (<div>
                <h1>{this.state.personaje.nombre}</h1>
                <br/>
                 <img style={{width:"150px"}} src={this.state.personaje.imagen} alt="imagen"/>
            </div>)

        }
    </div>
    )
  }
}
