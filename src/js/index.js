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
    function createMongolianLayer(){
        var mongolianLayer = document.createElement('div');
        var dialog = document.createElement('div');
        dialog.className='bf-dialog';
        mongolianLayer.appendChild(dialog);
        mongolianLayer.className='bf-monlayer';
        document.getElementsByTagName('body')[0].appendChild(mongolianLayer);
    }

    function init(options){
        var browerInfo = getBrowerInfo();
        for(var key in options){
            if(key==browerInfo.browser){
                if(browerInfo.ver){
                    var verByInt = parseInt(browerInfo.ver.substring(0,browerInfo.ver.indexOf('.')));
                    if(!isNaN(verByInt)&&verByInt<options[key].min){
                        createMongolianLayer();
                        return false;
                    }
                }
            }
        }

    }
    return init(options);
}
