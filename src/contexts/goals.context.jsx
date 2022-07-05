import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const GoalsContext = createContext({
   goalsMap:{},
});



export const GoalsProvider = ({children}) => {
    const [goalsMap, setGoalsMap] = useState({});

    useEffect(() => {
        const getGoalsMap = async()=>{
            const goalsMap = await getCategoriesAndDocuments('goals');
            console.log(goalsMap);
            setGoalsMap(goalsMap);
        };
        getGoalsMap();
      }, []);
    

    const value = {goalsMap};
    return(
        <GoalsContext.Provider value={value}>
        {children}
        </GoalsContext.Provider>
    );
};