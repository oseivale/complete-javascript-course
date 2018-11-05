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
 	
 	var DOMstrings = {
 		inputType: '.add__type',
 		inputDescription: '.add__description',
 		inputValue: '.add__value',
 		inputBtn: '.add__btn'
 	};

 	return {
 		getInput: function(){

 			return {
 			type: document.querySelector(DOMstrings.inputType).value, //will be either 'inc' or 'exp'
 			description: document.querySelector(DOMstrings.inputDescription).value,
 			value: document.querySelector(DOMstrings.inputValue).value

 			}
 			
 		},

 		getDOMstrings: function(){
 			return DOMstrings
 		}
 	};


 })();


// Global App controller

 var controller = (function(budgetCtrl, UICtrl) {

 //setting up all event listeners
	 	var setupEventListeners = function(){

	 		var DOM = UICtrl.getDOMstrings();

	 		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

	 		document.addEventListener('keypress', function(event){

		 		if (event.keyCode === 13 || event.which === 13){

		 			ctrlAddItem();
		 		}
	 	});
 	}

 	
 	var ctrlAddItem = function(){
 		// 1. Get the field input data
 		var input = UICtrl.getInput();
 		// 2. Add the item to the budget controller
 		// 3. Add the new item to the UI
 		// 4. Calculate the budget
 		// 5. Display the budget on the UI
 	};

 	return {
 		init: function() {
 			console.log('Application has started.');
 			setupEventListeners();
 		}
 	};

 })(budgetController, UIController);

 controller.init();

