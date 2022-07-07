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
                        <h2>Live life better with personalised nutrition</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cras sollicitudin at enim gravida fermentum morbi. Tellus sit commodo ornare nunc volutpat sapien. Dictum eget feugiat proin condimentum cursus.</p>
                        <Button onClick={goToQuizHandler} >Take the quiz</Button>
                    </div>
                </div>

                <div className='section-steps'>
                    <h2>How it works</h2>
                    <div className='steps-container' >
                        <div className='icon-box'>
                            <ConsultLogo className="logo"/>
                            <h3>Take your free consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse integer in massa venenatis. Neque sed consectetur fermentum rutrum.</p>
                        </div>

                        <div className='icon-box'>
                            <PersonalLogo className="logo"/>
                            <h3>Take your free consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse integer in massa venenatis. Neque sed consectetur fermentum rutrum.</p>
                        </div>

                        <div className='icon-box'>
                            <UnlockLogo className="logo"/>
                            <h3>Take your free consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse integer in massa venenatis. Neque sed consectetur fermentum rutrum.</p>
                        </div>
                    </div>

                </div>

                <div className='section-example'>
                        <div className='example-intro'>
                            <h2>A routine tailored to you</h2>
                            <p>We'll help you create a health plan with vitamins, supplements, and more that help you feel your best today and support you long-term.</p>
                        </div>

                        <div className='example-slide'>
                            <div className='example-slide-img'>
                            <img className='example-img-1' alt='slide-img' src={require('../../assests/img-showcase-1.webp')} />
                            <img className='example-img-2' alt='slide-img' src={require('../../assests/img-showcase-2.webp')} />
                            <img className='example-img-3' alt='slide-img' src={require('../../assests/img-showcase-3.webp')} />


                            </div>

                            <div className='example-slide-info'>
                                <h3>Jamie's Plan</h3>
                                <span>Nurse</span>
                                <p>Jamie works long hours, does yoga to decompress, and wants help with her dry skin.</p>
                                <div className='benefits-box'>
                                    <div className='benefit'>
                                        <PointLogo className="point-logo"/>
                                        <span>ASHWAGANDHA for stress</span>
                                    </div>

                                    <div className='benefit'>
                                        <PointLogo className="point-logo"/>
                                        <span>COLLAGEN for hydrated skin</span>
                                    </div>

                                    <div className='benefit'>
                                      <PointLogo className="point-logo"/>  
                                      <span>VITAMIN D for healthy bones</span>
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
                            <h3>Honest Guidance</h3>
                            <span>WELL RESEARCHED AND TESTED</span>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse integer in massa venenatis. Neque sed consectetur fermentum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='promise'>

                        <div className='promise-text'>
                            <h3>Better Ingredents</h3>
                            <span>WELL RESEARCHED AND TESTED</span>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse integer in massa venenatis. Neque sed consectetur fermentum rutrum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className='promise-img'>
                        <img className='promise-img-ingredients' alt='ingred-img' src={require('../../assests/img-ingredients.webp')} />
                        </div>
                    </div>
                </div>

                <div className='section-cta'>
                    <div className='cta'>
                    <h2>Ready to get started?</h2>
                    <p>By taking your diet and lifestyle into account alongside your genetic predispositions and actual blood test results, we can work out what your body really needs.</p>
                    <Button onClick={goToQuizHandler} >Take the quiz</Button>
                    </div>
                </div>


        </div>

    )
}

export default Home;