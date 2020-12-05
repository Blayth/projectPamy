document.addEventListener('DOMContentLoaded', function() {

    let open = document.getElementsByClassName("my_box_button");
    let close = document.getElementsByClassName("btn btn-outline-secondary");
    let article = document.getElementsByClassName("article-home-news");


    function find_element(element1, element2, number){
        let len = 0;
        for (let i = 0; i < number.length; i++) {
            len++
            console.log(len)
        }

        for(i = 0; i < element1.length; i++){
            (function(index){
                element1[index].addEventListener("click", function(){    
                document.getElementById("article-home-news").style = "display: block";
                })
            })(i);
        }

        for(i = 0; i < element2.length; i++){
            (function(index){
                element2[index].addEventListener("click", function(){    
                document.getElementById("article-home-news").style = "display: none";
                })
            })(i);
        }
        
    }

    find_element(open, close, open)
})
