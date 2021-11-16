<template>
  <div id="app">
    hello world
  </div>
</template>

<script>
import xdoBrowserFilter from './packages/xdo-browser-filter/index.js'
export default {
  name: 'App',
  components: {
  },
  created() {
    xdoBrowserFilter({
      filter:{
        chrome:100,
        ie:10,
        firefox:53
      },
      dialogType:'modal',
      // 兼容的浏览器下载链接
      newVerUrl: 'https://dl.google.com/tag/s/appguid%3D%7B8A69D345-D564-463C-AFF1-A69D9E530F96%7D%26iid%3D%7B8E74F7DE-458E-65DD-EC25-16AB30074375%7D%26lang%3Dzh-CN%26browser%3D4%26usagestats%3D1%26appname%3DGoogle%2520Chrome%26needsadmin%3Dprefers%26ap%3Dx64-stable-statsdef_1%26installdataindex%3Dempty/update2/installers/ChromeSetup.exe',
      // 下载的文件名称
      downloadName:'ChromeSetup.exe'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
