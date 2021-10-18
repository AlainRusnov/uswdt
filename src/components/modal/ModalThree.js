import React from 'react'
import './ModalThree.css'

function ModalThree({ closeModalThree }) {
  return (
      <div className="modal--container--three">
        <div className="button--close--modal--three">
          <button className="modal--button--three" onClick={() => {closeModalThree(false)} }> <i className='fas fa-times' /> </button>
        </div>
        <div className="modal--inner-container">
          <div className="title">
            <h1>IMMORTALS</h1>
            <p>Fenyx Rising Deep Dive trailer</p>
          </div>
          <div className="video-responsive">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zGxOuvnyNWU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
        </div>
      </div>
  )
}

export default ModalThree;

