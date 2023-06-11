import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        MESSAGE: "This app is now English. "
    },
    it: {
        MESSAGE: "Questa app è ora in italiano. "
    }
}

class DisplayLanguage extends React.Component{
    render() {
        return  <div>
            <LanguageContext.Consumer>
                { (language) => {
                    return <div>{Strings[language].MESSAGE}</div>
                }}
            </LanguageContext.Consumer>
      </div>
    }
}

export default DisplayLanguage