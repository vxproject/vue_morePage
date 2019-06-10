<template>
  <div id="head_title">
    <el-container>
      <el-header>欢迎使用新手集训基地</el-header>
      <el-container>
        <el-aside width="100px">侧边栏内容</el-aside>
        <el-container>
          <el-main>
            <el-row>
              <el-col :span="12">
                <div class="grid-content bg-purple">哼！！！！！！！！</div>
              </el-col>
              <el-col :span="6" :offset="6">
                <div class="grid-content bg-green">哈！！！！！！！！</div>
              </el-col>
            </el-row>
          </el-main>
          <el-footer>
            <button @click="nav">跳转第二页</button>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "first",
  data() {
    return {
      obj: { name: "王玉", sex: "女" }
    };
  },
  mounted() {
    console.info("这是传递的参数--", this.$route.query.Arr);
  },
  methods: {
    nav() {
      this.$router.push({
        //   把目标路由协商 ，name要与路由管理器里面的一致
        name: "second",
        // 传递参数    params 形式  顶部不显示参数
        params: this.obj
      });
    }
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.bg-purple {
  background: red;
}
.bg-green {
  background: green;
}
el-main{
  padding: 0;
}
</style>


