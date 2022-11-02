import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global';

export default class MenuRutas extends Component {
    state={
        series:[],
        status:false
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
    componentDidMount=()=>{
        this.cargarSeries();
    }
  render() {
    return (
      <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to="/"className="nav-link active" aria-current="page">Home</NavLink>
                       
                        </li>
                        <li class="nav-item">
                            <NavLink to="/nuevopersonaje" className="nav-link" >NuevoPersonaje</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/modificar" className="nav-link" >ModificarPersonaje</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Series
                        </a>
                        <ul class="dropdown-menu">
                            
                            {
                                this.state.status==true &&
                                    this.state.series.map((serie,index)=>{
                                       
                                        return(<li className="dropdown-item"><NavLink to={"/serie/"+serie.idSerie}>{serie.nombre}</NavLink></li>)
                                    })
                            }
                        </ul>
                        </li>
                    
                    </ul>
                    </div>
                </div>
</nav>
      </div>
    )
  }
}
