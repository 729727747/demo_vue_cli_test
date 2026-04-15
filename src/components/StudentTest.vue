<template>
   <div class="student">
    <h2>学生名称:{{studentName}}</h2>
    <h2>学生地址:{{studentAddress}}</h2>
    <h2>学生年龄:{{age}}</h2>
    <!-- <button @click="updateAge">尝试修改学生年龄</button> -->
    <button @click="showName">点我弹出名称</button>
   </div>
</template>

<script>
    import { hunhe } from '../mixin.js'

    export default {
        name:'StudentTest',
        data(){
            return{
                // studentName:'张三', 
                // studentAddress:'武汉市霞飞路38号'
                age:this.studentAge
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
        mixins:[hunhe]
        
    }
</script>

<style scoped>
    .student{
        color:rgb(0, 166, 255);
    }
</style>


