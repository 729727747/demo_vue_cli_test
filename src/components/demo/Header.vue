<template>
    <div class="header">
        <input type="text" v-model="inputContent" placeholder="请输入内容" @keyup.enter="add">
    </div>
</template>

<script>
    //随机字符串生成
    import { nanoid } from 'nanoid'
    export default {
        name:'HeaderComponent',
        data(){
            return{
                inputContent:''
            }
        },
        methods:{
            add(){
                if(!this.inputContent){
                    return
                }
                const todoObj = {id:nanoid(),title:this.inputContent,completed:false}
                this.addTodo(todoObj)
                this.inputContent = ''
            }
        },
        props:['addTodo']
    }
</script>

<style scoped>
   
</style>