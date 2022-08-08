import React from "react";

import './quiz-controls.styles.scss';
import {ReactComponent as ResetLogo } from '../../assests/reset-circle.svg';
import {ReactComponent as CloseLogo } from '../../assests/close-circle.svg';

import { useContext } from "react";
import { QuizContext } from "../../contexts/quiz.context";
import { ScoreContext } from "../../contexts/score.context";

import { useNavigate } from "react-router";

const QuizControls = ()=>{
    const {resetQuiz} = useContext(QuizContext);
    const { resetScore} = useContext(ScoreContext);

    const navigate = useNavigate();

    
    const reset = ()=>{
        resetQuiz();
        resetScore();
    }

    const exitQuiz = ()=>{
        resetQuiz();
        resetScore();
        navigate("/");
    } 
    return (
        <div className='quiz-controls__container'>
        <CloseLogo className='icon' onClick={exitQuiz} />
        <ResetLogo className='icon' onClick={reset}/>
        </div>
    )
}

export default QuizControls;