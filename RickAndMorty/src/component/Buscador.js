import React, { Component } from 'react'
import './css/card.css'
import {characters}from './api.js'

export default class Buscador extends Component {
  constructor(props) {
        super(props);
        this.state = {
        characters:[],
        search:"genre",
        status:"status"
        
        };
        this.newStatusLive=this.newStatusLive.bind(this)
      }


    componentWillUpdate(p1,p2){
      if(this.state.status !== p2.status){
      this.setState({status:p2.status})

      }
    }
      newStatusLive(){
        this.setState({status:"live"})
      }

  renderDropdown(){
    return(<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.status}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div class="dropdown-item" href="" onClick={this.newStatusLive} >Live</div>
          
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="">Something else here</a>
        </div>
      </li>)
  }

      
      renderNav(){
        return(<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      {this.renderDropdown()}
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>)
      }

      render(){
        return( <section id="our-values" class="our-values">
            {this.renderNav()}
      <div class="container">

        <div class="row">
           
      
       
    
          
        </div>

      </div>
    </section>)
      }
}
