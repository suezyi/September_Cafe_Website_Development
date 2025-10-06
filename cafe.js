var scroll = window.pageYOffset;
window.onscroll = function(){
    var nowscroll = window.pageYOffset;
        if (scroll > nowscroll){
            document.getElementById("nav-cell").style.top = "0";
        }
        else{
            document.getElementById("nav-cell").style.top = "-150px"
        }
        scroll = nowscroll;
}
