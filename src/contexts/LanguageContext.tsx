import React, { createContext, useState, ReactNode } from "react";

type LangContextType = {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

type LanguageProviderProps = {
    children: ReactNode;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    const contextValue: LangContextType = {
        language,
        setLanguage,
    };

    return (
        <LangContext.Provider value={contextValue}>
            {children}
        </LangContext.Provider>
    );
};

export { LangContext, LanguageProvider };