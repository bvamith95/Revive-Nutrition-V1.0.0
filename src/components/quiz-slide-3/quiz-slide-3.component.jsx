import { QuizContext } from '../../contexts/quiz.context';
import { useContext } from 'react';
import { ScoreContext } from '../../contexts/score.context';

import  './quiz-slide-3.styles.scss';

const QuizSlide3 = (question)=>{
  const {questionText, answerOptions,name } = question.question.question;
  const {handleAnswerButtonClick, updateFormArray} = useContext(QuizContext);
  const {addScoreToGoal} = useContext(ScoreContext);

    return (
        <div className='quiz-body-3'>
        

            <div className='quiz-header'>
              <h2 className='quiz-question'>
              {questionText} 
              </h2>
            </div>
  
            <div className='quiz-answers-container'>

            {Object.keys(answerOptions).map((key)=>{
              const answers = answerOptions[key];
              return (
                  
              <div className='quiz-answer' key={key} onClick={()=>{
                                                handleAnswerButtonClick();
                                                addScoreToGoal(answers.contextScore,answers.goalContext);
                                                updateFormArray(name, answers.answerText);}} >
                  <span>{answers.answerText}</span>
              </div>
              ) 
            })}
  

            </div>

        </div>

    
      )
}

export default QuizSlide3;