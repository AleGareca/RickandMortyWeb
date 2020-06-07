import React, { Component } from 'react'
import './css/info.css'
import axios from 'axios'
export default class Info extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            item: {},
            origin:{},
            id: this.props.match.params.id,
        }
      }
      
      async componentDidMount(){
        axios.get(`https://rickandmortyapi.com/api/character/${this.state.id}`)
          .then((res => {console.log(res.data)
            console.log(res.data.origin)
            this.setState({
              isLoading: false,
              item: res.data,
              origin: res.data.origin
              }
            )
          }))
        
        }


    render() {
        return (
            <section id="about" class="about-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="box-shadow-full">
              <div class="row">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-sm-6 col-md-5">
                      <div class="about-img">
                        <img src={this.state.item.image} class="img-fluid rounded b-shadow-a" alt=""/>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-7">
                      <div class="about-info">
                        <p><span class="title-s">Name: </span> <span>{this.state.item.name}</span></p>
                        <p><span class="title-s">Gender: </span> <span>{this.state.item.gender}</span></p>
                        <p><span class="title-s">Status: </span> <span>{this.state.item.status}</span></p>
                        <p><span class="title-s">Species: </span> <span>{this.state.item.species}</span></p>
                        <p><span class="title-s">Origin: </span> <span>{this.state.origin.name}</span></p>
                        
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        )
    }
}
