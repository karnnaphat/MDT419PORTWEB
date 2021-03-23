window.onload = pageLoad;
function pageLoad(){
    var registerBT = document.getElementById("myForm");
    registerBT.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var pw = document.forms['myForm']['password'].value;
    var retrypw = document.forms['myForm']['repassword'].value;
    if (pw != retrypw)
    {
       // alert("รหัสไม่ตรงกัน");
       var error = document.getElementById("errormsg"); 
       error.innerHTML =  "รหัสไม่ตรงกัน";
       return false; // คืนค่าว่าผิด
    }
    else 
    {
        alert ("รหัสถูกต้อง");
    }
}