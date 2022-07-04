// think to make a pizza  => 2 secs
// get up and by grociries  => 6 secs
// wash hands before making dough => 3 secs
// make the dough => 5 secs
// put dough in the oven => 2 secs
// wait for the pizza to be ready => 7 secs
// take the pizza out of the oven => 2 secs
// put the pizza in the box => 1 secs
// enjoy your pizza => 2 secs


// setTimeout( thinkToMakePizza, 2000 );
// setTimeout( getUpAndByGrociries, 8000 );
// setTimeout( washHandsBeforeMakingDough, 11000 );

function thinkToMakePizza(){
    console.log("think to make a pizza");
    setTimeout(getUpAndByGrociries, 6000);
}
setTimeout( thinkToMakePizza, 2000 );

function getUpAndByGrociries(){
    console.log("get up and by grociries");
    setTimeout(washHandsBeforeMakingDough, 3000);
}

function washHandsBeforeMakingDough(){
    console.log("wash hands before making dough");
}

function makeDough(){
    console.log("make the dough");
}

function putDoughInTheOven(){
    console.log("put dough in the oven");
}

function waitForPizzaToBeReady(){
    console.log("wait for the pizza to be ready");
}

function takePizzaOutOfOven(){
    console.log("take the pizza out of the oven");
}

function putPizzaInTheBox(){
    console.log("put the pizza in the box");
}







// setTimeout(function(){
//     console.log("think to make a pizza");
// }), 2000;

// only use callbacks
setTimeout(()=>{console.log("think to make a pizza")
 setTimeout(()=>{console.log("get up and by grociries")
    setTimeout(()=>{console.log("wash hands before making dough"), 3000}
 }, 6000);

}, 2000)