const urlParams = new URLSearchParams(window.location.search);
            if(urlParams.has('submitted')){
                document.getElementById('formContainer').classList.add('submitted');
            }