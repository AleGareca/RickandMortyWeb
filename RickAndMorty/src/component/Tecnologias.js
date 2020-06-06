import React, { Component } from 'react'
import Tecnologia from './Tecnologia'
import '../component/css/tecnologias.css'
import './assets/css/style.css'

export default class Tecnologias extends Component {
    render() {
        return (
            <div>
                <section id="tecnologia" class="section-bg wow fadeInUp">
      <div class="container">

        <header class="section-header">
          <h3>Tecnologias</h3>
        </header>

        <div class="owl-carousel tecnologia-carousel">

          <Tecnologia imagen="https://img.favpng.com/4/1/17/react-javascript-vue-js-logo-png-favpng-T97hHj5T2UsnURsbZ0PB5Mi3c.jpg" 
                      descripcion="React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto más de mil desarrolladores diferentes." 
                      nombre="React"/>

          <Tecnologia imagen="https://img.favpng.com/5/16/10/javascript-jquery-dialog-box-node-js-angularjs-png-favpng-cEk8mfu9iq5RErHGE0890PnL2.jpg"
                      descripcion="JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3​ basado en prototipos, imperativo, débilmente tipado y dinámico."
                      nombre="Javascript"/> 
           <Tecnologia imagen="https://img.favpng.com/12/23/12/bootstrap-logo-computer-software-web-application-portable-document-format-png-favpng-Lx7V0DSiUx3WuKY3reEf79At9.jpg"
                      descripcion="Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web. Contiene plantillas de diseño con tipografía, formularios, botones, cuadros, menús de navegación y otros elementos de diseño basado en HTML y CSS, así como extensiones de JavaScript adicionales. A diferencia de muchos frameworks web, solo se ocupa del desarrollo front-end."
                      nombre="Bootstrap"/>
           <Tecnologia imagen="https://img.favpng.com/24/9/2/firebase-cloud-messaging-computer-icons-google-cloud-messaging-angularjs-png-favpng-TU4qMFyq0Ae2kTeyCXFapQX0k.jpg"
                      descripcion="Es una plataforma ubicada en la nube, integrada con Google Cloud Platform, que usa un conjunto de herramientas para la creación y sincronización de proyectos que serán dotados de alta calidad, haciendo posible el crecimiento del número de usuarios y dando resultado también a la obtención de una mayor monetización."
                      nombre="Firebase"/>                                 
        </div>

      </div>
    </section>
            </div>
        )
    }
}
