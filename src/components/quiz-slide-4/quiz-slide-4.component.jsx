import { QuizContext } from '../../contexts/quiz.context';
import { useContext } from 'react';
import { ScoreContext } from '../../contexts/score.context';

import  './quiz-slide-4.styles.scss';

const QuizSlide4 = (question)=>{
  const {questionText, answerOptions, name} = question.question.question;
  const {handleAnswerButtonClick, updateFormArray } = useContext(QuizContext);
  const {addScoreToGoal} = useContext(ScoreContext);

    return (
        <div className='quiz-body-4'>
        

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
                                                updateFormArray(name, answers.answerValue);}} >
                  <span>{answers.answerText}</span>
              </div>
              ) 
            })}
            </div>

        </div>
 
    
      )
}

export default QuizSlide4;