
window.onload = function(){

    let header = document.querySelector("#website-header")
    let headerAbstract = document.querySelector("#project-abstract")
    let headerCourseTitle = document.querySelector("#header-course-title")

    let black = "rgba(0,0,0,1)"
    let blackTransparent = "rgba(0,0,0,0)"

    window.addEventListener('scroll', (event) => {
        console.log(window.pageYOffset);


        if (window.pageYOffset > 5){
        header.style.height = "10vh"
        console.log("greater than 5")
        headerAbstract.style.color = blackTransparent;
        headerCourseTitle.style.color = blackTransparent;
        setTimeout(displayNone (headerAbstract), 1000)
        setTimeout(displayNone(headerCourseTitle),1000)
        } else {
        console.log("smoller than 5")
        displayBlock(headerAbstract);
        header.style.height = "50vh"
       // headerAbstract.removeClass("displayNone");
        headerAbstract.style.color = black;
        headerCourseTitle.style.color = black;
     
        }

        function displayNone(obj){
            obj.classList.add("displayNone")
        }

        function displayBlock(obj){
            obj.classList.remove("displayNone");
        }
    });

}

