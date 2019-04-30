import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import BuyLists from "../../Data/Lists_to_buy.json"
import List_store_detail from "./List_store_detail"

export default class Lead_store extends Component {

  render() {
    return (
      <div>
        <div style={{height: '25px'}}></div>
        <div className="container">
          <div className="card card-body mb-1 shadow-sm">
            <div className="row">
              <div className="col">
                <h4 className="ptext-center">
                  Provider
                </h4>
              </div>
              <div className="col">
                <h4 className="ptext-center">
                  List Name
                </h4>
              </div>
              <div className="col">
                <h4 className="ptext-center">
                  Number of Leads
                </h4>
              </div>
              <div className="col">
                <h4 className="ptext-center">
                  Price
                </h4>
              </div>
              <div className="col">
                <h4 className="">
                  Add to Cart
                </h4>
              </div>

              {BuyLists.map((list, index) => (
                  <List_store_detail key={list.id} list={list} />
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
