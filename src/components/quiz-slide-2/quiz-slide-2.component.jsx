

import  './quiz-slide-2.styles.scss';

import { QuizContext } from '../../contexts/quiz.context';
import { useContext } from 'react';

const QuizSlide2 = (question)=>{

  const {questionText, answerOptions} = question.question.question;
  const {handleAnswerButtonClick } = useContext(QuizContext);
    return (
      <div className='quiz-body-2'>
        

      <div className='quiz-header'>
        <h2 className='quiz-question'>
        
          {questionText} 
        </h2>
      </div>
      
      <div className='quiz-answers-container'>
      <div className='quiz-answer' onClick={handleAnswerButtonClick }>
        <span>{answerOptions[0].answerText}</span>
      </div>
      
      <div className='quiz-answer'  onClick={handleAnswerButtonClick }>
          <span>{answerOptions[1].answerText}</span>
      </div>
      </div>
      
      
      </div>

    
      )
}

export default QuizSlide2;