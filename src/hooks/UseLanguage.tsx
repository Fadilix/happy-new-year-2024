import { useContext } from "react";
import { LangContext } from "../contexts/LanguageContext";


const useLanguage = () => {
    const context = useContext(LangContext);

    if (!context) {
        throw new Error("useLanguage must be used withing a LanguageProvider");
    }

    return context;
}


export default useLanguage;
