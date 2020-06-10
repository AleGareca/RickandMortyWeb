import React, { Component } from 'react'
import Carrucel from './Carrucel'
import  Header from './Header'
import  Personajes from './Personajes'
import Footer from './Footer'
import {characters}from './api.js'
import Tecnologias from './Tecnologias'
import musica from '../imagenes/Intro.mp3'

export default class Home extends Component {

    constructor(props) {
    super(props);
        this.state={
          characters:[]      
        }
     }

    componentDidMount(){
           characters().then((res => {
            this.setState({ characters: res.results})
        
       
        }))
    }  



    render() {
        return (
            <div>
                <audio autoPlay src={musica} />
                <Header/>
                <Carrucel />
                <Personajes characters={this.state.characters}/>
                <Tecnologias/>
                <Footer/>
            </div>
        )
    }
}
