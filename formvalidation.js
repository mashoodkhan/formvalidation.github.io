const fname   = document.getElementById('fname');
const lname   = document.getElementById('lname');
const uname   = document.getElementById('uname');
const email   = document.getElementById('email');
const contact = document.getElementById('contact');
const pass    = document.getElementById('pass');
const submit  = document.getElementById('submit');
const myform  = document.getElementById('myform');

submit.addEventListener('click',validate);

function validate(e){
e.preventDefault();
	if (fname.value  === '' || lname.value === '' || email.value === '' ||
	   contact.value === '' || pass.value === '') {
	      var errorresult = document.getElementById('errorResult');
	 	   	var gError = '*All Fields required*';
	      errorresult.innerHTML = gError;
	     
  }
  else if(uname.value.length < 4){
  	    var unameResult = document.getElementById('unameerror');
  	    unameResult.innerHTML = 'user name must contain more than 4 charecters';
  }
   else if(contact.value.length < 10 || contact.value.length > 10 ){
  	    var contactResult = document.getElementById('contacterror');
  	    contactResult.innerHTML = 'Mobile number must be of only 10 digits';
  }
  
  else if(pass.value.length < 6){
        var passResult = document.getElementById('passerror');
        passResult.innerHTML = 'Password must contain atleast 6 charecters';
  }

  else
  {
  	var successresult = document.getElementById('successResult');
  	success = `${uname.value} details has been submitted Successfully`;
  	if (confirm("Submit Details?")) {
  		successresult.innerHTML = success;
  	}
  	myform.reset();
  }
  
   
  
}

