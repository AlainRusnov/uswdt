import React from 'react'
import './ModalTwo.css'

function ModalTwo({ closeModalTwo }) {
  return (
      <div className="modal--container--two">
        <div className="button--close--modal--two">
          <button className="modal--button--two" onClick={() => {closeModalTwo(false)} }> <i className='fas fa-times' /> </button>
        </div>
        <div className="modal--inner-container">
          <div className="title">
            <h1>Assassin's Creed Valhalla</h1>
            <p>World premiere trailer</p>
          </div>
          <div className="video-responsive">
            <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/L0Fr3cS3MtY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
        </div>
      </div>
  )
}

export default ModalTwo;
