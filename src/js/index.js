function browerFilter(options) {
    function getBrowerInfo(){
        var sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys = {browser: 'ie', ver: s[1]}
            : (s = ua.match(/msie ([\d\.]+)/)) ? sys = {browser: 'ie', ver: s[1]}
            : (s = ua.match(/edge\/([\d\.]+)/)) ? sys = {browser: 'edge', ver: s[1]}
                : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys = {browser: 'firefox', ver: s[1]}
                    : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys = {browser: 'opera', ver: s[1]}
                        : (s = ua.match(/chrome\/([\d\.]+)/)) ? sys = {browser: 'chrome', ver: s[1]}
                            : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys = {browser: 'safari', ver: s[1]} : 0
        return sys;
    }
    function createMongolianLayer(url,downloadName){
        var mongolianLayer = document.createElement('div');
        mongolianLayer.className='bf-monlayer';
        mongolianLayer.innerHTML='<div class="bf-container">' +
                                    '<div class="bf-dialog">' +
                                        '<div class="bf-imgContainer">' +
                                            '<a href="'+url+'" target="_blank" class="bf-imgIcon" download="'+downloadName+'"></a>' +
                                        '</div>' +
                                        '<p class="bf-description">' +
                                        '您的页面似乎有兼容性问题'+'<br/>'+'点击图标下载最新浏览器'+
                                        '</p>' +
                                    '</div>' +
                                 '</div>';
        document.getElementsByTagName('body')[0].appendChild(mongolianLayer);
    }

    function init(options){
        var _options={
            filter:{
                ie:8,
                chrome:65
            },
            newVerUrl: 'javascript:;',
            downloadName:''
        };
        if(options&&options.filter&&options.newVerUrl&&options.downloadName){
            _options=options;
        }else{
            console.warn('参数错误',options);
        }
        var browerInfo = getBrowerInfo();
        for(var key in _options.filter){
            if(key==browerInfo.browser){
                if(browerInfo.ver){
                    var verByInt = parseInt(browerInfo.ver.substring(0,browerInfo.ver.indexOf('.')));
                    if(!isNaN(verByInt) && verByInt < _options.filter[key]){
                        createMongolianLayer(_options.newVerUrl,_options.downloadName);
                        return false;
                    }
                }
            }
        }

    }
    return init(options);
}
