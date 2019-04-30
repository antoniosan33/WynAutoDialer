import React, {Component} from 'react'
import Hero_laptop from "../../../Images/home/1_hero_laptop.svg"
import Hero_mobile from "../../../Images/home/2_hero_mobile.svg"
import Hero_laptop_person from "../../../Images/home/3_hero_laptop_person.svg"
import Call_center from "../../../Images/home/4_call_center.svg"

export default class Home_hero extends Component {

  render() {
      return (
        <header id="home-section" >
          <div className="white-overlay">
            <div className="">
              <div className="row">
                <div className="col col 6 hero-right">

                </div>
                <div className="col col 6 hero-left d-flex flex-column justify-content-center">
                  <h1 className="mx-auto" > Best AutoDialer </h1>
                  <h2 className="mx-auto"> For Realtors </h2>
                </div>
              </div>

              <div className="row">
                <div className="col">
                </div>
              </div>
            </div>
            <div className="d-flex">
              <a href="#" className="btn btn-primary mx-auto" > Get 14 Days Trial  </a>
            </div>
          </div>




        </header>
      )
  }
}
