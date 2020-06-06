import React, { Component } from 'react'

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
        characters:this.props.characters,
     
        
        };
    }

    renderCard(image,name){
        return(
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card" style={{backgroundImage: "url("+image+")"}}>
              <div class="card-body">
                <h5 class="card-title"><a href="">{name}</a></h5>
                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          )


       
    }

    renderCards(){
        if(this.props.characters !== undefined){
            return( this.props.characters.map(e=>this.renderCard(e.image,e.name)))
        }
        
     }

    render() {
        return (
            <div class="container">
                <div class="row">
                    {this.renderCards()}
                </div>
            </div>
        )
    }
}
