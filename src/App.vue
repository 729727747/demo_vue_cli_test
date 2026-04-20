<template>
  <div >
    <!-- <h1 v-text="msg" ref="title"></h1> -->

    <!--demo1  start-->
    <!-- <SchoolTest />
    <StudentTest studentName="张三" studentAddress="武汉市霞飞路38号" :studentAge="18" /> -->
    <!-- <button @click="changeMsg">点我弹出msg</button> -->
     <!--demo1  end-->


    <HeaderComponent :addTodo="addTodo" />
    <ListComponent  :todos="todos" 
     :checkboxChange="checkboxChange"
     :deleteTodo="deleteTodo"
     />
    <FooterComponent :todos="todos"
     :changeAll="changeAll"
     />



  </div>
</template>

<script>

// demo1  start
// import SchoolTest from './components/SchoolTest.vue'
// import StudentTest from './components/StudentTest.vue'
// demo1  end

import HeaderComponent from './components/demo/Header.vue'
import ListComponent from './components/demo/List.vue'
import FooterComponent from './components/demo/Footer.vue';

export default {
  name: 'App',
  data(){
    return{
    //  todos:[
    //         {
    //             id:1,
    //             title:'学习vue',
    //             completed:true
    //         },
    //         {
    //             id:2,
    //             title:'学习react',
    //             completed:false
    //         }
    //     ]
    todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkboxChange(id){
        this.todos.forEach(item => {
            if(item.id === id){
                item.completed = !item.completed
            }
        })
    },
    deleteTodo(id){
       this.todos = this.todos.filter(item=>item.id!==id)
    },
    changeAll(checked){
        this.todos.forEach(item => {
            item.completed = checked
        })
    }
  },
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  components: {
    HeaderComponent,
    ListComponent,
    FooterComponent



    //demo1  start
    // StudentTest,
    // SchoolTest
    //demo1  end
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
