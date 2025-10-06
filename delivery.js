function submitForm(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var address = document.getElementById('address').value;
    var town = document.getElementById('town').value;
    var state = document.getElementById('state').value;
    var postcode = document.getElementById('postcode').value;
    var phone = document.getElementById('phone').value;

    if(fname.trim()===""||lname.trim()===""||address.trim()===""||town.trim()===""||state.trim()===""||postcode.trim()===""||phone.trim()===""){
        alert("Please fill in all details.");
        return false;
    }else{
        alert("Details submitted!");
        return true;
    }
}