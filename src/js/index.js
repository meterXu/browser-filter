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
                                            '<a href="'+url+'"  class="bf-imgIcon" download="'+downloadName+'"></a>' +
                                        '</div>' +
                                        '<p class="bf-description">' +
                                        '您的页面似乎有兼容性问题，点击图标下载最新版Chrome！'+
                                        '</p>' +
                                    '</div>' +
                                 '</div>';
        document.getElementsByTagName('body')[0].appendChild(mongolianLayer);
    }

    function init(options){
        var _options={
            filter:{
                chrome:65
            },
            newVerUrl: 'javascript:;',
            downloadName:''
        };
        _options.filter=options.filter||_options.filter;
        _options.newVerUrl=options.newVerUrl||_options.newVerUrl;
        _options.downloadName=options.downloadName||_options.downloadName;
        var browerInfo = getBrowerInfo();
        if(_options.filter[browerInfo.browser]){
            if(browerInfo.ver){
                var verByInt = parseInt(browerInfo.ver.substring(0,browerInfo.ver.indexOf('.')));
                if(!isNaN(verByInt) && verByInt < _options.filter[browerInfo.browser]){
                    createMongolianLayer(_options.newVerUrl,_options.downloadName);
                }
            }
        }else{
            createMongolianLayer(_options.newVerUrl,_options.downloadName);
        }
    }
    return init(options);
}
