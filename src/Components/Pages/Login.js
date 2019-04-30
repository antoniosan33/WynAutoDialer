import React, {Component} from 'react'
import Lead_lists from '../AutoDialerApp/Lead_lists';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  render() {
      return (
        <div className="container">
          <div className="row pheight mt-4  text-center">
            <div className="col col-6 border-right">
              <h2> Register</h2>
                <form>
                  <label className="ptext-size-small mt-3" >
                    Name:
                    <input type="text" name="" className="form-control" />
                  </label>
                  <br></br>
                  <label className="ptext-size-small" >
                    Phone:
                    <input type="text" name="" className="form-control" />
                  </label>
                    <br></br>
                  <label className="ptext-size-small" >
                    Login email:
                    <input type="text"  name=""  className="form-control" />
                  </label>
                  <br></br>
                  <label className="ptext-size-small" >
                    Password:
                    <input type="text"  name=""  className="form-control" />
                  </label>
                </form>
                <Link
                  type="submit"
                  to="/dialer/lead_lists"
                  className="btn btn-success mt-2"
                  > Submit
                </Link>
            </div>
            <div className="col col-6  my-auto">
              <h2> Login </h2>
                <form className="">
                  <label className="ptext-size-small mt-2" >
                    Login email:
                    <input type="text"  name=""  className="form-control" />
                  </label>
                  <br></br>
                  <label className="ptext-size-small" >
                    Password:
                    <input type="text"  name=""  className="form-control" />
                  </label>
                </form>
                <Link
                  type="submit"
                  to="/dialer/lead_lists"
                  className="btn btn-success mt-2"
                  > Enter
                </Link>
            </div>
          </div>

        </div>
      )
  }
}
