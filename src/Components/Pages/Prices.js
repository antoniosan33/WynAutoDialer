import React, {Component} from 'react'

export default class Prices extends Component {

  render() {
      return (
        <div className="container">
          <div className="my-5">
            <h1 className="Titles text-center"> Afordable Prices </h1>
          </div>
          <div className="row">

            <div className="col-5 mr-3 card card-body  text-center shadow">
              <div className="ptop_prices">
                <h2 className="align-middle p-2"> Starter <br/> Package</h2>
              </div>
                <div class="card-body">
                  <h5 class="card-title">$XX/mo</h5>
                  <p class="card-text border-bottom border-top p-2">
                    Some quick example text to build <br/>
                  </p>
                  <p class="card-text border-bottom border-top p-2">
                    on the card title and make up the bulk <br/>
                  </p>
                  <p class="card-text border-bottom border-top p-2">
                    of the card's content <br/>
                  </p>
                  <p class="card-text border-bottom border-top p-2">
                    General comment always <br/>
                  </p>
                  <a href="#" class="btn btn-primary" >  Buy  </a>
                </div>
            </div>

            <div className="col-5 mr-3 card card-body  text-center shadow">
              <div className="ptop_prices">
                <h2 className="align-middle p-2"> Advance <br/> Package</h2>
              </div>
                <div class="card-body">
                  <h5 class="card-title">$YY/mo</h5>
                  <p class="card-text border-bottom border-top p-2">
                    Some quick example text to build <br/>
                  </p>
                  <p class="card-text border-bottom border-top p-2">
                    on the card title and make up the bulk <br/>
                  </p>
                  <p class="card-text border-bottom border-top p-2">
                    of the card's content <br/>
                  </p>
                  <p class="card-text border-bottom border-top p-2">
                    General comment always <br/>
                  </p>
                  <a href="#" class="btn btn-primary" >  Buy  </a>
                </div>
            </div>

          </div>
        </div>
      )
  }
}
