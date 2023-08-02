// Write your fibonacci series solution code here
function fibonacci(number)
{
    if(number==1 || number==2)
    {
        return number-1;
    }
    else
    {
        return (fibonacci(number-1) + fibonacci(number-2));
    }
}
for(let i = 1; i <= 10; i++)
{
    console.log(fibonacci(i));
}
