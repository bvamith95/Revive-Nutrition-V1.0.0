import { createContext, useState, useContext, useEffect} from "react";
import { GoalsContext } from "./goals.context";
import { ScoreContext } from "./score.context";
import { QuizContext } from "./quiz.context";

export const RecommendationContext = createContext({
    recommendedProducts:[],
 
 });


 export const RecommendationProvider = ({children}) => {
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    const {goalScore} = useContext( ScoreContext);

    const { goalsMap} =useContext(GoalsContext);
    const {quizFormFields} = useContext(QuizContext);

    const suggestProduct = ()=>{

        if(goalScore.energy.score > 0) {
            recommendedProducts.push(goalsMap.energy[0]);
           
        }

        if(goalScore.stress.score > 0) {
            recommendedProducts.push(goalsMap.stress[0]);
           
        }

        if(goalScore.sleep.score > 0) {
            recommendedProducts.push(goalsMap.sleep[0]);
           
        }

        if(goalScore.bones.score > 0) {
            recommendedProducts.push(goalsMap.bones[0]);
           
        }

        if(goalScore.detoxA.score > 0) {
            recommendedProducts.push(goalsMap.detoxa[0]);
            
        }

        if(goalScore.detoxD.score > 0) { 
            recommendedProducts.push(goalsMap.detoxd[0]);
           
        }

        if(goalScore.skin.score > 0) {
            recommendedProducts.push(goalsMap.skin[0]);
           
        }

        if(goalScore.immunity.score > 0) {
            recommendedProducts.push(goalsMap.immunity[0]);
           
        }

        if(goalScore.recovery.score > 0) {
            recommendedProducts.push(goalsMap.recovery[0]);
           
        }

        
      
    }

        
    // console.log(recommendedProducts);
    // console.log(goalScore);
    // console.log(quizFormFields);

    const value = {recommendedProducts, setRecommendedProducts, suggestProduct};
    return(
        <RecommendationContext.Provider value={value}>
        {children}
        </RecommendationContext.Provider>
    );
 }