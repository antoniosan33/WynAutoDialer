import React, {Component} from 'react'
import BuyLists from "../../Data/Lists_to_buy.json"
import { Link } from 'react-router-dom';

export default class Lead_lists extends Component {
  render() {
      const { provider, listName, price, qty } = this.props.list;
      return (
        <div className="container">
          <div className="card card-body mb-1 shadow-sm">
            <div className="row">
              <div className="col justify-content-center">
                <h5 className=""> {provider}  </h5>
              </div>
              <div className="col justify-content-center">
                  <h5> {listName}  </h5>
              </div>
              <div className="col justify-content-center">
                  <h5 className="ptext-center"> {qty} </h5>
              </div>
              <div className="col justify-content-center">
                <h5 className="ptext-center"> ${price}  </h5>
              </div>
              <div className="col justify-content-center">
                <h4 className="ptext-center">
                  <Link to={`/dialer/leads_store`}>
                    <i
                      className="fas fa-cart-plus"
                      style={{
                        cursor:'pointer',
                        float:'center',
                        color:'black',
                        marginRight:'1rem'
                      }}
                    />
                  </Link>

                </h4>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
