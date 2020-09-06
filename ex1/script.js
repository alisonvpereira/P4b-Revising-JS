function incrementValue()
{
    var number = document.getElementById('number')
    var value = parseInt(number.value, 10);
    value++;
    number.value = value;
    number.innerHTML = value.toString() ;
}

function decrementValue()
{
    var number = document.getElementById('number')
    var value = parseInt(number.value, 10);
    value--;
    number.value = value;
    number.innerHTML = value.toString() ;
}