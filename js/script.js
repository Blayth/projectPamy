document.addEventListener('DOMContentLoaded', function() {

    let open = document.getElementById("but-1");
    let close = document.getElementsByClassName("btn btn-outline-secondary");
    console.log(close)
    
    open.addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("article-home-news").style = "display: block"
    })

    for(var i = 0; i < close.length; i++) {
        (function(index) {
            close[index].addEventListener("click", function() {
                document.getElementById("article-home-news").style = "display: none"
           })
        })(i);
    }

});