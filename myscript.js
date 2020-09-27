function add()
{
  var num1=parseInt(document.getElementById('a').value);
  var num2=parseInt(document.getElementById('b').value);
  var result=num1+num2;
  document.getElementById('para').innerHTML="Result :"+result;

}
function sub()
{
  var num1=document.getElementById('a').value
  var num2=document.getElementById('b').value
  var result=(parseInt(num1)-parseInt(num2))
  document.getElementById('para').innerHTML="Result :"+result;
}
function mult()
{
  var num1=document.getElementById('a').value
  var num2=document.getElementById('b').value
  var result=(parseInt(num1) * parseInt(num2))
  document.getElementById('para').innerHTML="Result :"+result;
}
function divi()
{
  var num1=document.getElementById('a').value
  var num2=document.getElementById('b').value
  var result=(parseInt(num1)/parseInt(num2))
  document.getElementById('para').innerHTML="Result :"+result;
}
