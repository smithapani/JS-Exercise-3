let str = "<html> <body> smit <div> <i> hapani <body> ";

function removeTags(str) {
  if ((str == null) || (str == '')){
    return false;
  }
    
  else{
    str = str.toString();
  }
  
  return str.replace( /(<([^>]+)>)/ig, '');
}

console.log(removeTags(str));
