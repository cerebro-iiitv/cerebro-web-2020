import React from 'react'
import './PastGlimpse.scss'

const PastGlimpse = () => {
  return (
    <div className="gallery">
      <h1 className="gallery__title section-title">Past year Glimpses</h1>
      <div className="gallery__images">
        <div className="gallery__images__container">
          <div className="wide" style={{backgroundImage: `url('https://unsplash.it/seed/10/1280/720')`}}></div>
          <div className="tall" style={{backgroundImage: `url('https://unsplash.it/seed/20/1280/720')`}}></div>
          <div className="big" style={{backgroundImage: `url('https://unsplash.it/seed/30/1280/720')`}}></div>
          <div className="wide" style={{backgroundImage: `url('https://unsplash.it/seed/40/1280/720')`}}></div>
          <div className="tall" style={{backgroundImage: `url('https://unsplash.it/seed/50/1280/720')`}}></div>
          <div className="" style={{backgroundImage: `url('https://unsplash.it/seed/60/1280/720')`}}></div>
          <div className="wide" style={{backgroundImage: `url('https://unsplash.it/seed/70/1280/720')`}}></div>
          <div className="" style={{backgroundImage: `url('https://unsplash.it/seed/80/1280/720')`}}></div>
        </div>
      </div>
    </div>
  )
}

export default PastGlimpse
