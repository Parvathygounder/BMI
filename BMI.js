
function bmi()
{
    var w=parseInt(prompt("Your Weight"))
    var h=parseInt(prompt("Your Height"))
    var bmi=(w/((h/100) **2))
    document.write("your BMI is:"+bmi)


if(bmi<18.5)
{
    alert("Thinness")
}
else if((bmi>18.5)&&(bmi<=25))
{
    alert("Normal")
}
else if((bmi>25)&&(bmi<=30))
    {
        alert("Over Weight")
    }
    else if((bmi>30) && (bmi<=35))
    {
        alert("Obese")
    }
}
bmi();
