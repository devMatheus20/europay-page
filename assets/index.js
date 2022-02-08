const menuList = document.getElementById("nav-list")
menuList.style.maxHeight = "0px"

function showList (){
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px"
    } else {
        menuList.style.maxHeight ="0px"
    }
}