import FormInput from '../form-input/form-input.component';
import {ReactComponent as NextLogo } from '../../assests/input-submit-logo.svg';

import { QuizContext } from '../../contexts/quiz.context';
import { useContext } from 'react';

import  './quiz-slide-5.styles.scss';

import 'animate.css';

const QuizSlide5 = (question)=>{

  const {questionText, type, name} = question.question.question;
  const {handleAnswerButtonClick, handleChange} = useContext(QuizContext);


    return (
        <div className='quiz-body-5 animate__animated  animate__fadeInUp'>
        

            <div className='quiz-header'>
              <h2 className='quiz-question animate__animated  animate__fadeInUp animate__delay-.2s'>
              {questionText} 
              </h2>
            </div> 
  
            <div className='quiz-answers-container quiz-question animate__animated  animate__fadeInUp animate__delay-.7s'>
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