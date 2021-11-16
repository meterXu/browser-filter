import './assets/index.css';

function getBrowserInfo(){
    let sys = {};
    let ua = navigator.userAgent.toLowerCase();
    let s;
    (s = ua.match(/rv:([\d\\.]+)\) like gecko/)) ? sys = {browser: 'ie', ver: s[1]}
        : (s = ua.match(/msie ([\d\\.]+)/)) ? sys = {browser: 'ie', ver: s[1]}
            : (s = ua.match(/edge\/([\d\\.]+)/)) ? sys = {browser: 'edge', ver: s[1]}
                : (s = ua.match(/firefox\/([\d\\.]+)/)) ? sys = {browser: 'firefox', ver: s[1]}
                    : (s = ua.match(/(?:opera|opr).([\d\\.]+)/)) ? sys = {browser: 'opera', ver: s[1]}
                        : (s = ua.match(/chrome\/([\d\\.]+)/)) ? sys = {browser: 'chrome', ver: s[1]}
                            : (s = ua.match(/version\/([\d\\.]+).*safari/)) ? sys = {browser: 'safari', ver: s[1]} : 0
    return sys;
}

function createMongolianLayer(options){
    let mongolianLayer = document.createElement('div');
    mongolianLayer.className='bf-monlayer';
    mongolianLayer.innerHTML='<div class="bf-container">' +
        '<div class="bf-dialog">' +
        '<div class="bf-imgContainer">' +
        '<a href="'+options.newVerUrl+'"  class="bf-imgIcon '+options.class+'" download="'+options.title+'"></a>' +
        '</div>' +
        '<p class="bf-description">' +
        options.title+
        '</p>' +
        '</div>' +
        '</div>';
    document.getElementsByTagName('body')[0].appendChild(mongolianLayer);
}

function init(options){
    let _options={
        filter:{
        },
        title:'您的页面似乎有兼容性问题，点击图标下载最新版Chrome！',
        class:'',
        dialogType:'full',
        newVerUrl: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8E74F7DE-458E-65DD-EC25-16AB30074375%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
        downloadName:'ChromeSetup.exe'
    };
    _options = Object.assign(_options,options)
    let browserInfo = getBrowserInfo();
    if(_options.filter[browserInfo.browser]){
        if(browserInfo.ver){
            let verByInt = parseInt(browserInfo.ver.substring(0,browserInfo.ver.indexOf('.')));
            if(!isNaN(verByInt) && verByInt < _options.filter[browserInfo.browser]){
                switch(_options.dialogType){
                    case "fullScreen":{
                        createMongolianLayer(_options);
                    }break;
                    case "modal":{
                        alert('xxxx')
                    }break;
                    default:{
                        createMongolianLayer(_options);
                    }break;
                }
            }
        }
    }else{
        return true
    }
}

function xdoBrowserFilter(options) {
    init(options);
}

export default xdoBrowserFilter;
