let n = 31052022;
// Write solution code here to find the lucky number
var sum = 0;
do
{
    if(sum>=10)
    {
        n = sum;
    }
    sum = 0;
    while(n!=0)
    {
        sum = sum + (n%10);         //sum = 21    sum=3
        n = parseInt(n/10);
    }
}
while(sum>=10);
console.log(`Your Lucky Number is ${sum}`);
