let output = [];
let obj = [];

const arr = [{
  Name: 'Ravindra',
  Sports: ['Chess', 'Cricket'],
},
{
  Name: 'Ravi',
  Sports: ['Cricket', 'Football'],
},
{
  Name: 'Smit',
  Sports: ['Chess', 'Cricket','Tennis'],
},
{
  Name: 'Keval',
  Sports: ['Cricket'],
},
{
  Name: 'Rishabh',
  Sports: ['TableTennis', 'Football'],
}];

for (i = 0; i < arr.length; i++) {

  const len = arr[i].Sports.length;

  for (j = 0; j < len; j++) {
      let sport = arr[i].Sports[j];

      if (!(sport in obj)) {
          obj[sport] = [];
          obj[sport].push(arr[i].Name);

      }
      else {
          obj[sport].push(arr[i].Name);
      }
  }

}

for (let key in obj) {
  let outObj = {};
  outObj[key] = obj[key];
  output.push(outObj);
}

console.log(output);