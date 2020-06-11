import React, { Component } from 'react'
import './assets/css/style.css'


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

    renderCard(image,delay,iconCss,titulo,descriopcion,id){
        return(<div class="col-md-4 wow fadeInUp" data-wow-delay={delay}>
            <div class="about-col">
              <div class="img">
                
                <img src={image} alt="" class="img-fluid"/>
                <div class="icon"><i class={"ion-ios-"+iconCss+"-outline"}></i></div>
              </div>
              <h2 class="title"><a href={id}>{titulo}</a></h2>
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
                      
                        {this.renderHeader("Personajes","Estos son todos los personajes que nos provee la api. Selecciona uno de ellos para ver sus caracteristicas")}
                            <div class="row about-cols">
                                {this.props.characters.map(e =>this.renderCard(e.image,"","",e.name,"",e.id))}
                                
                            </div>
                    </div>
                 </section>
            </div>)
    }
}
