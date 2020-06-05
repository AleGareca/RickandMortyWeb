import React, { Component } from 'react'
import '../component/css/footer.css'
import '../component/assets/vendor/ionicons/css/ionicons.css'
import '../component/assets/vendor/ionicons/css/ionicons.min.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                 <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-info">
            <h3>Rick and Morty</h3>
            
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Home</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Personajes</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">Tecnologias</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contacto</h4>
            <p>
              Florencio Varela <br/>
              Buenos Aires<br/>
              Argentina <br/>
              <strong>Phone:</strong> +54 1126539513<br/>
              <strong>Email:</strong> gareca_jorge@hotmail.com<br/>
            </p>

            <div class="social-links">
              <a href="https://www.facebook.com/ale.gareca.566" class="ion-social-facebook facebook"><i class="fa fa-facebook"></i></a>
              <a href="https://www.instagram.com/aleegareca/" class="ion-social-instagram"><i class="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/alejandro-gareca-b0a301154" class="ion-social-linkedin"><i class="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Gracias por ver mi proyecto</h4>
            <p>Utilizo este medio para dar a conocer mis conocimientos en desarrolo de software</p>
         
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>Rick and Morty</strong>. All Rights Reserved
      </div>
      <div class="credits"></div>
            </div>
              Designed by <a href="">Ale Gareca</a>
     </footer> 
         
    </div>
  
        )
    }
}
