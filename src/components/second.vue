<template>
  <div id="second">
    <h2>这是第二个页面-------这是第二个页面</h2>
    <button @click="nav">返回上层</button>
    <p>姓名：{{name}}</p>
    <p>性别：{{sex}}</p>
  </div>
</template>

<script>
export default {
  name: "second",
  data() {
    return {
      name: "",
      sex: ""
    };
  },
  components: {},
  mounted() {
    console.info("这是首页传递的参数--", this.$route.params);
    this.name = this.$route.params.name;
    this.sex = this.$route.params.sex;
  },
  methods: {
    nav() {
      this.$router.push({
        name: "first",
        // 传递参数    query 形式  顶部会显示参数
        query: {
          Arr: [1, 1, 1, 11, 1, 1, 1, 1, 1]
        }
      });
    }
  }
};
</script>

<style scoped >
</style>