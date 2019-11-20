function fn1() {
    let xx ='hello world'
    document.getElementsByTagName('body')[0].innerHTML='<p>hello world</p>'
}
window.onload=function(){
    fn1()
}
