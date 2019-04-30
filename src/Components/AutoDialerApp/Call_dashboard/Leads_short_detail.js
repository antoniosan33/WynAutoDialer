import React, {Component} from 'react'
import LeadList from "../../../Data/List_1.json"

export default class Leads_short_detail extends Component {

  state = {
    selected: ""
  }

  updateLeadDetail = event => {
    this.props.updateLeadDetail(this.props.index)
  }

  render() {
    const { name, status, id, index } = this.props.list;
    return (
      <div>
        <div  className="row dash-Leadlist"
              onClick={this.updateLeadDetail}>
          <div className="col">
            <h6 className="ptext-size-small">{name} </h6>
          </div>
          <div className="col">
            <h6 className="ptext-size-small  ptext-center">{status}</h6>
          </div>
        </div>
      </div>
    )
  }
}
