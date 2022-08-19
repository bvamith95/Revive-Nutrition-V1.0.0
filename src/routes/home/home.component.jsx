import React from "react";
import { useNavigate } from 'react-router';

import {ReactComponent as ConsultLogo } from '../../assests/consult-logo.svg';
import {ReactComponent as PersonalLogo } from '../../assests/personal-logo.svg';
import {ReactComponent as UnlockLogo } from '../../assests/unlock-logo.svg';
import {ReactComponent as PointLogo } from '../../assests/seed-logo.svg';

import Button from "../../components/button/button.component";

import './home.styles.scss';

const Home = ( )=> {

    const navigate = useNavigate();

    const goToQuizHandler = () => {
        navigate ('/consultation')
    }


    return(
        <div className='shop-page-container'>
                <div className='section-intro'>
                    <div className='intro-img'>
                        <img className='intro-img-background' alt='intro-img-background' src={require('../../assests/img-ashwagandha.jpg')} />
                        <img className='intro-img-box' alt='intro-img' src={require('../../assests/img-intro-box.png')} />
                    </div>

                    <div className='intro-text'>
                        <h2>If no two people are the same, why should their nutrition be</h2>
                        <p>Our packs are personalised, but that doesn't mean more expensive. We  just take the hard work out of health by delivering essential nutrients to your doorstep every month.</p>
                        <Button onClick={goToQuizHandler} >Take the Quiz</Button>
                    </div>
                </div>

                <div className='section-steps'>
                    <h2>How it works</h2>
                    <div className='steps-container' >
                        <div className='icon-box'>
                            <ConsultLogo className="logo"/>
                            <h3>Take Your Free Quiz</h3>
                            <p>Fill us in on your day-to-day health so that  we can fill your plan with supplements fit for just you.</p>
                        </div>

                        <div className='icon-box'>
                            <PersonalLogo className="logo"/>
                            <h3>Order Your Personalised Vitamins</h3>
                            <p>Receive your personalised supplements, add or remove as you like and choose the subscription that’s right for you.</p>
                        </div>

                        <div className='icon-box'>
                            <UnlockLogo className="logo"/>
                            <h3>Log Onto Our App</h3>
                            <p>Keep this insightful conversation going. We’ll adjust as and when your health needs change.</p>
                        </div>
                    </div>

                </div>

                <div className='section-example'>
                        <div className='example-intro'>
                            <h2>Your Body, Our Science. Let's Work Together</h2>
                            <p>No one in the world is like you - we get that. That means we'll help you create a health plan that helps you feel your best today.</p>
                        </div>

                        <div className='example-slide'>
                            <div className='example-slide-img'>
                            <img className='example-img-1' alt='slide-img' src={require('../../assests/img-showcase-1.png')} />
                            <img className='example-img-2' alt='slide-img' src={require('../../assests/img-showcase-2.webp')} />
                            <img className='example-img-3' alt='slide-img' src={require('../../assests/img-showcase-3.webp')} />


                            </div>

                            <div className='example-slide-info'>
                                <h3>Priya's Plan</h3>
                                <span>Student</span>
                                <p>Priya is a student who works long hours and wants help with his exposure to screens & gadgets.</p>
                                <div className='benefits-box'>
                                    <div className='benefit'>
                                        <PointLogo className="point-logo"/>
                                        <span>ASHWAGANDHA for stress</span>
                                    </div>

                                    <div className='benefit'>
                                        <PointLogo className="point-logo"/>
                                        <span>LUTEIN & ZEAXANTHIN for digital detox</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className='section-promise'>
                    <div className='promise'>
                        <div className='promise-img'>
                        <img className='promise-img-guidance' alt='guidance-img' src={require('../../assests/img-guidance.webp')} />

                        </div>
                        <div className='promise-text'>
                            <h3>Ingredient Integrity</h3>
                            <span>WELL RESEARCHED AND TESTED</span>
                            <p>We don’t use unnecessary fillers or nasty chemicals to refine or process our ingredients. Our supplements are designed for maximum absorption - to benefit you - so you feel Revived.</p>
                        </div>
                    </div>

                    <div className='promise'>

                        <div className='promise-text'>
                            <h3>Testing 1, 2, 3</h3>
                            <span>WELL RESEARCHED AND TESTED</span>
                            <p>We take testing seriously. All our products are tested three times throughout our supply chain. Once, when we receive the ingredients, again during manufacturing, with further testing on finished products. 

                            This approach ensures our products meet exacting specifications, and that they’re safe.
                            </p>
                        </div>

                        <div className='promise-img'>
                        <img className='promise-img-ingredients' alt='ingred-img' src={require('../../assests/img-testing.jpg')} />
                        </div>
                    </div>
                </div>

                <div className='section-cta'>
                    <div className='cta'>
                    <h2>Ready to Get Started?</h2>
                    <p>By taking your diet and lifestyle into account alongside your genetic predispositions, we can work out what your body really needs.</p>
                    <Button onClick={goToQuizHandler} >Take the Quiz</Button>
                    </div>
                </div>


        </div>

    )
}

export default Home;