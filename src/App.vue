<template>
  <div id="app">
    <div class="formContainer">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="chrome">
          <el-input-number v-model="form.chrome"></el-input-number>
        </el-form-item>
        <el-form-item label="ie">
          <el-input-number v-model="form.ie"></el-input-number>
        </el-form-item>
        <el-form-item label="firefox">
          <el-input-number v-model="form.firefox"></el-input-number>
        </el-form-item>
        <el-form-item label="safari">
          <el-input-number v-model="form.safari"></el-input-number>
        </el-form-item>
        <el-form-item label="比较符">
          <el-select v-model="form.operator">
            <el-option
                v-for="item in operators"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="提醒方式">
          <el-radio-group v-model="form.type">
            <el-radio :label="1">消息提示</el-radio>
            <el-radio :label="2">弹框</el-radio>
            <el-radio :label="3">通知</el-radio>
            <el-radio :label="4">全屏覆盖</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">验证兼容性</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
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
    </el-dialog>
  </div>
</template>

<script>
import xdoBrowserFilter from './packages/xdo-browser-filter/index.js'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      dialogVisible: false,
      filter: true,
      msg: null,
      operators:[{
        value: '>=',
        label: '>='
      },
        {
          value: '<=',
          label: '<='
        },
        {
          value: '==',
          label: '=='
        }],
      form: {
        chrome: 65,
        ie: 10,
        firefox: 53,
        safari: 12,
        operator:">=",
        type: 1
      }
    }
  },
  methods: {
    onSubmit() {
      let that = this
      xdoBrowserFilter.init({
        filter: this.form,
        operator:this.form.operator,
        action: function (res) {
          that.filter = res
          that.showRes(that.form.type)
        }
      })
    },
    showRes(type) {
      this.msg = this.filter ? '无兼容性问题！' : '页面有兼容性问题！'
      switch (type) {
        case 4:{
          if(this.filter){
            this.$message({
              message: this.msg,
              type: 'success'
            })
          }else{
            xdoBrowserFilter.full()
          }
        }break;
        case 3: {
          this.$notify({
            title: '通知',
            message: this.msg,
            type: this.filter ? 'success' : 'warning'
          });

        }
          break
        case 2: {
          this.dialogVisible = true
        }
          break
        case 1:
        default: {
          this.$message({
            message: this.msg,
            type: this.filter ? 'success' : 'warning'
          })
        }
      }
    },
    resetForm() {
      this.form.chrome = 65
      this.form.ie = 10
      this.form.firefox = 53
      this.form.safari = 12
      this.form.operator=">="
      this.form.type = 1
    }
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
.formContainer{
  width: 500px;
  margin: 80px auto 0 auto;
  text-align: left;
}
.el-form-item__content{
  padding-left: 50px;
}
</style>
