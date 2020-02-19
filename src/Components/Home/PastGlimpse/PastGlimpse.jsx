import React, { Component } from 'react';
import "./PastGlimpse.scss";


class PastGlimpse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0,
      count: 0,
      images: [
        'media/pastGlimpse/img1.jpeg',
        'media/pastGlimpse/Group 55.png',
        'media/Asset 12@4x.png',
        'media/stickermuletransparent.png',
        'media/souledstoretransparent.png',
        'media/pastGlimpse/img1.jpeg',
        'media/Asset 12@4x.png',
        'media/pastGlimpse/img1.jpeg'
      ]
    }
  }


  componentDidMount() {
    this.slideImages();
  }

  slideImages = () => {
    this.interval = setInterval(() => {
      this.setState({
        active: this.state.active + 1
      })
    }, 3000);
  }

  


  slideshow() {
    return this.state.images.map((image,index) => {
      return <div className="past-glimpse__container__slideshow__list__des__items">
        <img key={this.state.active} src={`${image}`} alt={index}
          className="past-glimpse__container__slideshow__list__des__items__images" onClick={this.imageClick} />
      </div>
    });
  }

  imageClick = (e) => {
    let ok = e.target.alt%7
    this.setState({ active: ok });
  }

  render() {
    const slide = this.slideshow();
    return (
      <div className="past-glimpse" >

        <div className="past-glimpse__container">
          <div className="past-glimpse__container__heading">
            PAST YEAR GLIMPSES
        </div>
          <div className="past-glimpse__container__slideshow">
            <img
              src={this.state.images[this.state.active % this.state.images.length]}
              className="past-glimpse__container__slideshow__slide"
              alt="slideshow"
            ></img>
          </div>

          <div className="past-glimpse__container__slideshow__list">
            <div className="past-glimpse__container__slideshow__list__des">
              {slide}
            </div>
          </div>
        </div>


        <div className="past-glimpse__images">
          <img
            src="media/pastGlimpse/Ellipse 32.png"
            className="past-glimpse__images__elli1"
            alt="elli1"
          ></img>
          <img
            src="media/pastGlimpse/Ellipse 33.png"
            className="past-glimpse__images__elli2"
            alt="elli2"
          ></img>
          <img
            src="media/pastGlimpse/Rectangle 29.png"
            className="past-glimpse__images__rec1"
            alt="rec1"
          ></img>
          <img
            src="media/pastGlimpse/Rectangle 30.png"
            className="past-glimpse__images__rec2"
            alt="rec2"
          ></img>
          <img
            src="media/pastGlimpse/Group 55.png"
            className="past-glimpse__images__group"
            alt="group"
          ></img>
        </div>
      </div>
    );
  }
}

export default PastGlimpse;
