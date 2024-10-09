let loanAmount = document.getElementById("amount");
let interestRate = document.getElementById("interest");
let loanDuration = document.getElementById("loanTenure");
let submit = document.getElementById("calculate");


submit.addEventListener('click',(e)=>{
    e.preventDefault();
    calculateEMI();
})

function calculateEMI(){
    //first calculate total number of month in loan tenure of salected year
    let isYear = document.getElementById("year").Checked;
    let isMonth = document.getElementById("month").Checked;

    let noOfMonths = 0;
    if(isYear=="" && isMonth==""){
        alert("pleasse salect loan tenure type --> month or year");

    }else{
        if(isYear==true){
            noOfMonths=loanDuration.value * 12 ;
        }else{
            noOfMonths=loanDuration.value;
        }
        let r = parseFloat(interestRate.value)/12/100;
        let p = loanAmount.value;
        let n = noOfMonths;
        //formula EMI = (p * r * (1 + r)~n) / ((1 + r)~n -1)
        let EMI = (p*r* Math.pow((1+r),n)) / (Math.pow((1+r),n)-1);
        let totalInterest = (EMI*n) - p;
        let totalPayment = totalInterest + parseFloat(p);
        document.getElementById("emi").innerText = "Rs" + Math.round(EMI);
        document.getElementById("totalInterest").innerText= "Rs" + Math.round(totalInterest);
        document.getElementById("totalPayment").innerText = "Rs" + Math.round(totalPayment);
        

    }
}