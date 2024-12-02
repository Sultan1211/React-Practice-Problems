import React from 'react'

function Quotes() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "Believe you can and you’re halfway there. – Theodore Roosevelt",
        "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "The future depends on what you do today. – Mahatma Gandhi"
      ];
  const randomInd = Math.floor(Math.random()*quotes.length);
  const quote = quotes[randomInd];
  return (
    <div>{quote}</div>
  )
}

export default Quotes