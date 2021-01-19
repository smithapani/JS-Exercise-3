let mail = "smit@gmail.co.au";

function validateEmail(mail){      
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(mail); 
} 

console.log(validateEmail(mail));