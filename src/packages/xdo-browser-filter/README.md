# xdo-browser-filter
> 浏览器兼容性校验组件

## 安装
* browser
```html
    <script src="https://github.com/meterXu/browser-filter/blob/master/public/xdo-brower-filter.umd.js"></script>
```
* npm
```html
    npm i xdo-browser-filter
```
## 用法
![xdo-browser-filter](http://7u.isaacxu.com/xdo-brower-filter.png)
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

## 默认提示方式
```html
<script src="https://github.com/meterXu/browser-filter/blob/master/public/xdo-brower-filter.umd.js"></script>
<script>
    window.onload=function (){
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
    }
</script>
```
## 自定义提示方式
![browser-filter](http://7u.isaacxu.com/xdo-browser-filter-1.PNG)
```vue
<template>
    <Dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%">
        <div>
            <i v-if="filter" class="el-icon-success" style="color:#67C23A;font-size: 100px"></i>
            <i v-else class="el-icon-warning" style="color:#E6A23C;font-size: 100px"></i>
        </div>
        <div style="margin-top: 20px">
            {{ msg }}
        </div>
        <span slot="footer" class="dialog-footer" style="display: flex;justify-content: center">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </Dialog>
</template>
<script>
    import 'element-ui/lib/theme-chalk/index.css'
    import {Dialog} from 'element-ui'
    import xdoBrowserFilter from 'xdo-browser-filter'
    export default {
        components:{Dialog},
        data(){
            return{
                dialogVisible:false
            }
        },
        mounted(){
            {
                xdoBrowserFilter.init({
                    filter: {
                        chrome: 65,
                        ie: 10,
                        firefox: 53,
                        safari: 12,
                    },
                    action: function (res) {
                        if(!res){
                            this.dialogVisible = true
                        }
                    }
                })
            }
        }
    }

</script>
```
![browser-filter](http://7u.isaacxu.com/xdo-browser-filter-2.PNG)
```javascript
import 'element-ui/lib/theme-chalk/index.css'
import {Message} from 'element-ui'
export default {
    mounted(){
        let that = this
        xdoBrowserFilter.init({
            filter: {
                chrome: 65,
                ie: 10,
                firefox: 53,
                safari: 12,
            },
            action: function (res) {
                if(!res){
                    Message({
                        message: '页面有兼容性问题！',
                        type: 'warning'
                    })
                }
            }
        })
    }
}
```
![browser-filter](http://7u.isaacxu.com/xdo-browser-filter-3.PNG)
```javascript
import 'element-ui/lib/theme-chalk/index.css'
import {Notification} from 'element-ui'
export default {
    mounted(){
        let that = this
        xdoBrowserFilter.init({
            filter: {
                chrome: 65,
                ie: 10,
                firefox: 53,
                safari: 12,
            },
            action: function (res) {
                if(!res){
                    Notification({
                        title: '通知',
                        message: '页面有兼容性问题！',
                        type: 'warning'
                    })
                }
            }
        })
    }
}
```

## 组件兼容性
* vue
* react
* browser

## 初始化选项

|  参数   | 类型  |  默认值  |  描述  |
|  ----  | ----  | ----  | ----  |
| filter  | Object | {} |限定兼容的浏览器版本，格式{browser:version}，browser可以使用ie,edge,firefox,opera,chrome,safari；version表示版本数值|
| operator | String | \>= | 兼容性比较符，可选>=,<=,== |
| compare | Function(browser,version) | null | 可自定义兼容性比较函数，返回true或false |
| action | Function(res) | null | 兼容性校验回调函数，res表示兼容性结果，true或false |

## 方法
|  函数   | 参数   |  描述  |
|  ----  | ----  | ----  |
| full(text,url)  | text:String,url:String | 全屏显示提示，可以配置提示文字及下载路径 |
