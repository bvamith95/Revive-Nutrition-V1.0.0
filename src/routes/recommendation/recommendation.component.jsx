import React from "react";
import { createQuizUserDocument } from "../../utils/firebase/firebase.utils";

import './recommendation.component.styles.scss'

import ProductCard from "../../components/product-card/product-card.component";
import Button from "../../components/button/button.component";
import {ReactComponent as SeedLogo } from '../../assests/seed-logo.svg';
import {ReactComponent as WaterIcon } from '../../assests/water-icon.svg';


import { useContext} from "react";
import { ScoreContext } from "../../contexts/score.context";
import { GoalsContext } from "../../contexts/goals.context";
import { QuizContext } from "../../contexts/quiz.context";

import { useNavigate } from "react-router";

import 'animate.css';



const Recommendation = () =>{
    const recommendedProducts =[];
    const goalFocus = [];

    const navigate = useNavigate();

    const goToShopHandler = () => {
        navigate ('/shop')
    }
    
    const {goalScore} = useContext( ScoreContext);

    const { goalsMap} = useContext(GoalsContext);
    const {quizFormFields} = useContext(QuizContext);

    const suggestProduct = ()=>{

        if(goalScore.energy.score > 0) {
            recommendedProducts.push(goalsMap.energy[0]);
           goalFocus.push("energy")
        }

        if(goalScore.stress.score > 0) {
            recommendedProducts.push(goalsMap.stress[0]);
            goalFocus.push("stress")
        }

        if(goalScore.sleep.score > 0) {
            recommendedProducts.push(goalsMap.sleep[0]);
            goalFocus.push("sleep")
        }

        if(goalScore.bones.score > 0) {
            recommendedProducts.push(goalsMap.bones[0]);
            goalFocus.push("bones")
        }

        if(goalScore.detoxA.score > 0) {
            recommendedProducts.push(goalsMap.detoxa[0]);
            goalFocus.push("detoxa")
        }

        if(goalScore.detoxD.score > 0) { 
            recommendedProducts.push(goalsMap.detoxd[0]);
            goalFocus.push("detoxd")
        }

        if(goalScore.skin.score > 0) {
            recommendedProducts.push(goalsMap.skin[0]);
            goalFocus.push("skin")
        }

        if(goalScore.immunity.score > 0) {
            recommendedProducts.push(goalsMap.immunity[0]);
            goalFocus.push("immuity")
        }

        if(goalScore.recovery.score > 0) {
            recommendedProducts.push(goalsMap.recovery[0]);
            goalFocus.push("recovery")
        }
      
    }
    
    suggestProduct();
 
    const quizUser = {
        quizFormFields,
        goalFocus,
        goalScore,
        recommendedProducts

    };
    console.log(quizUser);
    createQuizUserDocument(quizUser);
    return (

        <div className="recommendation-page animate__animated  animate__fadeInUp">
            <div className="intro animate__animated  animate__fadeInUp animate__delay-.2s">
                <div className="intro__img-container">
                    <img className="intro__img-container--img1" alt="recommendation product" src={require('../../assests/img-recommendation-product.png')}/>
                    <img className="intro__img-container--img2" alt="recommendation background" src={require('../../assests/img-recommendation-background.png')}/>
                </div>

                <div className="intro__text-container ">
                    <span className="recommendation-text">RECOMMENDATION</span>
                    <h2>Made for <span> {quizFormFields.name? quizFormFields.name : "You" }</span></h2>
                    <p>Your recommendation is based on your goals to focus on 
                     
                    {goalFocus.map((goal, i,goalFocus) => {
                        if (i + 1 === goalFocus.length) {
                         return (<span> & {recommendedProducts[i].goalMeta}. </span>)
                        } else {
                            return (<span> {recommendedProducts[i].goalMeta}, </span>)
                        }
                      })}
                     We referenced hundreds of clinical studies to ensure you’re getting just what your body needs.</p>

                          <h3 href="#recommendation">Let's go ▼</h3>
 
  
                  

                </div>
            </div> 

            <div id="recommendation" className="product-recommendation-container animate__animated  animate__fadeInUp animate__delay-.5s">
                <div className="product-recommendation-container__intro"> 
                    <h2 className="heading">Make feeling good an everyday thing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames aenean felis netus bibendum porttitor.</p>
                </div>

                <div className="product-recommendation">
                    <div className="product-recommendation__intro">
                        <h3>Your recommendation</h3>
                        <div className="recommendation-text">
                        {goalFocus.map((goal, i, goals) => {
                            const productText = recommendedProducts[i].title;
                            const productMeta = recommendedProducts[i].goalMeta;
                            return(
                                <div className="product-text-box">
                                    <SeedLogo />
                                    <span>{productText.toUpperCase()} for your {productMeta}</span>
                                </div> 
                            )
                        })}

                        </div>
                        <div className="recommendation-outro">
                        <WaterIcon />
                        <span>TAKE DAILY WITH WATER</span>
                        </div>
                    </div>

                    <div className="recommended-products-container">
                        {recommendedProducts
                        .map((product) => 
                        <ProductCard key={product.id} product={product} />
                        )}
    
                    </div>
            </div>
            
            
            </div>

            <div className="recommendation-footer animate__animated  animate__fadeInUp animate__delay-.7s">
            <div className="recommendation-footer__img">
            <img className="recommendation-img" alt="recommendation footer" src={require('../../assests/img-intro-box.png')}/>           
            </div>
            <div className="recommendation-footer__body">
                <h3>Want to choose yourself ?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id at neque, luctus fringilla ultrices consectetur commodo, erat. Nunc tellus in orci pharetra porta.</p>
                <Button onClick={goToShopHandler} buttonType="inverted" >Know More</Button>
            </div>
            </div>
        </div>
    )
}

export default Recommendation;