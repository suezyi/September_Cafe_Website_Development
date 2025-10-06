function submitForm(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var time = document.getElementById('time').value;
    var phone = document.getElementById('phone').value;

    if(fname.trim()===""||lname.trim()===""||time.trim()===""||phone.trim()===""){
        alert("Please fill in all details.");
        return false;
    }else{
        alert("Details submitted!");
    }
}