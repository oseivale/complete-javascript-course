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
 	
// Function constructors to create new instance of each income an expense

 	var Expense = function(id, description, value){
 		this.id = id;
 		this.description = description;
 		this.value = value;
 	}

 	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	}

// Creating a data structure to store all our income and expenses data

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// Create new ID
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

			} else {
				ID = 0;
			}

			//Create new item based on 'inc' or 'exp' type
			if(type === 'exp') {

				newItem = new Expense(ID, des, val);

			} else if (type === 'inc') {
				newItem = new Income(ID, des, val);
			}

			// Push it into our data structure
			data.allItems[type].push(newItem);

			// Return the new element
			return newItem;
		}
	};


 })();


// UI Controller

 var UIController = (function() {
 	
 	var DOMstrings = {
 		inputType: '.add__type',
 		inputDescription: '.add__description',
 		inputValue: '.add__value',
 		inputBtn: '.add__btn',
 		incomeContainer: '.income__list',
 		expensesContainer: '.expenses__list'
 	};

 	return {
 		getInput: function(){

 			return {
 			type: document.querySelector(DOMstrings.inputType).value, //will be either 'inc' or 'exp'
 			description: document.querySelector(DOMstrings.inputDescription).value,
 			value: document.querySelector(DOMstrings.inputValue).value

 			}
 			
 		},

 		addListItem: function(obj, type) {
 			var html, newHTML, element;
 			// Create HTML string with some placeholder text
 			if (type === 'inc') {
 				element = DOMstrings.incomeContainer;
 				html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

 			} else if (type === 'exp') {
 				element = DOMstrings.expensesContainer;
 				html =  '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
 			
 			}
 			
 			// Replace the placeholder text with some data
 			newHTML = html.replace('%id%', obj.id);
 			newHTML = newHTML.replace('%description%', obj.description);
 			newHTML = newHTML.replace('%value%', obj.value);

 			// Insert the HTML into the DOM
 			document.querySelector(element).insertAdjacentHTML('beforeend', newhtml);
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
 		var input, newItem;

 		// 1. Get the field input data
 		 input = UICtrl.getInput();
 		// 2. Add the item to the budget controller
 		 newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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

