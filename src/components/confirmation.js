import React from 'react'

export default function Confirm({name,setStart,setConfirm,setCompleted})
{
return(
    <div className="confirmOuter">
        <div className="msg">Are you Sure?</div>
        <div className="promptbox">
            <div className="prompt" onClick={
                ()=>{
                    if(name.current==="attempt")
                    {
                        setCompleted(true)
                    }
                    else if(name.current==="quit")
                    {
                        setStart(false)
                    }
                }}>Yes</div>
            <div className="prompt" onClick={()=>{
                setConfirm(false)
            }}>No</div>
        </div>
    </div>
)
} 