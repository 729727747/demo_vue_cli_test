<template>
   <div class="student">
    <h2>学生名称:{{studentName}}</h2>
    <h2>学生地址:{{studentAddress}}</h2>
    <button @click="changeStudentName">点我弹出学生名称</button>
   </div>
</template>

<script>
    export default {
        name:'StudentTest',
        data(){
            return{
                studentName:'张三', 
                studentAddress:'武汉市霞飞路38号'
            }
        },
        methods:{
            changeStudentName(){
                alert(this.studentName)
            }
        }
    }
</script>

<style scoped>
    .student{
        color:rgb(0, 166, 255);
    }
</style>


