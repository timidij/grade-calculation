
// document.getElementById("namform")



const hi = document.getElementById("dis")

// document.addEventListener("submit",freeky)



function freeky (e){
    e.preventDefault()
 
   let fName= document.querySelector("#firstName")
    let lName = document.querySelector("#lastName")
    const matNo = document.querySelector("#matNo")
    const test1 = document.querySelector("#test1").value
    const test2 = document.querySelector("#test2")
    const exam = document.querySelector("#exam")
    let grade = ''
    let totalscore = parseInt(test1) + parseInt(test2.value) + parseInt(exam.value)

    if(totalscore >=70){
        grade = "A"
    }else if (totalscore > 60){
        grade= "B"
    }else if(totalscore>=50) {
        grade = "C"
    }else if(totalscore>= 45){
        grade = "D"

    } else if(totalscore>=40){
        grade = "E"
    }
    else{
        grade = "F"
    }
    let congratulation = ""
    if (totalscore >45){
        congratulation = "CONGRATULATIONS you have passed "
    }
    else{
        congratulation  = "UNFORTUNATELY you have failed"
    }



    // console.log(fName.value)
    hi.innerHTML=`HELLO! ${fName.value} ${lName.value} with ${matNo.value}
    your total score is ${totalscore}, your grade is ${grade} ${congratulation}
    `
    
}


// const btn = document.querySelector("#sub")
// btn.addEventListener("click",freeky)
const btn2 = document.querySelector("#nameform")
btn2.addEventListener("submit", freeky)
