import React from 'react';
import Navbar from './components/Navbar';

import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm';
import QuoteList from './components/QuoteList';
import RandomQuote from './components/RandomQuote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RandomQuote />
    </div>
  );
}

export default App;
