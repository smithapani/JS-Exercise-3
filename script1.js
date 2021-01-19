let email = "smit@gmail.com";

function authEmail(email,start,end){
  let split = email.split("@");

  let split1 = split[0];

  let arr = split1.split("");

  for(let i=start;i<end;i++){
    arr[i] = "*"; 
  }

  let split2 = split[1];

  return arr.join("") + "@" + split2;
}

console.log(authEmail(email,1,3));