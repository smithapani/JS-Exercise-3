let r = +prompt("rows : ");
let c = +prompt("column : ");

document.write("<table border='1'>");
for(let i=1;i<=r;i++)
{
  document.write("<tr>");
  for(let j=1;j<=c;j++)
  {
  	document.write("<td>" + "Row:"+ r + "Column:" + c + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
