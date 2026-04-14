<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <StudentTest />
    <SchoolTest />
  </div>
</template>

<script>
import StudentTest from './components/StudentTest.vue'
import SchoolTest from './components/SchoolTest.vue'



export default {
  name: 'App',
  components: {
    StudentTest,
    SchoolTest, 
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
