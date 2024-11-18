import React,{useState,useRef,useEffect} from 'react'
import {setofQns} from './question.js'
import QuizCard from './quiz.js'
import './dsquiz.css'
export default function Start(){

    const [testStart,setStart]=useState(false)
    const [val,setVal]=useState('computer')
    const [num,setNum]=useState(10)
    const qnarr=useRef({qns:[],topic:""})
    useEffect(()=>{
        if(testStart===false)
        {
            setVal('computer')
            setNum(10)
        }
    },[testStart])

    function generateQuestions(){
        let k 
        qnarr.current.qns=setofQns[val].slice(0,num)
        let d1=qnarr.current.qns 
        d1.sort(()=>{
            return 0.5-Math.random()
        })
        k=d1.map(item=>{
            item.options.sort(()=>{
                return 0.5-Math.random()
            })
            return item 
        })
        qnarr.current.qns=k
        qnarr.current.topic=val 
        setStart(true)
    }
    function FirstPage(){
        let l=<div className="outer">
                <div className="container start">
                    <div className="description">
                        <h1 style={{alignSelf:"center"}}>Quiz</h1>
                        <span className="sp">1) Total Duration of the quiz is 2.5 Minutes for 5 Questions and 5 Minutes for 10 Questions</span>
                        <span className="sp">2) The countdown timer on the top right corner of the screen will display the remaining time available
                        for you to complete the quiz.When the timer reaches zero,the Quiz will end by itself</span>
                        <span className="sp">3) To Answer the question,Click on the option you believe is correct</span>
                        <span className="sp">4) For each correct answer 4 mark will be awarded and for each wrong answer 1 mark will be deducted</span>
                    </div>
                    <label className="lbl top">Select the topic</label>
                    <select className="choices" value={num} onChange={(e)=>{
                        setVal(e.target.value)
                    }}>
                        <option value="computer">Computer Science</option>
                        <option value="maths">Mathematics</option>
                        <option value="GK">General Knowledge</option>
                    </select>
                    <label className="lbl" style={{marginTop:"4px"}}>Select the Number of Questions</label>
                    <select className="count" value={num} onChange={(e)=>{
                        setNum(parseInt(e.target.value))
                    }}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                    <button className="generate" onClick={generateQuestions}>Generate</button>
                </div>
                </div>

                return (l)

            }

            return(
                <div>
                    {testStart?<QuizCard setStart={setStart} setOfQns={qnarr.current.qns} topic={qnarr.current.topic}/>:<FirstPage/>}
                </div>
            )
            
}