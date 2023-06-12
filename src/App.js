import { useState } from 'react';
import './App.css';
import { pinwheel, sun, mountain, tree, cloud, goleft, goright } from './assets'
import axios from 'axios';

const API_KEY = "YOUR_API_KEY";

function App() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerTitle, setAnswerTitle] = useState("");
  const [loading, setLoading] = useState(false)

  async function askQuestion() {
    if (query.length) {

      try {
        setLoading(true)

        const headers = {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        }

        const apiMessages = [{ "role": "user", "content": `Explain to a five year old, what is ${query}` }]

        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [...apiMessages]
        }

        const response = await axios.post('https://api.openai.com/v1/chat/completions', JSON.stringify(apiRequestBody), {
          headers: headers
        })
        if (response && response.data.choices.length) {
          let answer = response.data?.choices[0]?.message?.content;
          setAnswer(answer)
          setAnswerTitle(query)
          setLoading(false)
        } else {
          alert('Something went wrong!')
          setLoading(false)
        }

      } catch (error) {
        alert('Something went wrong');
        setLoading(false)
        console.log("Error: ", JSON.stringify(error))
      }
    }
  }

  function reset() {
    setAnswer("")
    setQuery("")
    setAnswerTitle("")
  }

  return (
    <div className="container">
      {loading ?
        <div style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: 2, backgroundColor: '#000', opacity: 0.5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}></div> : false}

      {/* SKY */}
      <div className="sky-section">
        <div className='box-container'>
          <h1 className='title'>Explain to a 5 year old</h1>
          <div className='search-box-container'>
            <input
              className='search-box'
              type="text"
              value={query}
              onChange={(e) => { e.target.value.length ? setQuery(e.target.value) : reset() }}
            ></input>
            <button onClick={() => askQuestion()} className='search-button'>Search!</button>
          </div>
        </div>

        <img className='sun' src={sun} alt="sun" />
        <img className='mountain' src={mountain} alt="mountain" />
        <img className='tree' src={tree} alt="tree" />
        <img className='cloud-1' src={cloud} alt="cloud" />
        <img className='cloud-2' src={cloud} alt="cloud" />
        <img className='cloud-3' src={cloud} alt="cloud" />
        <img className='cloud-4' src={cloud} alt="cloud" />

      </div>

      {/* GRASS */}
      <div className="grass-section">
        <div className="pin-wheel-container">
          <img className='pin-wheel' src={pinwheel} alt="pinwheel" />
          <div className='pin-wheel-line'></div>
        </div>
        <div className='result-tablet'>
          <div className='result-box-header'>
            <div className='result-box-inner'>
              <img className='paw' src={goleft} alt="goleft" />
              <div className='result-title'>
                {answerTitle}
              </div>
              <img className='paw' src={goright} alt="goright" />
            </div>
          </div>
          <div className='result-box-body'>{query.length ? answer : ''}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
