import React from 'react'

export default function Answer({answerList,len,correctAnswer,incorrectAnswer,finishAttempt})
{
    let arr=answerList.map((item)=>{
        return(
            <tr key={item.id+1} className="listc">
                <td>{item.id+1}</td>
                <td>{item.re}</td>
                <td>{item.correct==="Correct"?4:-1}</td>
            </tr> 
        )
    })
    let h=arr.length
    let k 
    while(arr.length<len)
    {
        k=<tr key={h+1} className="listc">
            <td>{h+1}</td>
            <td>No Response</td>
            <td>0</td>
        </tr>
        arr.push(k)
        h=h+1 
    }
    let k1=(correctAnswer+incorrectAnswer!==len && !(finishAttempt))
    return(
        <div className="Answer">
            <div className="outertable">
                <table className="table" style={{height:len===10?"530px":"300px"}}>
                    <thead>
                        <tr className="listc">
                            <th>SI No</th>
                            <th>Response</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
            </div>
            {k1 && <div style={{color:"rgb(231,4,4)",marginBottom:"3px",marginLeft:"2%"}}>Time is Up!!</div>}
            <div className="rs">You Answered {correctAnswer}/{len} questions correctly.</div>
            <div className="rs">Marks Scored : {correctAnswer*4-incorrectAnswer}/{len*4}</div>
        </div>
    )
}