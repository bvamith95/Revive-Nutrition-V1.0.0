
import './quiz-slide-1.styles.scss';

import { QuizContext } from '../../contexts/quiz.context';
import { ScoreContext } from '../../contexts/score.context';

import { useContext } from 'react';

import 'animate.css';

const QuizSlide1 = (question)=>{

    const {questionText, answerOptions} = question.question.question;
    const {handleAnswerButtonClick } = useContext(QuizContext);
    const {addScoreToGoal} = useContext(ScoreContext);
      return (
        <div className='quiz-body-1 animate__animated  animate__fadeInUp' >
          
  
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
                                                  addScoreToGoal(answers.contextScore,answers.goalContext);}} >
                    <span>{answers.answerText}</span>
                </div>
                ) 
              })}

        </div>
        
         
        </div>
  
      
        )
  }
  
  export default QuizSlide1;