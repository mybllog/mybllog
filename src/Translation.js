import {useState} from "react";
import axios from "axios";



const Translation = () =>{
    const [sourceText , setSourceText] = useState('')
    const [targetText , setTargetText] = useState('')
    const [targetLanguage, setTargetLanguage] = useState('')

    const Translatetext = async() => {
        try{
            const response = await axios.post (
                {},
                {
                params:{
                    q:sourceText,
                    target:targetLanguage,
                    key:''
                }
                }
            )
        }
        catch(err){

        }
    }
    return (
        <div></div>
    )
}
export default Translation;

