let input;// = prompt('What would you like to do?');
// input = input.toLowerCase();
// if ((input != "new") || (input != "list") || (input != "delete")) {invalidOption();}
letsStart();

//optional to add dummy data inside todos
const todos = [];

//start with a while loop that checks for quit input
while(input != "quit") {
    //if else conditions
    if (input == "new") {addNewActivity();}
    	else if (input == "list") {showList();}
    		else if (input == "delete") {deleteActivity();}
    			else {alertInvalidOption(); letsStart();}			
}



function letsStart() {
	input = prompt('What would you like to do?');
	var x = validateInput();
	if (x == false) {letsStart();}
}

function validateInput() {
	if ((input == null) || (input == "") || (input == undefined)) {alertInvalidOption(); return false;}
		else {input = input.toLowerCase(); return true;}
}

function alertInvalidOption() {
	window.alert('Invalid Option. Try again.');
}

function addNewActivity() {
	input = prompt('Enter your new activity: ');
	var x = validateInput();
	if (x == false) {addNewActivity();}
		else {
			todos.push(input); addAnotherActivity(); 
			if (input == "y") {addNewActivity();}
				else {letsStart();}
		}
}

function addAnotherActivity() {
	input = prompt('Would you like to add another one? (Y/N)');
	var x = validateInput();
	if (x == false) {addAnotherActivity();}
}

function showList() {
	var empty = validateList();
	if (empty != true) {var strTodos = todos.toString(); alert('This is your list ToDo: ' + strTodos);}
	letsStart();
}

function validateList() {
	if (todos.length == 0) {alert('Your list is empty. Add some activities, selecting "new".'); return true;}
}

function deleteActivity() {
	var empty = validateList();
	if (empty != true) {input = prompt('Which activity would you like to delete?');}
	letsStart();
}

console.log('OK QUIT THE APP');