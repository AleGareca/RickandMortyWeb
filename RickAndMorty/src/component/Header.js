import React, { Component } from 'react'
import musica from '../imagenes/intro2.mp3'


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state={
      scrolled:""
    }
    this.handleScroll=this.handleScroll.bind(this)
    

 }

 componentDidMount(){
  window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount(){
  window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event){
  let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = "header-scrolled"
    

  this.setState({
    scrolled: itemTranslate
  });
}


    renderTitulo(nombreDeEmpresa){
      return(<div id="logo" className="pull-left">
                  <h1><a href="#intro" className="">{nombreDeEmpresa} </a></h1>
                  <a href="#intro"></a>
             </div>)
    }
  
  renderNav(){
    return(<nav id="nav-menu-container">
              <ul className="nav-menu ">
                <li className="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">Personajes</a></li>
                
                <li><a href="#footer">Contacto</a></li>
              </ul>
            </nav>)
  }
    render() {
        return(<header id="header" onScroll={this.handleScroll} className= {this.state.scrolled}>
         
                  <div className="container-fluid">
                 
                    {this.renderTitulo("Rick y Morty")}                  
                    {this.renderNav()}  
                  </div>
                </header>)
              }
}
