import React, { Component } from 'react'
import Carrucel from './Carrucel'
import  Header from './Header'
import  SobreNosotros from './SobreNosotros'
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
       
        }))
    }  



    render() {
        return (
            <div>
                <Header/>
                <Carrucel />
                <SobreNosotros characters={this.state.characters}/>
                <Footer/>
            </div>
        )
    }
}
