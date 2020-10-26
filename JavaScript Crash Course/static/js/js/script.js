//challenge; your age in days
function AgeInDays()
{
    var birthYear = prompt('What year were you born?');
    var ageInDayss = (2018 - birthYear) * 365
    var h1 = document.createElement('h1');
    var textAnser = document.createTextNode('You are' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDayss');
    h1.appendChild(textAnser);
    document.getElementById('flex-box-result').appendChild(h1);
}

function Reset()
{
    document.getElementById('ageInDayss').remove();
}