import './consultation.component.scss'

import { useNavigate } from 'react-router';
import { QuizContext } from '../../contexts/quiz.context';
import { useContext} from 'react';
import QuizContainer from '../../components/quiz-container/quiz-container.component';
import QuizControls from '../../components/quiz-controls/quiz-controls.component';



const Consultation = ()=> {
    const { questionCount } = useContext(QuizContext);
    const navigate = useNavigate();

    if (questionCount > 29 ){
      navigate ('/recommendation');
      
    }
    else{    
          return (
            <div className='consultation-page'>
              <div className='quiz-container'>
                <QuizControls />

                <QuizContainer />
      
                  
              </div>
            </div>
        
          )
        }
      }

export default Consultation;