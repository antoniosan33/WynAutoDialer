import React, {Component} from 'react'
import LeadList from "../../../Data/List_1.json"

const  Lead_info_display = (
    {
      name,
      company,
      address,
      status,
      phone
    }) => {
      console.log(name, phone, status);

      return (
        <form>
          <div className="row">
            <div className="form-group col-6">
              <label className="ptext-size-small" >
                Name:
              </label>
              <input type="text" value={name} className="form-control" />
            </div>
            <div class="form-group col-6">
              <label className="ptext-size-small ml-3" >
                Company:
              </label>
              <input type="text" value={company} className="form-control" />
            </div>
          </div>


          <label className="ptext-size-small" >
            Address:
          </label>
          <input type="text" value={address} className="form-control" />

          <div className="form-group mt-3">
            <label className="ptext-size-small" >
              Phone:
              <input type="text" value={phone} className="form-control" />
            </label>
            <label className="ptext-size-small ml-3" >
              Status:
              <input type="text" value={status} className="form-control" />
            </label>
          </div>

        </form>
      )
    }

export default Lead_info_display;
