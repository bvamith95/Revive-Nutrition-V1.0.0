import QuizSlide1 from '../quiz-slide-1/quiz-slide-1.component';
import QuizSlide2 from '../../components/quiz-slide-2/quiz-slide-2.component';
import QuizSlide3 from '../../components/quiz-slide-3/quiz-slide-3.component';
import QuizSlide4 from '../../components/quiz-slide-4/quiz-slide-4.component';
import QuizSlide5 from '../../components/quiz-slide-5/quiz-slide-5.component';



import './quiz-slide-selector.styles.scss';


const QuizSlideSelector = (question)=>{

          if (question.question.questionTemplate === 1) {
                                return <QuizSlide1 key={question.question.id} question={question} /> 
                            }
                            else if (question.question.questionTemplate === 2){
                                return  <QuizSlide2 key={question.question.id} question={question} />
                            }
                            else if (question.question.questionTemplate === 3){
                                return  <QuizSlide3 key={question.question.id} question={question} />
                            }
                            else if (question.question.questionTemplate === 4){
                                return  <QuizSlide4 key={question.question.id} question={question} />
                            } 
                            else if (question.question.questionTemplate === 5){
                                return  <QuizSlide5 key={question.question.id} question={question} />
                            }
                            else if (question.question.questionTemplate === 6){
                                return  <QuizSlide5 key={question.question.id} question={question} />
                            }
                            else {
                            return <h1>Template Error. Please try again.</h1>
                            }
};

export default QuizSlideSelector;