import React, { Component } from 'react'
import './assets/vendor/ionicons/css/ionicons.css'
import './assets/vendor/ionicons/css/ionicons.min.css'

export default class Servicios extends Component {


    renderColumn(titulo,descripcion,centro,nameIcono){
        return(<div className={"col-lg-4 box"+" " + centro}>
                    <i className={"ion-ios-" +nameIcono+"-outline"}></i>
                    <h4 className="title"><a href="">{titulo}</a></h4>
                    <p className="description">{descripcion}</p>
                </div>)
    }



    render() {
        return (<div>
                    <section id="featured-services">
                        <div class="container">
                            <div class="row">
                                {this.renderColumn("Titulo de Servicio","descricion del servicio","","bookmarks")}
                                {this.renderColumn("Titulo de Servicio","descricion del servicio","box-bg","stopwatch")}  
                                {this.renderColumn("Titulo de Servicio","descricion del servicio","","heart")}
                             </div>
                        </div>
                    </section>
                </div>)
            }
}
