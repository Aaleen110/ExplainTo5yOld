import { useEffect } from 'react';
import './App.css';
import pinwheel from './assets/svgs/pinwheel.svg'
import sun from './assets/svgs/sun.svg'
import mountain from './assets/svgs/mountain.svg'
import tree from './assets/svgs/tree.svg'
import cloud from './assets/svgs/cloud.svg'
import goleft from './assets/svgs/goleft.svg'
import goright from './assets/svgs/goright.svg'


const API_KEY = "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"
function App() {

  useEffect(() => {
    // askQuestion();
  }, []);

  async function askQuestion() {

    const apiMessages = [{ "role": "user", "content": "What is a meteorite" }]

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [...apiMessages]
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    });

    const answer = await response.json();


    console.log("Hello", answer)


  }

  return (
    <div className="App">
      {/* SKY */}
      <div className="sky-section">
        <img className='sun' src={sun} alt="sun" />
        <img className='mountain' src={mountain} alt="mountain" />
        <img className='tree' src={tree} alt="tree" />

        <img className='cloud-1' src={cloud} alt="cloud" />
        <img className='cloud-2' src={cloud} alt="cloud" />
        <img className='cloud-3' src={cloud} alt="cloud" />
        <img className='cloud-4' src={cloud} alt="cloud" />
        <div className='box-container'>
          <h1 className='title'>Explain to a 5 year old</h1>

          <div className='search-box-container'>
            <input className='search-box'></input>
            <button className='search-button'>Search!</button>
          </div>
        </div>
      </div>

      {/* GRASS */}
      <div className="grass-section">
        <div className="pin-wheel-container">
          <img className='pin-wheel' src={pinwheel} alt="pinwheel" />
          <div className='pin-wheel-line'></div>
        </div>

        <div className='result-tablet'>

          <div style={{ diplay: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding:16, backgroundColor:"#eee" }}>

              <img className='paw' src={goleft} alt="goleft" />
              <div style={{ fontSize: 28, fontFamily: 'fantasy', }}>
                A Meteor
              </div>


              <img className='paw' src={goright} alt="goright" />
            </div>


          </div>

          <div style={{ display: 'flex', fontSize: 25, fontFamily: 'fantasy', alignSelf: 'center', padding: 20, overflow: 'scroll' }}>Think of them as “space rocks." When meteoroids enter Earth's atmosphere (or that of another planet, like Mars) at high speed and burn up, the fireballs or “shooting stars” are called meteors. When a meteoroid survives a trip through the atmosphere and hits the ground, it's called a meteorite.
          </div>



        </div>
      </div>
    </div>
  );
}

export default App;
