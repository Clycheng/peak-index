var Search = document.getElementsByClassName("search")[0];
Search.onfocus = function(){
    this.placeholder = "";   
}
Search.onblur = function(){
    this.placeholder = "搜索"; 
}