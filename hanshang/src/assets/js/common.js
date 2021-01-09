
  // 定义公共的属性和方法
exports.install=function(Vue,options){
  Vue.prototype.scroll=function(){
    window.onscroll=function(){
      var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      return scrollTop;
    
      }
     
      console.log(scrollTop)
    }
 }
   