import React, {useEffect, useState} from 'react';
import './App.scss';
import COLORS_ARRAY from './colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'



let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("Life is not measured by the number of breaths we take, but by the moments that take our breath away")

  const [randomNumber, setRandomNumber] = useState(0)

  const [quotesArray, setquotesArray] = useState(null)

  const [accentColor, setAccentColor] = useState('#282c34')

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json()
    setquotesArray(parsedJSON.quotes)
  }
  
    useEffect(() => {
    
      fetchQuotes(quoteDBUrl)
    
    }, [quoteDBUrl])

    const getRandomQuote = () => {
    
      let randomInteger = Math.floor(quotesArray.length * Math.random())
      setRandomNumber(randomInteger)
      setAccentColor(COLORS_ARRAY[randomInteger])
      setQuote(quotesArray[randomInteger].quote)
      setAuthor(quotesArray[randomInteger].author)
    
    }
  
    const [author, setAuthor] = useState("Maya Angelou")





    const changeQuoteAndAuthor1 = () => {
      setQuote("Fall seven times and stand up eight.");
      setAuthor("Japanese Proverb")
    }

    const changeQuoteAndAuthor2 = () => {
      setQuote("Life shrinks or expands in proportion to one’s courage.");
      setAuthor("Anais Nin")

    }
    return (
      <div className="App">
        <header className="App-header" style={{backgroundColor:accentColor}} >
          <div id="quote-box" style={{color: accentColor}}>
           
        
          

          <p id ="text">
            "{quote}"
        </p>
            <p id="author">- {author}</p>
            <div className="button">
            <a id="tweet-quote" style={{backgroundColor:accentColor}} href=
                {encodeURI('http://www.twitter.com/intent/tweet?text=${quote} -${author}')} ><FontAwesomeIcon icon={faTwitter}  /></a>
            </div>
            
              <button id="new-quote" style={{ backgroundColor: accentColor }} onClick={() => getRandomQuote()}> Generate a Random Quote </button>
            
            
          
        </div>
    
        </header>
      </div>
    );
  };

export default App;
