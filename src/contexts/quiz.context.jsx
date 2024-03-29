import { createContext, useState, useEffect } from "react";
import { getQuestionsAndAnswers } from "../utils/firebase/firebase.utils.js";
import { addQuestionsAndAnswers } from "../utils/firebase/firebase.utils.js";

import QUIZ_DATA from "../quiz-data.js";

export const QuizContext = createContext({
   questionsMap:{},
   questionCount:0
});



export const QuizProvider = ({children}) => {
    const [questionsMap, setQuestionsMap] = useState({});

    // Use the below function to update your DB on firebase, deactivate after use, set right name for the end category
    
    useEffect(()=>{
        addQuestionsAndAnswers('quiz_questions',QUIZ_DATA);
    }, []);
 
  

    useEffect(() => {
        const getQuestionsMap = async()=>{
            const questionsMap = await getQuestionsAndAnswers('quiz-questions');
            console.log(questionsMap);
            setQuestionsMap(questionsMap);
        };
        getQuestionsMap();
      }, []); 
    

//  Functions to move through Questions array
      const [questionCount, setQuestionCount] = useState(0);


      const handleAnswerButtonClick = ()=>{
          const nextQuestion = questionCount + 1 ;
          setQuestionCount(nextQuestion);
      }

    //   Handle Quiz form data
      const defaultQuizFormFields = {
        haveAccount: false,
        name : '',
        email : '',
        sex: '',
        age: '',
        takeSupplement : false,
        to_improve: '',
        also_to_improve: '',

    };

      const [quizFormFields, setQuizFormFields] = useState(defaultQuizFormFields);
    
    // Form field change
      const handleChange = (event) => {
        const { name, value } = event.target; 
    
        setQuizFormFields({ ...quizFormFields, [name]: value });
  
 
      };
    
    // OnClick Handler 
      
    const updateFormArray = (name, value)=> {
 
        setQuizFormFields({ ...quizFormFields, [name]: value });

    } ;

    // Reset Button 
    const resetQuiz = ()=> {
      setQuestionCount(0);
      setQuizFormFields(defaultQuizFormFields);

    }



    const value = {questionsMap, questionCount, handleAnswerButtonClick, handleChange, updateFormArray, quizFormFields, resetQuiz};
    return(
        <QuizContext.Provider value={value}>
        {children}
        </QuizContext.Provider>
    );
};