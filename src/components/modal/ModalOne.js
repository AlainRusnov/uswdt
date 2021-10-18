import React from 'react'
import './ModalOne.css'

function ModalOne({ closeModalOne }) {
  return (
      <div className="modal--container--one">
        <div className="button--close--modal--one">
          <button className="modal--button--one" onClick={() => {closeModalOne(false)} }> <i className='fas fa-times' /> </button>
        </div>
        <div className="modal--inner-container">
          <div className="title">
            <h1>WATCH DOGS: LEGION</h1>
            <p>Gameplay overview</p>
          </div>
          <div className="video-responsive">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mqh4BX8-VR4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
        </div>
      </div>
  )
}

export default ModalOne;
