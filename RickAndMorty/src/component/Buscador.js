import React, { Component } from 'react'
import './css/card.css'
import './css/navBar.css'
import axios from 'axios';




export default class Buscador extends Component {
  constructor(props) {
        super(props);
        this.state = {
        characters:[],
        search:"",
        gender:"Genero",
        status:"Estado",
     
        
        };
        this.changeSerch=this.changeSerch.bind(this)
        this.newStatusLive=this.newStatusLive.bind(this)
        this.newStatusDead=this.newStatusDead.bind(this)
        this.newStatusUnknow=this.newStatusUnknow.bind(this)
        this.newStatusAll=this.newStatusAll.bind(this)
        this.newgenderGenderless=this.newgenderGenderless.bind(this)
        this.newgenderUnknow=this.newgenderUnknow.bind(this)
        this.newgenderMale=this.newgenderMale.bind(this)
        this.newgenderFamale=this.newgenderFamale.bind(this)
        this.newgenderAll=this.newgenderAll.bind(this)
        this.buscarPersonaje=this.buscarPersonaje.bind(this)
        /*this.getgender= this.getgender.bind(this)
        this.getSearch= this.getSearch.bind(this)
        this.getStatus= this.getStatus.bind(this)*/
        this.info=this.info.bind(this)
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
    
    newgenderAll(){
      this.setState({gender:"Genero"})
    }
    newgenderMale(){
      this.setState({gender:"Male"})
    }
    newgenderFamale(){
      this.setState({gender:"Famale"})
    }
    newgenderUnknow(){
      this.setState({gender:"unknow"})
    }

    newgenderGenderless (){
      this.setState({gender:"genderless"})
    }

    getStatus(){return(this.sonIguales(this.state.status,"Estado")?"":"status="+this.state.status)}
    getgender(){return(this.sonIguales(this.state.gender,"Genero")?"":"gender="+this.state.gender)}
    getSearch(){return(this.sonIguales(this.state.status,"")?"":"name="+this.state.search)}

    sonIguales(s1,s2){return s1.split('').every(e=> s2.includes(e))}

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
          {this.state.gender}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <div class="dropdown-item" href="" onClick={this.newgenderMale} >Hombre</div>
          <div class="dropdown-item" href="" onClick={this.newgenderFamale} >Mujer</div>
          <div class="dropdown-item" href=""onClick={this.newgenderGenderless } >Sin genero</div>
          <div class="dropdown-item" href="" onClick={this.newgenderUnknow}>Desconocido</div>
          <div class="dropdown-item" href="" onClick={this.newgenderAll}>Todo</div>
        </div>
      </li>)
  }

  buscarPersonaje(event){
    event.preventDefault()
    let url =`https://rickandmortyapi.com/api/character/?${this.getSearch()}&${this.getStatus()}&${this.getgender()}`
    axios.get(url)
    .then((res => {
      this.setState({ characters: res.data.results})
    
      
    }))
  
  }


      renderNav(){
        return(<div class="navbar navbar-expand-lg navbar-dark bg-dark" >
  <a class="navbar-brand" href="/">Rick y Morty</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
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

      renderCard(image,name,id){
        return(
          <div key={name} class="col-md-6 d-flex align-items-stretch mt-4">
            <div class="card" style={{backgroundImage: "url("+image+")"}}>
              <div class="card-body">
                <div class="card-title"><a href={id}>{name}</a></div>
                <div class="read-more"><a href={id}><i class="icofont-arrow-right"></i> Info</a></div>
              </div>
            </div>
          </div>
          
          )


       
    }

    renderCards(){
        
            return( this.state.characters.map(e=>this.renderCard(e.image,e.name,e.id)))
        }

    info(){
      
      console.log(this.state.search)
    }    
    renderGif(){
      return(

<div className="mt-4" style={{ textAlign: "center", height: "100%" ,width:"100%"}}>

<img src="https://cafetoons.net/wp-content/uploads/2019/11/a9529298e561cfd5d521f3acb4cb215a.gif"
     />
</div>)
            
    }


      render(){
        return(<div>{this.renderNav()}
                 <div id="our-values" class="our-values">
                <div class="container">
                  <div class="row">
                    {console.log(this.state.characters.length)}
                    {this.state.characters.length==0? this.renderGif():this.renderCards()}
                  </div>
              </div>
              </div>
              </div>)
      
              }
      
   
      
}




