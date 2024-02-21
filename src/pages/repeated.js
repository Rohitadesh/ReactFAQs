import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
const FrequentAskedQuestions = ({question,answer}) =>{

    const [show,setShow]=useState(false)
    return(
        <>
            <div  className="glass1 w-[50%] border border-black p-2 flex  justify-between">
                <h1 className="text-xlt">{question}</h1>
               <span onClick={()=>setShow(!show)}>
                { show?<FaMinus />:<FaPlus />}
                </span> 
            </div>
            {
                show &&  
                <h1 className="glass1 border border-black p-2 w-[50%] relative bottom-2">{answer}</h1>
   
            }
        </>
    )
}

export default FrequentAskedQuestions;