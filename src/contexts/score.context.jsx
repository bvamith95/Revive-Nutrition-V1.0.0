import { createContext, useState} from "react";

const goalScore = {
    sleep: {
        score : 0
    },
    energy: {
        score : 0
    },
    stress: {
        score : 0
    },
    immunity: {
        score : 0
    },
    bones: {
        score : 0
    },
    detoxA: {
        score : 0
    },
    detoxD: {
        score : 0
    },
    blood: {
        score : 0
    },
    recovery: {
        score : 0
    },
    skin: {
        score : 0
    }
    
}


export const ScoreContext = createContext(
                                        {goalScore});


export const ScoreProvider = ({ children })=>{

   const addScoreToGoal = ( answerScore, answerGoal) => {

        if (answerGoal){
            console.log("Goal for Answer Found");
        goalScore[answerGoal].score =  goalScore[answerGoal].score + answerScore;
        } else{
            console.log("No Goal for Answer");
        }
   }

        const defaultGoalScore = {
            sleep: {
                score : 0
            },
            energy: {
                score : 0
            },
            stress: {
                score : 0
            },
            immunity: {
                score : 0
            },
            bones: {
                score : 0
            },
            detoxA: {
                score : 0
            },
            detoxD: {
                score : 0
            },
            blood: {
                score : 0
            },
            recovery: {
                score : 0
            },
            skin: {
                score : 0
            }
            
        }

        const [goalScore, setGoalScore] = useState(defaultGoalScore)


   const resetScore =()=>{
        setGoalScore(defaultGoalScore);
   }

    const value = {
        addScoreToGoal,
        goalScore,
        resetScore
    };

    return <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>;
};