


let firstNum = "";
let secondNum = "";
let operation = "";

function pressToDisplay(num)
{
   const display = document.getElementById("display");

   if (num === "+" || num === "-" || num === "*" || num === "/")
   {
      if (firstNum !== "")
      {
        operation = num;
        display.value = "";
      }
      return;
   }

if (operation === "")
  {
    firstNum += num;
    display.value = firstNum;
  }
  else {
    secondNum += num;
    display.value = secondNum;
  }

}

function clearDisplay()
{
  firstNum = "";
  secondNum = "";
  operation = "";
  document.getElementById("display").value = "";
}



function calculate()
{
  const display = document.getElementById("display");
  let result = 0;

  let num1 = +firstNum;
  let num2 = +secondNum;

  if (operation === "+")
    {
      result = num1 + num2;
    }
  else if (operation === "-")
    {
      result = num1 - num2;
    }
  else if (operation === "*")
    {
      result = num1 * num2;
    }
  else if (operation === "/")
    {
      if (num2 === 0)
      {
        result = "Error";
      }
      else
      {
        result = num1 / num2;
      }
    }
  display.value = result;

  firstNum = result.toString();
  secondNum = "";
  operation = "";
}

















