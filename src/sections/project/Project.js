import React from 'react'
import Product from '../../components/product/Product'
import MyTube from "../../image/mytube.jpg";
import ChatHub from "../../image/chathub.jpg"
// import ExpenseMonitor from "../../image/expense-monitor.png"
import "./Project.css"

export default function Project() {
  return (
    <div className="project" id="project">
      <div className="project-main-container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-container">
          <div className="product-wrapper">
            <Product mytube={MyTube} url="https://mytube-prashant.netlify.app/#/"/>
            <h2 className="product-name">MyTube</h2>
          </div>
          <div className="product-wrapper">
            <Product mytube={ChatHub} url="https://github.com/Prashant-Shekhar-Manjhi/ChatHub-client-app"/>
            <h2 className="product-name">ChatHub</h2>
          </div>
          {/* <div className="product-wrapper">
            <Product mytube={ExpenseMonitor} url="https://github.com/Prashant-Shekhar-Manjhi/expense-monitor-app"/>
            <h2 className="product-name">Expense-Monitor-Appp</h2>
          </div> */}
        </div>
      </div>
    </div>
  )
}
