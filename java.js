  const header = document.querySelector("#dis")
function freeky(e){
    console.log(e)
    const fname = document.querySelector("#firstName").value
    const lname =  document.querySelector("#lastName").value
    const matno = document.querySelector("#matNo").value
    const test1 = document.querySelector("#test1").value
    const test2 = document.querySelector("#test2").value
    const exam = document.querySelector("#exam").value
 let totalscore = parseInt(test1)+parseInt(test2)+parseInt(exam)
    let grade = ""
    if (totalscore >69){
        grade ="A"

    }
    else if(totalscore >59){
        grade ="B"
    }
    else if(totalscore >49){
        grade="C"
    }
    else if (totalscore > 44){
        grade = "D"

    }else if (totalscore >39){
        grade ="E"
    }
    else{
        grade ="F"
    }
    //logic for message to be displayed
    mess = ""
        if (totalscore> 39){
        mess=" CONGRATULATIONS, Your have passed"
    }else{
        mess= "UNFORTUNATELY  you have failed"
    }
    const str = `HELLO! ${fname} ${lname} with ${matno} your total score is ${totalscore}, your grade is ${grade} 
    ${mess}
    `
  
    
    header.innerHTML = str
   

}
document.addEventListener("DOMContentLoaded",()=>{


    const sub = document.querySelector("#nameform")
    sub.addEventListener("submit", freeky)
})
