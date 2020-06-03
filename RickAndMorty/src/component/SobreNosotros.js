import React, { Component } from 'react'
import './assets/css/style.css'
import imagen1 from'./assets/img/about-mission.jpg'
import imagen2 from'./assets/img/about-plan.jpg'
import imagen3 from'./assets/img/about-vision.jpg'

export default class SobreNosotros extends Component {



    
      listImageCharacters(){
        return this.props.characters.map(i=>i.image)
      }

    renderHeader(titulo,descriopcion){
        return(<div>
                    <header class="section-header">
                        <h3>{titulo}</h3>
                        <p>{descriopcion}</p>
                    </header>
                </div>)
    }

    renderCard(image,delay,iconCss,titulo,descriopcion){
        return(<div class="col-md-4 wow fadeInUp" data-wow-delay={delay}>
            <div class="about-col">
              <div class="img">
                  {console.log(image)}
                <img src={image} alt="" class="img-fluid"/>
                <div class="icon"><i class={"ion-ios-"+iconCss+"-outline"}></i></div>
              </div>
              <h2 class="title"><a href="#">{titulo}</a></h2>
              <p>
                {descriopcion}
              </p>
            </div>
          </div>)
    }



    render() {
        return (
            <div>
                <section id="about">
                    <div class="container">
                        {console.log(this.props.characters)}
                        {this.renderHeader("Personajes","Estos son todos los personajes que nos provee la api. Selecciona uno de ellos para ver sus caracteristicas")}
                            <div class="row about-cols">
                                {this.props.characters.map(e =>this.renderCard(e.image,"","",e.name,""))}
                                
                            </div>
                    </div>
                 </section>
            </div>)
    }
}
