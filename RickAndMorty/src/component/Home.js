import React, { Component } from 'react'
import Carrucel from './Carrucel'
import  Header from './Header'
import  Personajes from './Personajes'
import Footer from './Footer'
import {characters}from './api.js'

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
            console.log(res)
       
        }))
    }  



    render() {
        return (
            <div>
                <Header/>
                <Carrucel />
                <Personajes characters={this.state.characters}/>
                <Footer/>
            </div>
        )
    }
}
