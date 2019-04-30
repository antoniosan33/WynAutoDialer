import React, {Component} from 'react'
import Home_hero from "./Home_sections/Home_hero"
import Home_benefits from "./Home_sections/Home_benefits"

export default class Home extends Component {

  render() {
      return (
        <div>
          <header>
            <Home_hero />
          </header>

          <section id="section-benefits">
            <Home_benefits/>
          </section >

          <section id="section-hor-scroll">

          </section>

          <section id="section-testimonial">

          </section>
        </div>

      )
  }
}
