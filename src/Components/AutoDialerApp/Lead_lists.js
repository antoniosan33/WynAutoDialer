import React, {Component} from 'react'
import DataList from "../../Data/Lists.json"
import List_detail from "./List_detail"

export default class Lead_lists extends Component {

  render() {
      return (
        <div>
          <div className="container">
            <h2 className="my-3">Choose a List to Start Calling</h2>
          </div>

          <div className="container">
            <div className="card card-body mb-1 shadow-sm">
              <div className="row">
                <div className="col">
                  <h4 className="ptext-center">
                    List Name
                  </h4>
                </div>
                <div className="col">
                  <h4 className="ptext-center">
                    Type
                  </h4>
                </div>
                <div className="col">
                  <h4 className="ptext-center">
                    Number of Leads
                  </h4>
                </div>
                <div className="col">
                  <h4>
                    Actions
                  </h4>
                </div>

                {DataList.map((list, index) => (
                    <List_detail key={list.id} list={list} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      )
  }
}
