function fn1() {
    document.getElementsByTagName('body')[0].innerHTML='<p>hello world</p>'
}
window.onload=function(){
    fn1()
}
