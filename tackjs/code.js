

    
let user=[];
add()
let choice=prompt("do you want to delete user yes or no")
if(choice=="yes"){
    deleteuser()
}
function add(){
   let n=prompt("how many user you want to add")
   for(var i=0;i< n;i++){
       user.push({
        Name:prompt("enter your name"),
        id:prompt("enter your id"),
        balance:Number(prompt("enter your balance"))
    })
    }
  return user

}
function deleteuser(){
    let id=prompt("enter your id")
    for(var i=0;i<user.length;i++){
        if(id==user[i].id){
            user.splice(i,1)
        }
    }
}

function us(){
    let id=prompt("enter your id")
    if(user.find(x=>x.id==id)){
      let amount=Number(prompt("enter your amount"))
      if( user.balance < amount){
        alert("your balance is low")
      }
      else{
        user.balance -= amount
      }
    }
}
console.log(user)
    us()

console.log(user)