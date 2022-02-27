import React, { Component } from 'react'
import './BaiTapChonXeNangCao.css'
import dataFeatures from '../Data/arrayFeatures.json'
import dataWheels from '../Data/wheels.json'
export default class BaiTapChonXeNangCao extends Component {

  state = {
    carCurent: {
      "id": 1,
      "title": "Crystal Black",
      "type": "Pearl",
      "img": "./images/icons/icon-black.jpg",
      "srcImg": "images-black/images-black-1/",
      "color": "Black",
      "price": "19,550",
      "engineType": "In-Line 4-Cylinder",
      "displacement": "1996 cc",
      "horsepower": "158 @ 6500 rpm",
      "torque": "138 lb-ft @ 4200 rpm",
      "redline": "6700 rpm",
      "wheels": [
        {
          "idWheel": 1,
          "srcImg": "images-black/images-black-1/"
        },
        {
          "idWheel": 2,
          "srcImg": "images-black/images-black-2/"
        },
        {
          "idWheel": 3,
          "srcImg": "images-black/images-black-3/"
        }
      ]
    }
  }

  changeCar = (newCar) => {
    this.setState({
      carCurent: newCar
    })
  }

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div onClick={() => { this.changeCar(item) }} style={{ cursor: 'pointer' }} className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img className="p-3" style={{ width: '100%' }} src={item.img} alt={index} />
          </div>
          <div className="col-10">
            <h3 className="p-3">{item.title}</h3>
            <span className="p-3 pt-0 mt-0">{item.type}</span>
          </div>
        </div>
      )
    })
  }

  changeWheel = (newWheel) => {
    let objWheel = this.state.carCurent.wheels.find(item => item.idWheel === newWheel.idWheel)
    if (objWheel !== -1) {
      this.setState({
        carCurent: { ...this.state.carCurent, srcImg: objWheel.srcImg }
      })
    }
  }

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div style={{ cursor: 'pointer' }} onClick={() => { this.changeWheel(item) }} className="row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img className="p-3" style={{ width: '100%' }} src={item.img} alt={index} />
          </div>
          <div className="col-10 d-flex flex-colum algin-items-center">
            <span className="p-3">{item.title}</span>
          </div>
        </div>
      )
    })
  }

  componentDidMount() {
    let tagScript = document.createElement('script')
    tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js'
    document.querySelector('#appendScript').appendChild(tagScript)
  }

  componentDidUpdate() {

    // clean ảnh cũ to
    document.querySelector('#carCurrent').innerHTML = ''
    let tagScript = document.createElement('script')
    tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js'
    //clear script cũ tước khi append script mới của thư viện vào
    document.querySelector('#appendScript').innerHTML = ""

    document.querySelector('#appendScript').appendChild(tagScript)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="model">
              <div id="carCurrent" style={{ minWidth: '100%' }} className="cloudimage-360" data-folder={"./images/" + this.state.carCurent.srcImg} data-filename="civic-{index}.jpg"
                data-amount="8"></div>


              {/* <img style={{ width: '100%' }} src='./images/images-black/images-black-1/civic-1.jpg' alt='' /> */}
            </div>
            <div id="appendScript">

            </div>
            <div className="card mt-2">
              <h5 className="card-header text-default">Exterior color</h5>
              <table className="table border border-color-light" border='1'>
                <tbody>
                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>$ 19.000,00</td>
                  </tr>
                  <tr>
                    <td>Engine Type</td>
                    <td>Inline </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior color</h5>
              <div className="container-fluid">
                {this.renderIcon()}
              </div>
            </div>
            <div className="card text-left mt-1">
              <h5 className="card-header text-default">Wheels</h5>
              <div className="container-fluid">
                {this.renderWheels()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
