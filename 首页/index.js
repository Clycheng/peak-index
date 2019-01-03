// 搜索框的焦点事件
var Search = document.getElementsByClassName("search")[0];

Search.onfocus = function(){
    this.placeholder = "";   
}
Search.onblur = function(){
    this.placeholder = "搜索"; 
}
// 选项卡
var tabLi = document.getElementsByClassName("tab-head")[0].getElementsByTagName("li");
var tabCont = document.getElementsByClassName("selected")[0].getElementsByTagName("div");
for (let i = 0; i <tabLi.length; i ++){
    tabLi[i].onclick =function(){
        for( let z = 0; z <tabLi.length; z ++){
            for( let h = 0; h<tabLi.length; h ++){
                tabLi[h].classList.remove("active");
                tabCont[h].classList.remove("select");
            }
         
        }
        this.classList.add("active");
        tabCont[i].classList.add("select");
    }
}