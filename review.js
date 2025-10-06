    //check if the form has been submitted by looking query parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('submitted')){
        document.getElementById('formContainer').classList.add('submitted');
    }

  
    
    function showReviewMessage(){
        var t = document.forms["feedbackForm"]["title"].value;
        var u = document.forms["feedbackForm"]["username"].value;
        var i = document.forms["feedbackForm"]["image"].value;
        var r = document.forms["feedbackForm"]["rating"].value;
        var re = document.forms["feedbackForm"]["review"].value;

        if (t == false) {
                alert("Title must be filled!"); 
            }
        else if (u == false) {
            alert("Username must be filled!"); 
        }

        else if (i == false) {
            alert("Image must be uplaod!"); 
        }

        else if (r == false) {
            alert("Rating must be choose!"); 
        }
        
        else if (re == false) {
            alert("Review must be filled!"); 
        }

        else{
            alert("Thanks for reviewing!");
        }
    }
        