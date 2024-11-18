import React,{useEffect,useRef} from 'react'

export default function Timer({setCompleted,completed,questionCount,setCount,count})
{
    useEffect(()=>{
        if(count.min===0 && count.sec===0)
        {
            setCompleted(true)
        }
    },[count,setCompleted])
    let f=useRef((questionCount/2)*60)
    let ob1=f.current/5
    let rd 
    useEffect(()=>{
        let id=setInterval(()=>{
            setCount(prevcount=>{
                if(prevcount.sec===0)
                {
                    prevcount.sec=59
                    prevcount.min--
                }

                else 
                {
                    prevcount.sec--
                }
                return ({...prevcount})
            })
        },1000)
        return ()=>{
            clearTimeout(id)
        }
    },[setCount])
    let u='0'+count.min 
    let y='0'+count.sec 
    let mins=u.slice(-2)
    let seconds=y.slice(-2)
    rd=(count.min*60+count.sec < ob1)
    let w=((count.min)*60+count.sec)*(100/f.current)
    return(
        <div className="timer">
            Time Left: <span style={{color:rd?"red":"black"}}>{mins}:{seconds}</span>
        <div className="bar">
            <div className="progress" style={{width:w,backgroundColor:rd?"red":"rgb(31,204,0)"}}>
            </div>
        </div>
        </div>
    )
}