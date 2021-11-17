# browser-filter
> 浏览器兼容性校验

![xdo-browser-filter](http://7u.isaacxu.com/xdo-brower-filter.png)

设置需要的浏览器版本，以规避在不兼容的浏览器上运行导致的不稳定情况。

```javascript
xdoBrowserFilter.init({
    filter:{
        chrome:65,
        ie:10,
        firefox:53
    },
    action:function(res){
        if(!res){
            xdoBrowserFilter.full()
        }
    }
})
```
## 在线示例
[在线示例](https://xenodochial-hermann-adb1af.netlify.app/)
## 组件使用
[点我跳转](src/packages/xdo-browser-filter)
