import './assets/index.css';

function getBrowserInfo(){
    let sys = {};
    let ua = navigator.userAgent.toLowerCase();
    let s;
    (s = ua.match(/rv:([\d\\.]+)\) like gecko/)) ? sys = {browser: 'ie', version: s[1]}
        : (s = ua.match(/msie ([\d\\.]+)/)) ? sys = {browser: 'ie', version: s[1]}
            : (s = ua.match(/edge\/([\d\\.]+)/)) ? sys = {browser: 'edge', version: s[1]}
                : (s = ua.match(/firefox\/([\d\\.]+)/)) ? sys = {browser: 'firefox', version: s[1]}
                    : (s = ua.match(/(?:opera|opr).([\d\\.]+)/)) ? sys = {browser: 'opera', version: s[1]}
                        : (s = ua.match(/chrome\/([\d\\.]+)/)) ? sys = {browser: 'chrome', version: s[1]}
                            : (s = ua.match(/version\/([\d\\.]+).*safari/)) ? sys = {browser: 'safari', version: s[1]} : 0
    return sys;
}

function compare(browserInfo,operator,filter){
    let uv=filter[browserInfo.browser]
    if(uv){
        switch (operator){
            case "<=":{
                return browserInfo.version<=uv
            }break;
            case "=":{
                return uv==browserInfo.version
                break;
            }
            case ">=":
            default:{
                return browserInfo.version>=uv
            }
        }
    }else{
        return true
    }

}

function validate(option){
    let _option={
        filter:{
        },
        operator:'>=',
        compare:compare,
        action:null,
    };
    _option = Object.assign(_option,option)
    let browserInfo = getBrowserInfo();
    let validateRes= true;
    if(browserInfo.browser&&browserInfo.version){
        if(_option.compare){
            validateRes = _option.compare(browserInfo,_option.operator,_option.filter)
        }
    }
    if(_option.action){
        _option.action(validateRes)
    }
}

function xdoBrowserFilter(option) {
    validate(option);
}

export default xdoBrowserFilter;
