
// function looping(startNum , endNum , BreakNum , ContNum){
//     if(startNum===undefined || endNum===undefined || BreakNum===undefined || ContNum===undefined ){
//         alert("plise enter yor num");
//     }
//    else
//    {
//     for(var i= startNum;i <= endNum;i++){
//         if(i===ContNum)
//         {
//           continue;
//         } 
//          else if (i===BreakNum)
//         {
//             break;
//         }
//         console.log(i);
//    }
//    }
// }
// //   looping(5, 20);
// //  looping(1,20,15,10);
// var courses=["html","nod","opp","C#"];
// console.log(courses)
// var input = prompt("enter your name courses")
// if(courses.includes(input))
// {
//     console.log(input);
// }
// else{
//     console.log("courses not find ");
// courses.push(input);
//     console.log(courses);

// }
var fname = "ahmed";
var person = {
    fname:"ali",
    display:function(){
        return function(){
            console.log(this.fname);
            
        }
    }
}
person.display()