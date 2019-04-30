import React, {Component} from 'react'
import Header_dialer from '../AutoDialerApp/Header_dialer';


function Change_env() {

  var pRef = window.location.href
  console.log(pRef);

  if (pRef == "http://localhost:3000/dialer") {
    window.location = "http://localhost:3000/dialer/lead_lists"
    }
  if (pRef == "http://localhost:3000/") {
    window.location = "http://localhost:3000/home"
      }

  return("");
}

export default Change_env();
