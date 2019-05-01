import React, {Component} from 'react'
import List_details from "../../Data/Lists.json"
import { Link } from 'react-router-dom';

export default class Lead_lists extends Component {
  render() {
      const { listName, type, qty } = this.props.list;
      return (
        <div className="container">
          <div className="card card-body mb-1 shadow-sm">
            <div className="row">
              <div className="col">
                  <h5> {listName}  </h5>
              </div>
              <div className="col">
                <h5 className="ptext-center">
                  {type}
                </h5>
              </div>
              <div className="col">
                  <h5 className="ptext-center"> {qty}  </h5>
              </div>
              <div className="col">
                <h4 className="ptext-center">
                  <Link to={`/dialer/dashboard/${this.props.list.id}`}>
                    <i
                      className="fas fa-headset"
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
