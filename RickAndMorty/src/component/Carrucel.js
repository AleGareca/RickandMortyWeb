import React, { Component } from 'react'
import './assets/css/style.css'
import imagen1 from '../imagenes/4.jpg'
import imagen2 from '../imagenes/2.jpg'
import imagen3 from '../imagenes/3editado.jpg'





export default class Carrucel extends Component {

 constructor(props) {
    super(props);

   

 }




      renderCarrucelItemActive(imagen,titulo,descripcion){

        return(<div class="carousel-item active">
              <div class="carousel-background"><img src={imagen} alt=""/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <a href="#about" class="btn-get-started scrollto">Empezar</a>
              </div>
            </div>
        </div>)
      }

      renderCarrucelItem(imagen,titulo,descripcion,dir){
        return(<div class="carousel-item ">
              <div class="carousel-background"><img src={imagen} alt=""/></div>
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <a href={dir} class="btn-get-started scrollto">Empezar</a>
              </div>
            </div>
        </div>)
      }



    render() {
        return (<div id= "intro">
        
    <div class="intro-container">
        <div id="carouselExampleCaptions" class="carousel  slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>

  </ol>
  <div class="carousel-inner" role="listbox">

      {this.renderCarrucelItemActive(imagen3,"Rick y Morty Api","Ve todos los personajes de esta API","#abaut")}
      {this.renderCarrucelItem(imagen1,"Bucador de personajes","Puedes iniciar la busqueda de tu personaje favorito","/serch")}
      {this.renderCarrucelItem(imagen2,"Tecnologia","Conoce las tecnologias utilizadas en este proyecto","#about")}      
   
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>

        )
    }
}
