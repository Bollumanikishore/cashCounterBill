var bill = document.querySelector("#bill");
var paid = document.querySelector("#paid");
var button = document.querySelector("#button");
var message = document.querySelector("#mesg");
// var one = document.querySelector("#one");
// var five = document.querySelector("#five");
// var ten = document.querySelector("#ten");
// var twenty = document.querySelector("#twenty");
// var hundred = document.querySelector("#hundred");
// var fiveHundred = document.querySelector("#fivehundred");
// var twoThousand = document.querySelector("#twothousand");
var ex = document.querySelectorAll("#one");
var next;
var list1 =[2000,500,100,20,10,5,1];
function onclickHandler(){
    var billAmount = bill.value;
    var paidAmt = paid.value;
    sol = paidAmt - billAmount;
    if(sol>0){
    finalSol(sol);
    }
    else{
        console.log("Due!!");
        message.innerHTML="Due from customer, Paid amount is incorrect!!";
    }
    
}
    function finalSol(sol)
    {  
    for(var i=0;i<list1.length;i++)
    {
        const notes = Math.floor(sol/list1[i])
        if(notes){
        sol = sol%list1[i];
        ex[i].innerHTML = notes;
        console.log(ex[i].innerText);
        }
    }
    // twoThousand.innerText = Math.floor(sol/2000);
    // sol = sol%2000;
    // fiveHundred.innerText = Math.floor(sol/500);
    // sol = sol%500;
    // hundred.innerText = Math.floor(sol/100);
    // sol = sol%100;
    // twenty.innerText = Math.floor(sol/20);
    // sol = sol%20;
    // ten.innerText = Math.floor(sol/10);
    // sol = sol%10;
    // five.innerText = Math.floor(sol/5);
    // sol = sol%5;
    // one.innerText = Math.floor(sol/1);
    // sol = sol%1;
}
button.addEventListener("click",onclickHandler); 