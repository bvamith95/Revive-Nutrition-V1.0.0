

import  './quiz-slide-2.styles.scss';

import { QuizContext } from '../../contexts/quiz.context';
import { useContext } from 'react';

import 'animate.css';


const QuizSlide2 = (question)=>{

  const {questionText, answerOptions, name} = question.question.question;
  const {handleAnswerButtonClick, updateFormArray } = useContext(QuizContext);
    return (
      <div className='quiz-body-2 animate__animated  animate__fadeInUp'>
        

      <div className='quiz-header'>
        <h2 className='quiz-question animate__animated  animate__fadeInUp animate__delay-.2s'>
        
          {questionText} 
        </h2>
      </div>
      
      <div className='quiz-answers-container quiz-question animate__animated  animate__fadeInUp animate__delay-.7s'>

      {Object.keys(answerOptions).map((key)=>{
        const answers = answerOptions[key];
        return (
            
        <div className='quiz-answer' key={key} onClick={()=>{
                                          handleAnswerButtonClick();
                                          updateFormArray(name, answers.answerValue);}} >
            <span>{answers.answerText}</span>
        </div>
        ) 
      })}

      </div>
      
      
      </div>

    
      )
}

export default QuizSlide2;