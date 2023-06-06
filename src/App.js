import { useEffect } from 'react';
import './App.css';

const API_KEY = "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"
function App() {

  useEffect(() => {
    askQuestion();
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
      First ChatGPT Project
    </div>
  );
}

export default App;
