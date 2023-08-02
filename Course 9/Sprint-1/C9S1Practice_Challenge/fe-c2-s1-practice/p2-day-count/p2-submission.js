let year = 2000;
let month = 2;
let days;

//Write your switch case logic here to compute days in month
switch(month)
{
    case 1,3,5,7,8,12 :
        days = 31;
        break;
    case 4,6,9,11 :
        days = 30;
        break;
    case 2 :
        if(year % 4 == 0)        
        {
            days = 29; 
        }
        else
        {
            days = 28;
        }
        break;
    default :
        days = "Invalid Month!"     
}
console.log(`No. of days ${days}`);