import React, {Component} from 'react'
import LeadList from "../../../Data/List_1.json"
import Leads_short_detail from './Leads_short_detail';
import Lead_info_display from './Lead_info_display';


export default class Call_dashboard extends Component {
  state={
    list_id:"",
    list_elem: {
      address:{
        street:"",
        suite:"",
        city:"",
        zipcode:""
      }
    },
    list: []
  }

  updateLeadDetail = (list_id) => {
    this.setState({list_elem: LeadList[list_id]})
    return(console.log(list_id))
  }

  componentDidMount = () => {
    fetch(`${process.env.PUBLIC_URL}/data/List_${this.props.match.params.id}.json`)
      .then( res => res.json() )
      .then( data =>  this.setState({ list: data }) )
      .catch( err => console.log(err) )

  }

  render() {
      let parsedAddress = `${this.state.list_elem.address.street} ${this.state.list_elem.address.suite} ${this.state.list_elem.address.city} ${this.state.list_elem.address.zipcode}`
      return (
        <div>
          <div className="container">
            <h2 className="my-3">Choose a List to Start Calling</h2>
          </div>

          <div className="container">
              <div className="row">
                <div className="col col-3 shadow">
                  <h5 className="mt-2 mb-4 ptext-center">
                    Lead List
                  </h5>
                    {this.state.list.map((list, index) => (
                        <Leads_short_detail key={list.id} list={list} index={index} updateLeadDetail={this.updateLeadDetail}/>
                      ))}
                </div>
                <div className="col col-8 ml-3">
                  <div className="row">
                    <div className="col col-12 card-body shadow mb-3 card ">
                      <div className="btn-group">
                        <button type="button" className="btn rounded-lg btn-success pbutton mr-3 pshadow"> Start    Calling {"   "}<i className="fas fa-phone"></i>
                        </button>
                        <button type="button" className="btn mr-3 btn-light rounded-lg pbutton"> <i className="fas fa-microphone-slash"></i>
                        </button>
                        <button type="button" className="btn mr-3 btn-warning rounded-lg pbutton">  {"   "}<i className="fas fa-pause"></i>
                        </button>
                        <button type="button" className="btn btn-danger rounded-lg pbutton"> Stop  {"   "}<i className="fas fa-stop"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col col-12 shadow card">
                      <h5 className="mt-2 mb-3 ptext-center">
                        Lead Detail
                      </h5>
                        <Lead_info_display
                        name={this.state.list_elem.name}
                        company={this.state.list_elem.company}
                        address={parsedAddress}
                        status={this.state.list_elem.status}
                        phone={this.state.list_elem.phone}
                        />
                    </div>
                  </div>
                </div>
              </div>
            </div>e
        </div>
      )
  }
}
