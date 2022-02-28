// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//const prompt = require("prompt-sync");
/*function createUser(firstName,lastName) {
    
    let User = {
    firstName:firstName,//for running a test prewritten the objects have to be names just at in the test module
    lastName: lastName,
   
   };
    


return User;


  }*/
/*
 function setAge(firstName,age) {
     let user = {
firstName:"Tim",
lastName:"Horton",
age:50

     }
 return user;
 
    }
*/

/*function incrementAge(user) {
  
user.age++;



return user;

}
*/
/*function fixCar(car) {
    car.needsMaintenance = false;

return car;


}
*/
/*
function addGrades(student,newGrades) {
for (let i = 0; i < newGrades.length; i++) {
    let newGrade = newGrades[i];
    student.grades.push(newGrade);

}

return student;


}
//grades.push(parseInt(newGrades));
*/
/*
function getDataType(object,key) {
return typeof object[key];


}*/
/*
function addTodo(todos,newTodo) {
  //adds the new-todo item to the array
  //returns the array of to-do items                                          
 let newtodo = 
{
title: 'Call mom',
isComplete: false
};
     

 
todos.push(newtodo);

return todos;


}

*/
/*
function addSong(playlist,newSong) {
    
  
playlist.duration = (10);
playlist.songs.push(newSong);


return playlist;



}



*/


function updateReportCard(reportCard,88) {

reportCard.highestGrade.push(99);
 reportCard.lowestGrade.push(65);



return reportcard;
}














// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
