import './quiz-category.styles.scss';
import QuizSlideSelector from '../../components/quiz-slide-selector/quiz-slide-selector.component';

const QuizCategory = (questions)=> {

        
        <div>
            {
                questions.map((question)=>{(
                                <QuizSlideSelector  templatetype={question.questionTemplate} question={question}/>
                                )
                })
            }
        </div>



}

export default QuizCategory;