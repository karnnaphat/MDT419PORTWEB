let value = document.getElementById('text1');
let Post = document.getElementById('topic1');
var i = 1;

function postFunction()
{
    let text =  value.value;
    if(i == 1 && text != '')
    {
        document.getElementById('topic1').innerHTML = text;
        i++;
    }
    else if(i == 2 && text != '')
    {
        document.getElementById('comment1').innerHTML = text;
        i++;
    }
    else if(i == 3 && text != '')
    {
        document.getElementById('comment2').innerHTML = text;
        i++;
    }
    document.getElementById('text1').value = ''; // ลบข้อความก่อนหน้าใน textarea
}

function clearFunction()
{
    document.getElementById('topic1').innerHTML = ''; // เเทรกข้อความลงในไอดี 
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    document.getElementById('text1').input = '';
    i = 1;
}