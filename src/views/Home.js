import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Wrapper, Heading, Button, Paragraph } from './Home.styles';

const apiUrl =
  'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json';

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [previousQuote, setPreviousQuote] = useState(null);

  const drawRandomQuote = () => {
    if (currentQuote) {
      setPreviousQuote(currentQuote);
    }
    const quote = quotes[Math.round(Math.random() * quotes.length)];
    setCurrentQuote(quote);
  };

  useEffect(() => {
    axios.get(apiUrl).then(({ data }) => setQuotes(data));
  }, []);

  useEffect(() => {
    drawRandomQuote();
  }, [quotes]);

  const handleButtonClick = (type) => {
    if (type === 'previous') {
      setCurrentQuote(previousQuote);
    } else {
      drawRandomQuote();
    }
  };

  return (
    <Wrapper>
      <Heading>Quotes</Heading>
      {currentQuote ? (
        <>
          <div>
            <Button
              disabled={!previousQuote || currentQuote === previousQuote}
              onClick={() => handleButtonClick('previous')}
            >
              Previous
            </Button>
            <Button onClick={() => handleButtonClick('next')}>Next</Button>
          </div>
          <Paragraph isPrimary>“{currentQuote.quote}”</Paragraph>
          <Paragraph>{currentQuote.author}</Paragraph>
        </>
      ) : null}
    </Wrapper>
  );
};

export default Home;
