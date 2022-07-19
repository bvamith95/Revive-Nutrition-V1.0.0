import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from '../shop-data.js';

export const GoalsContext = createContext({
   goalsMap:{},
});





export const GoalsProvider = ({children}) => {
    const [goalsMap, setGoalsMap] = useState({});

    // Use the below function to update your DB on firebase, deactivate after use, set right name for the end category
    // useEffect(()=>{
    //     addCollectionAndDocuments('goals',SHOP_DATA);
    // }, []);


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