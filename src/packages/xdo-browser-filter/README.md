# browser-filter
> 浏览器兼容性校验工具

![xdo-browser-filter](http://7u.isaacxu.com/brower.png)
## 组件兼容性
* vue
* react
* browser

## 安装
* browser
```html
    <script src="src/index.js"></script>
```
* npm
```html
    npm i xdo-browser-filter
```
## 用法
```javascript
xdoBrowserFilter({
    filter:{
        chrome:65,
        ie:10,
        firefox:53
    },
    action:function(res){
        console.log(res)
    }
})
```
## API
### options
|  参数   | 类型  |  默认值  |  描述  |
|  ----  | ----  | ----  | ----  |
| filter  | Object | {} |限定兼容的浏览器版本，格式{browser:version}，browser可以使用ie,edge,firefox,opera,chrome,safari；version表示版本数值|
| operator | String | >= | 兼容性比较符，可选>=,<=,== |
| compare | Function(browser,version) | null | 可自定义兼容性比较函数，返回true或false |
| action | Function(res) | null | 兼容性校验回调函数，res表示兼容性结果，true或false |