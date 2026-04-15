<template>
  <div >
    <h1 v-text="msg" ref="title"></h1>
    <SchoolTest />
    <StudentTest studentName="张三" studentAddress="武汉市霞飞路38号" :studentAge="18" />
    <!-- <button @click="changeMsg">点我弹出msg</button> -->
  </div>
</template>

<script>
import StudentTest from './components/StudentTest.vue'
import SchoolTest from './components/SchoolTest.vue'

export default {
  name: 'App',
  data(){
    return{
      msg:'hello vue cli',
    }
  },
  components: {
    StudentTest,
    SchoolTest
  },
  // methods:{
  //   changeMsg(){
  //     console.log(this.$refs.title.innerText)
  //     console.log(this.$refs.title2.innerText)
  //   }
  // }
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
