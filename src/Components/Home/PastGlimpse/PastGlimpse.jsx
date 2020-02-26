import React from 'react'
import './PastGlimpse.scss'

const PastGlimpse = () => {
  const width=window.screen.width;
  return (
    <div className="gallery">
      <h1 className="gallery__title section-title">Past year Glimpses</h1>
      <div className="gallery__images">
        <div className="gallery__images__container">
          <div className="wide" style={{backgroundImage:`url('./media/botrun${width<=1000?'_mobile':''}.png')`}}></div>
          <div className="tall" style={{backgroundImage: `url('./media/git${width<=1000?'_mobile':''}.png')`}}></div>
          <div className="big" style={{backgroundImage: `url('./media/team${width<=1000?'_mobile':''}.png')`}}></div>
          <div className="wide" style={{backgroundImage: "url('./media/ideathon.png')"}}></div>
          <div className="tall" style={{backgroundImage: "url('./media/director.png')"}}></div>
          <div className="" style={{backgroundImage: `url('./media/penumbera${width<=1000?'_mobile':''}.png')`}}></div>
          <div className="wide" style={{backgroundImage: `url('./media/baymax${width<=1000?'_mobile':''}.png')`}}></div>
          <div className="" style={{backgroundImage: `url('./media/webhead${width<=1000?'_mobile':''}.png')`}}></div>
        </div>
      </div>
    </div>
  )
}

export default PastGlimpse
