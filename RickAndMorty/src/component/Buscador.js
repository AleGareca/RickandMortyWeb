import React, { Component } from 'react'
import './css/card.css'
import axios from 'axios';
import Filter from './Filter'
import ReactDOM from 'react-dom';

export default class Buscador extends Component {
  constructor(props) {
        super(props);
        this.state = {
        characters:[],
        search:"",
        genre:"Genero",
        status:"Estado",
     
        
        };
        this.changeSerch=this.changeSerch.bind(this)
        this.newStatusLive=this.newStatusLive.bind(this)
        this.newStatusDead=this.newStatusDead.bind(this)
        this.newStatusUnknow=this.newStatusUnknow.bind(this)
        this.newStatusAll=this.newStatusAll.bind(this)
        this.newGenreGenderless=this.newGenreGenderless.bind(this)
        this.newGenreUnknow=this.newGenreUnknow.bind(this)
        this.newGenreMale=this.newGenreMale.bind(this)
        this.newGenreFamale=this.newGenreFamale.bind(this)
        this.newGenreAll=this.newGenreAll.bind(this)
        this.buscarPersonaje=this.buscarPersonaje.bind(this)
        /*this.getGenre= this.getGenre.bind(this)
        this.getSearch= this.getSearch.bind(this)
        this.getStatus= this.getStatus.bind(this)*/
      }


    componentWillUpdate(p1,p2){
      if(this.state.status !== p2.status){
      this.setState({status:p2.status })
       console.log(p2)
      }
    }

    changeSerch(event){
      this.setState({search:event.target.value})
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

    getStatus(){return(this.state.status==""?"":"status="+this.state.status)}
    getGenre(){return(this.state.status==""?"":"genre="+this.state.genre)}
    getSearch(){console.log(this.state.search) 
      return(this.state.search== undefined?"":"name="+this.state.search)}



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

  buscarPersonaje(event){
    event.preventDefault()
    let url =`https://rickandmortyapi.com/api/character/?${this.getSearch()}&${this.getStatus()}&${this.getGenre()}`
    axios.get(url)
    .then((res => {
      this.setState({ characters: res.data.results})
    
      
    }))
  
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
      <input class="form-control mr-sm-2" type="search" placeholder="Nombre" aria-label="Search" onChange={this.changeSerch}/>
      <button class="btn btn-outline-success my-2 my-sm-0"  onClick={this.buscarPersonaje}>Buscar</button>
    </form>
  </div>
</div>)
      }

      renderCard(image,name){
        return(
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card" style={{backgroundImage: "url("+image+")"}}>
              <div class="card-body">
                <h5 class="card-title"><a href="">{name}</a></h5>
                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          )


       
    }

    renderCards(){
        
            return( this.state.characters.map(e=>this.renderCard(e.image,e.name)))
        }


      render(){
        return(<div>{this.renderNav()}

<div class="container">
                <div class="row">
              {this.renderCards()}</div>
              </div>
              </div>)
      
              }
      
   
      
}




