import React, { Component } from 'react'
import imagen1 from '../component/assets/img/quote-sign-left.png'
import imagen2 from '../component/assets/img/quote-sign-right.png'
import '../component/css/tecnologias.css'
import './assets/css/style.css'

export default class Tecnologia extends Component {
    render() {
        return (
             <div class="owl-carousel tecnologia-carousel">

          <div class="tecnologia-item">
            <img src={this.props.imagen} class="tecnologia-img" alt=""/>
            <h3>{this.props.nombre}</h3>
           
            <p>
              <img src={imagen1} class="quote-sign-left" alt=""/>
             {this.props.descripcion}
              <img src={imagen2} class="quote-sign-right" alt=""/>
            </p>
          </div>
            </div>

        )
    }
}
