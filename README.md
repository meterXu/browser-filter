# browerFilter
> 浏览器不兼容时，进行引导提示

![browerFilter](http://7u.isaacxu.com/brower.PNG)
## 组件兼容性
* ie>=8
* chrome
* firefox
* safari
* edge
* opera
## 安装
```html
    <link rel="stylesheet" href="src/index.css">
    <script src="src/index.js"></script>
```
## 用法
```javascript
window.onload=function () {
            new browerFilter({
                filter:{
                    chrome:65, // 限定页面支持的浏览器最小版本
                    ie:10,
                    firefox:53
                },
                // 兼容的浏览器下载链接
                newVerUrl: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8E74F7DE-458E-65DD-EC25-16AB30074375%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
                // 下载的文件名称
                downloadName:'ChromeSetup.exe'
            });
        };
```
## API
### options
|  参数   | 类型  |  默认值  |  描述  |
|  ----  | ----  | ----  | ----  |
| filter  | Object | {chrome:65,ie:10,firefox:53} |限定页面支持的浏览器最小版本|
| title  | String | 您的页面似乎有兼容性问题，点击图标下载最新版Chrome！ |提示文字|
| class  | String | [空字符串] |图标样式|
| newVerUrl  | String | [chrome下载地址](https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8E74F7DE-458E-65DD-EC25-16AB30074375%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe) |浏览器下载地址|
| downloadName  | String | ChromeSetup.exe |下载资源名称|