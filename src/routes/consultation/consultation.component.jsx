import './consultation.component.scss'

import { QuizContext } from '../../contexts/quiz.context';
import { useContext, useEffect, useState } from 'react';
import QuizContainer from '../../components/quiz-container/quiz-container.component';



const Consultation = ()=> {
    const { questionsMap } = useContext(QuizContext);




    return (
      <div className='consultation-page'>
        <div className='quiz-container'>
          <div className='quiz-controls'>
          <h2>Here are the quiz controls</h2>
          </div>

          <QuizContainer />
 
            
        </div>
      </div>
  
    )
  }

export default Consultation;