import React from 'react';
import './Newsfeed.css';

function Newsfeed() {
  return (
    <div className="newsfeed--container">
      <div className="newsfeed--categories">
         <div className="newsfeed--cat">All news</div>
         <div className="newsfeed--cat">Assassin's Creed Valhalla</div>
         <div className="newsfeed--cat">Immortals Fenyx Rising</div>
         <div className="newsfeed--cat">Far Cry 6</div>
         <div className="newsfeed--cat">Watch Dogs: Legion</div>
      </div>
      <div className="newsfeed--items--container">
        <div className="newsfeed--item--one">
          <img src="assets/images/news-image-sample-1.jpg" alt="news 1"></img>
          <div className="item--one--desc">
            <p>October 14, 2021</p>
            <h2>Scott Pilgrim vs the world: The game</h2>
            <h2>complete edition</h2>
          </div>
        </div>
        <div className="newsfeed--item--two">
          <div className="item--two--wrapper">
            <img src="assets/images/news-image-sample-2.jpg" alt="news 2"></img>
            <div className="item--two--desc">
              <p>October 5, 2021</p>
              <h2>Check out the new weapons</h2>
            </div>
          </div>
        </div>
        <div className="newsfeed--item--three">
          <div className="item--three--wrapper">
            <img src="assets/images/news-image-sample-3.jpg" alt="news 3"></img>
            <div className="item--three--desc">
              <p>September 30, 2021</p>
              <h2>Immortals Fenyx Rising combat explained</h2>
            </div>
          </div>
        </div>
        <div className="newsfeed--item--four">
          <div className="item--four--wrapper">
            <img src="assets/images/news-image-sample-4.png" alt="news 4"></img>
            <div className="item--four--desc">
              <p>October 10, 2021</p>
              <h2>Idle Restaurant Tycoon : Start your empire</h2>
            </div>
          </div>
        </div>
        <div className="newsfeed--item--five">
          <div className="item--five--wrapper">
            <img src="assets/images/news-image-sample-5.jpg" alt="news 5"></img>
            <div className="item--five--desc">
              <p>October 1, 2021</p>
              <h2>Developer Musings : What we have in store for the future</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Newsfeed
