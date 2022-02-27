import React, { Component } from 'react'
import DataFilms from '../Data/DataFilms.json'

export default class BaiTapRenderFilm extends Component {

  renderFilms = () => {
    let contentFilms = DataFilms.map((film, index) => {
      return <div className="col-2" key={index}>
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={film.hinhAnh} alt={film.tenPhim} />
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    })
    return contentFilms
  }
  render() {
    return (
      <div style={{ backgroundImage: 'url(./background/avanger.jpg)', minHeight: '2000px' }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
          <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(87,83,149,0.8)' }}>
            <a className="navbar-brand" href="/">Film</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className
                  ="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown">Dropdown</a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="/">Action 1</a>
                    <a className="dropdown-item" href="/">Action 2</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row">
              {this.renderFilms()}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
