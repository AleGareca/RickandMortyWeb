import React, { Component } from 'react'
import './css/card.css'
import {characters}from './api.js'

export default class Buscador extends Component {
  constructor(props) {
        super(props);
        this.state = {
        characters:[],
        genre:"Genero",
        status:"Estado",
        characters:[]
        
        };
        this.newStatusLive=this.newStatusLive.bind(this)
        this.newStatusDead=this.newStatusDead.bind(this)
        this.newStatusUnknow=this.newStatusUnknow.bind(this)
        this.newStatusAll=this.newStatusAll.bind(this)
        this.newGenreGenderless=this.newGenreGenderless.bind(this)
        this.newGenreUnknow=this.newGenreUnknow.bind(this)
        this.newGenreMale=this.newGenreMale.bind(this)
        this.newGenreFamale=this.newGenreFamale.bind(this)
        this.newGenreAll=this.newGenreAll.bind(this)
      }


    componentWillUpdate(p1,p2){
      if(this.state.status !== p2.status){
      this.setState({status:p2.status})
        //https://rickandmortyapi.com/api/character/?name=rick&status=alive
        console.log(p2.status)
      }
    }
    newStatusLive(){
      this.setState({status:"live"})
    }
    newStatusDead(){
      this.setState({status:"dead"})
    }
    newStatusUnknow(){
      this.setState({status:"unknow"})
    }
    newStatusAll(){
      this.setState({status:"Estado"})
    }
    
    newGenreAll(){
      this.setState({genre:"Genero"})
    }
    newGenreMale(){
      this.setState({genre:"Male"})
    }
    newGenreFamale(){
      this.setState({genre:"Famale"})
    }
    newGenreUnknow(){
      this.setState({genre:"unknow"})
    }

    newGenreGenderless (){
      this.setState({genre:"genderless"})
    }
  renderDropdown(){
    return(<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.status}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div class="dropdown-item" href="" onClick={this.newStatusLive} >Vivo</div>
          <div class="dropdown-item" href=""onClick={this.newStatusDead} >Muerto</div>
          <div class="dropdown-item" href="" onClick={this.newStatusUnknow}>Desconocido</div>
          <div class="dropdown-item" href="" onClick={this.newStatusAll}>Todo</div>
        </div>
      </li>)
  }

  renderDropdown2(){
    return(<li class="nav-item dropdown  ml-auto">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.genre}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <div class="dropdown-item" href="" onClick={this.newGenreMale} >Hombre</div>
          <div class="dropdown-item" href="" onClick={this.newGenreFamale} >Mujer</div>
          <div class="dropdown-item" href=""onClick={this.newGenreGenderless } >Sin genero</div>
          <div class="dropdown-item" href="" onClick={this.newGenreUnknow}>Desconocido</div>
          <div class="dropdown-item" href="" onClick={this.newGenreAll}>Todo</div>
        </div>
      </li>)
  }

  buscarPersonaje(){
    
  }

      
      renderNav(){
        return(<div class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Rick y Morty</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    <ul class="navbar-nav ml-auto">
     
    
      {this.renderDropdown()}
      {this.renderDropdown2()}
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Nombre" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={buscarPersonaje()} type="submit">Buscar</button>
    </form>
  </div>
</div>)
      }

      render(){
        return(<div>{this.renderNav()}</div>)
      
              }
      
   
      
}
