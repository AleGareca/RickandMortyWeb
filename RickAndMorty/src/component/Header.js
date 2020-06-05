import React, { Component } from 'react'


export default class Header extends Component {

    renderTitulo(nombreDeEmpresa){
      return(<div id="logo" className="pull-left">
                  <h1><a href="#intro" className="scrollto">{nombreDeEmpresa} </a></h1>
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
        return(<header id="header">
                  <div className="container-fluid">
                    {this.renderTitulo("Rick y Morty")}                  
                    {this.renderNav()}  
                  </div>
                </header>)
              }
}
