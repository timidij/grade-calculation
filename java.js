
document.getElementById("namform")



const hi = document.getElementById("dis")

document.addEventListener("submit", freeky)
function freeky (e){
    e.preventDefault()
 console.log(e)
   let fName= document.getElementById("firstName")
    let lName = document.getElementById("lastName")
    const matNo = document.getElementById("matNo")
    const test1 = document.getElementById("test1")
    const test2 = document.getElementById("test2")
    const exam = document.getElementById("exam")
    let grade = ''
    let totalscore = parseInt(test1.value) + parseInt(test2.value) + parseInt(exam.value)

    if(totalscore >70){
        grade = "A"
    }else if (totalscore > 60){
        grade= "B"
    }else if(totalscore>50) {
        grade = "C"
    }else if(totalscore> 45){
        grade = "D"

    }else{
        grade = "F"
    }
    let congratulation = ""
    if (totalscore >45){
        congratulation = "CONGRATULATIONS you have passed "
    }
    else{
        congratulation  = "UNFORTUNATELY you have failed"
    }

    test1.addEventListener("keydown", very())
    function very(){
        if( test1.value >30)
        alert("hello try again");
    }

    // console.log(fName.value)
    hi.innerHTML=`HELLO! ${fName.value} ${lName.value} with ${matNo.value}
    your total score is ${totalscore}, your grade is ${grade} ${congratulation}
    `
    return false
}






