import FormInput from '../form-input/form-input.component';
import {ReactComponent as NextLogo } from '../../assests/input-submit-logo.svg';

import { QuizContext } from '../../contexts/quiz.context';
import { useContext } from 'react';

import  './quiz-slide-5.styles.scss';



const QuizSlide5 = (question)=>{

  const {questionText, type, name} = question.question.question;
  const {handleAnswerButtonClick, handleChange} = useContext(QuizContext);


    return (
        <div className='quiz-body-5'>
        

            <div className='quiz-header'>
              <h2 className='quiz-question'>
              {questionText} 
              </h2>
            </div> 
  
            <div className='quiz-answers-container'>
              <div className='input-answer'>
                <FormInput type={type} required  name={name} onChange={handleChange}/>
              </div>

              <div className='submit-answer'  type='submit' onClick={handleAnswerButtonClick}>
                <NextLogo />
              </div>
          
            </div>

        </div>

    
      )
}

export default QuizSlide5;