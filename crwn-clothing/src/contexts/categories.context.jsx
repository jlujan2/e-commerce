import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMaps] = useState({});
   
    useEffect(() => {
        //NOTE: ANY ASYC FUNCTION YOU HAVE WRAPPED IN ASYNC FUNCTION
        const getCategories = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMaps(categoryMap);
        }

        getCategories();
    }, []);

    const value = {categoriesMap};
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}