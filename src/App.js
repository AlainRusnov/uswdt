import React, { useState } from 'react';
import Navbar from '../src/components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Carousel  from '../src/components/carousel/Carousel';
import './App.css';
import Button from '../src/components/button/Button';
import ModalOne from '../src/components/modal/ModalOne';
import ModalTwo from '../src/components/modal/ModalTwo';
import ModalThree from '../src/components/modal/ModalThree';
import Newsfeed from '../src/components/newsfeed/Newsfeed';

const gamesData = [
  {title:"Far Cry 6",src:"assets/images/farcry6.jpg"},
  {title:"Assassin's Creed Valhalla",src:"assets/images/ac-valhalla.jpg"},
  {title:"Ghost Recon Frontline",src:"assets/images/ghostrecon.webp"},
  {title:"Rocksmith+",src:"assets/images/rocksmith.webp"},
  {title:"Riders Republic",src:"assets/images/riders-republic.jpg"},
  {title:"Watch Dogs Legion",src:"assets/images/watch-dogs-legion.jpg"},
  {title:"Scott Pilgrim",src:"assets/images/scott-pilgrim.jpg"},
  {title:"Immortals",src:"assets/images/immortals.jpg"},
  {title:"Agos",src:"assets/images/agos.jpg"},
  {title:"Prince of Persia",src:"assets/images/pop.jpg"},
]

function App() {

  const [openModal1, setOpenModal1] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)


  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
    </Router>

    <div className="games--wrapper">
      <div className="explore--title">
        <h2>explore more games</h2>
      </div>
      <Carousel data={gamesData}/>
      <div className="button--wrapper">
        <a href="https://www.ubisoft.com/en-ca/games">
          <Button label={"View All Games"} />
        </a>
      </div>
    </div>

    <div className="news--container">
      <div className="explore--title">
        <h2>Latest News</h2>
      </div>
      <Newsfeed />
      <div className="button--wrapper">
        <a href="https://news.ubisoft.com/en-ca/">
          <Button label={"All News"} />
        </a>
      </div>
    </div>

    <div className="featured--container">
      <div className="explore--title">
        <h2>Featured Videos</h2>
      </div>
      <div className="featured-videos">
        <div className="video--card" onClick={() => setOpenModal1(true)}>
          <img src="assets/images/featured-videos-sample-1.jpg" alt="vid1" className="video--thumbnail" ></img>
          <h2>Watch Dogs: Legion</h2>
          <p>Gameplay overview</p>
        </div>
          { openModal1 && <ModalOne closeModalOne={setOpenModal1} />}
        <div className="video--card" onClick={() => {setOpenModal2(true)}}>
          <img src="assets/images/featured-videos-sample-2.jpg" alt="vid2" className="video--thumbnail"></img>
          <h2>Assassin's Creed Valhalla</h2>
          <p>World premiere trailer</p>
        </div>
          { openModal2 && <ModalTwo closeModalTwo={setOpenModal2}/>}
        <div className="video--card" onClick={() => setOpenModal3(true)}>
          <img src="assets/images/featured-videos-sample-3.jpg" alt="vid3" className="video--thumbnail"></img>
          <h2>Immortals Fenyx Rising</h2>
          <p>Deep dive trailer</p>
        </div>
          { openModal3 && <ModalThree closeModalThree={setOpenModal3}/>}
      </div>
      <div className="button--wrapper">
        <a href="https://www.youtube.com/channel/UCBMvc6jvuTxH6TNo9ThpYjg" rel="_blank">
          <Button label={"View All Trailers"} />
        </a>
      </div>
    </div>
    </>
  );
}

export default App;
