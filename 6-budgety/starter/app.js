 /*immediately invoked function expression 
 that will return an object --> an anonymous function 
 wrapped in parentheses */ 

 /* JS runtime will hit the line where 
 the budgetController variable is declared
 and it will execute the anonymous function

 The anonymous function has a () operator, which
 causes it to be immediately called/ invoked

 the IIFE will declare any varibales and execute any functions
 within the anonymous function, and then it will return
 an object that will execute another function, which has
 access to the private function and variables within the 
 budgetController, because of the power of closures

*/


// Budget Controller

 var budgetController = (function(){
 	// some code


 })();


// UI Controller

 var UIController = (function() {
 	//some code


 })();


// Global App controller

 var controller = (function(budgetCtrl, UICtrl) {

 	var ctrlAddItem = function(){
 		// 1. Get the field input data
 		// 2. Add the item to the budget controller
 		// 3. Add the new item to the UI
 		// 4. Calculate the budget
 		// 5. Display the budget on the UI
 		console.log('It works.')
 	}

 	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

 	document.addEventListener('keypress', function(event){

 		if (event.keyCode === 13 || event.which === 13){

 			ctrlAddItem();
 		}

 	});


 })(budgetController, UIController);

