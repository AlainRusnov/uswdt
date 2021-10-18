import React from 'react';
import './Newsfeed.css';

function Newsfeed() {
  return (
    <div className="newsfeed--container">
      <div className="newsfeed--categories">
         <div className="newsfeed--cat">All news</div>
         <div className="newsfeed--cat">Asassin's Creed Valhalla</div>
         <div className="newsfeed--cat">Immortals Fenyx Rising</div>
         <div className="newsfeed--cat">Far Cry 6</div>
         <div className="newsfeed--cat">Watch Dogs: Legion</div>
      </div>
      <div className="newsfeed--items--container">
        <div className="newsfeed--item--one">
          <img src="assets/images/news-image-sample-1.jpg" alt="news 1"></img>
          <p>October 14, 2021</p>
          <h2>Scott Pilgrim vs the world: The game</h2>
          <h2>complete edition</h2>
        </div>
        <div className="newsfeed--item--two">
          <div className="item--two--wrapper">
            <img src="assets/images/news-image-sample-2.jpg" alt="news 1"></img>
            <div className="item--two--desc">
              <p>October 5, 2021</p>
              <h2>Check out the new weapons</h2>
            </div>
          </div>
        </div>
        </div>
        </div>
        )
      }

      export default Newsfeed

      // <div className="newsfeed--item--three">
      //   <img src="assets/images/news-image-sample-3.jpg" alt="news 1"></img>
      //   <p>October 5, 2021</p>
      //   <h2>Check out the new weapons</h2>
      // </div>