<template>
    <div class="header">
        <input type="text" v-model="inputContent" placeholder="请输入内容" @keyup.enter="add">
    </div>
</template>

<script>
    //导入随机字符串生成

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
                const todoObj = {id:0,title:this.inputContent,completed:false}
                this.addTodo(todoObj)
                this.inputContent = ''
            }
        },
        props:['addTodo']
    }
</script>

<style scoped>
   
</style>