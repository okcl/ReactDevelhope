import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

function DisplayLanguage(){
    const language = useContext(LanguageContext)
    return(
        <h3>Current Language: {language}</h3>
    )
}

export default DisplayLanguage