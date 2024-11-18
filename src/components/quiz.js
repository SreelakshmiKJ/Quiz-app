import React,{useState,useRef} from 'react'
import Timer from './timer.js'
import Confirm from './confirmation.js'
import Answer from './answers.js'

const actions={"computer":"Computer Science","maths":"Mathematics","GK":"General Knowledge"}

export default function QuizCard({setStart,setOfQns,topic})
{
    const [I,setI]=useState(0)
    let correctAns=useRef(0)
    let incorrectAns=useRef(0)
    const [completed,setCompleted]=useState(false)
    const [color,setColor]=useState(false)
    let sub1=useRef(false)
    let answers=useRef([])
    let f=useRef((setOfQns.length/2)*60)
    let m=parseInt(f.current/60)
    let s=f.current%60
    let [count,setCount]=useState({min:m,sec:s})
    let nc=useRef('')
    const [confirm,setConfirm]=useState(false)
    let q 
    if(color==='a')
    {}
    function optionclick(e)
    {
        let pr=e.target.parentElement.parentElement
        if(e.target.innerText.slice(4,)===setOfQns[I].answer)
        {
            q={id:I,re:e.target.innerText.slice(4,),correct:"Correct"}
            correctAns.current+=1
            pr.style.pointerEvents="none"
            e.target.style.backgroundColor="rgb(17,221,17)"
            setColor(p=>!p)
        }
        else
        {
            q={id:I,re:e.target.innerText.slice(4,),correct:"Incorrect"}
            incorrectAns.current+=1
            pr.style.pointerEvents="none"
            e.target.style.backgroundColor="red"
            setColor(p=>!p)
        }
        if(I<=setOfQns.length-2)
        {
            setTimeout(()=>{
                answers.current.push(q)
                e.target.style.backgroundColor="white"
                pr.style.pointerEvents="auto"
                setI(previndex=>previndex+1)
            },500)
        }
        else if(I>=setOfQns.length-1)
        {
            setTimeout(()=>{
                answers.current.push(q)
                e.target.style.background="white"
                pr.style.pointerEvents="auto"
                setCompleted(true)

            },500)
        }
    }
    return (
        <div className="outer">
            <div>
                {
                    !(!completed && confirm)?
                    <div style={{position:"relative"}}>
                        {
                            !completed?
                            <div className="container">
                                <Timer setCompleted={setCompleted} completed={completed} questionCount={setOfQns.length} setCount={setCount} count={count}/>
                                <div className="details">
                                    <div className="topic">Topic : {actions[topic]}</div>
                                    <div className="num">Number of Questions Left : {setOfQns.length-answers.current.length}</div>
                                </div>
                                <div className="question">
                                    {I+1}{")"}{setOfQns[I].question}
                                </div>
                                <div className="options">
                                    {
                                        setOfQns[I].options.map((item,index)=>{
                                            return(
                                                <div className="option" key={index} onClick={optionclick}>
                                                    ({index+1}) {item}
                                                </div>
                                            )
                                        })
                                    }
                                </div> 
                                <div className="attempt" onClick={()=>{
                                    sub1.current=true
                                    nc.current="attempt"
                                    setConfirm(true)
                                }}>Finish The Attempt</div> 
                            </div>
                            :<div className="container finish">
                                <Answer answerList={answers.current} len={setOfQns.length} correctAnswer={correctAns.current} incorrectAnswer={incorrectAns.current} finishAttempt={sub1.current}/>
                            </div>
                        }
                        <div className="quit" onClick={()=>{
                            correctAns.current=0
                            nc.current="quit"
                            if(completed===false)
                            {
                                setConfirm(true)
                            }
                            else
                            {
                                setStart(false)
                            }
                        }}>Quit</div>
                    </div>
                    :<div className="container confirm">
                        <Timer setCompleted={setCompleted} completed={completed} questionCount={setOfQns.length} setCount={setCount} count={count}/>
                        <Confirm setStart={setStart} setCompleted={setCompleted} setConfirm={setConfirm} name={nc}/>
                    </div>
                }
            </div>
        </div>
    )
}