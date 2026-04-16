<template>
   <div class="student">
    <h2>学生名称:{{studentName}}</h2>
    <h2>学生地址:{{studentAddress}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <h2>{{msg|upperCase}}</h2> 
    <h2>{{msg}}</h2> 
    <input type="text" v-focus>光标自动聚焦
    <!-- <button @click="updateAge">尝试修改学生年龄</button> -->
    <!-- <button @click="showName">点我弹出名称</button> -->
   </div>
</template>

<script>
    // import { hunhe } from '../mixin.js'

    export default {
        name:'StudentTest',
        data(){
            return{
                // studentName:'张三', 
                // studentAddress:'武汉市霞飞路38号',
                age:this.studentAge,
                // 全局过滤器
                msg:'hello vue cli'
            }
        },
        methods:{
            updateAge(){
                this.age ++;
            }
        },
        props:{
            studentName:{
                type:String
            },
            studentAddress:{
                type:String
            },
            studentAge:{
                type:Number
            }
        },
        // props:['studentName','studentAddress','studentAge']
        // mixins:[hunhe]
        
    }
</script>

<style scoped>
    .student{
        background-color: rgb(157, 255, 127);
    }
</style>


