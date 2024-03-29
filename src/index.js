import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';


import App from './App';
import { UserProvider } from './contexts/user.context';
import { GoalsProvider } from './contexts/goals.context';
import { CartProvider  } from './contexts/cart.context';
import { QuizProvider } from './contexts/quiz.context';
import { ScoreProvider } from './contexts/score.context';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter >
    <UserProvider>
    <QuizProvider>
      <ScoreProvider>
        <GoalsProvider>
          <CartProvider>
          <App />
          </CartProvider>
        </GoalsProvider>
      </ScoreProvider>
      </QuizProvider>
    </UserProvider>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


