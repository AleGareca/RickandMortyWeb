import React, { Component } from 'react'
import './assets/css/style.css'

export default class Habilidades extends Component {

    renderHeader(titulo,descripcion){
        return(<div>
                     <header class="section-header">
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                    </header>
                </div>)
    }

      renderBarraDeProgreso(bg,nameSkill,porcentaje){
        return(<div className="progress skills-content ">
            <div className={"progress-bar bg-"+bg} role="progressbar" style={{width: porcentaje+"%"}} aria-valuenow={porcentaje} aria-valuemin="0" aria-valuemax="100">
              <span className="skill">{nameSkill} <i class="val">{porcentaje+"%"}</i></span>
            </div>
          </div>)
    }

    render() {
        return (
            <div>
                <section id="skills">
                    <div className="container">
                        {this.renderHeader("Hablilidades","Aca tengo que poner las habilidades y una descripcion para rellenar")}
                        <div className="skills-content">
                            {this.renderBarraDeProgreso("success","Responsabilidad","100")}
                            {this.renderBarraDeProgreso("info","Fiablilidad","90")}
                            {this.renderBarraDeProgreso("warning","Borrachera","75")}
                            {this.renderBarraDeProgreso("danger","Maldad","55")}
                        </div>

                    </div>
                </section>
            </div>)
            }
}
