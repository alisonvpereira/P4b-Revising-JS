function incrementValue()
{
    var number = document.getElementById('number')
    var value = parseInt(number.value, 10);
    // if NaN, set to 0, else, keep the current value
    value = isNaN(value) ? 0 : value;
    value++;
    number.value = value;
    number.innerHTML = value.toString() ;
}

function decreaseValue()
{
    var number = document.getElementById('number')
    var value = parseInt(number.value, 10);
    // if NaN, set to 0, else, keep the current value
    value = isNaN(value) ? 0 : value;
    value--;
    number.value = value;
    number.innerHTML = value.toString() ;
}