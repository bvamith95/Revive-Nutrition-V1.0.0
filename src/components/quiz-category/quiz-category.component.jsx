import './quiz-container.styles.scss';

import QuizSlideSelector from '../quiz-slide-selector/quiz-slide-selector.component';
import { QuizContext } from '../../contexts/quiz.context';
import { useContext} from 'react'

const QuizCategory = ()=> {
    const { questionsMap, questionCount } = useContext(QuizContext);

    return (
        <div>
        {Object.keys(questionsMap).map((key)=>{
            const questions = questionsMap[key];
            return (
              <div>
              <QuizSlideSelector key={key}  question={questions[questionCount]}/>
              </div>
            ) 
          })}

        </div>
    )
  }

export default QuizCategory;