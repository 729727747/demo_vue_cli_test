<template>
    <div class="item">
        <li>
            <label>
                <input type="checkbox" @change="changeTodo(todo.id)" :checked="todo.completed" />
                <span>{{todo.title}}</span>
                <!-- �鼠标悬停时才显示删除按钮 ，不是点击时才显示  删除按钮也title同行显示-->
                <span><button v-if="todo.completed" class="delete-btn" @click="deleteItem(todo.id)">删除</button></span>
            </label>
        </li>
    </div>
</template>

<script>
    export default {
        name:'ItemComponent',
        data(){
            return{
            }
        },
        props:['todo','checkboxChange','deleteTodo'],
        methods:{
            changeTodo(id){
                this.checkboxChange(id)
            },
            deleteItem(id){
                this.deleteTodo(id)
            }
        }
    }
</script>



<style scoped>
    .delete-btn{
        display: none;
    }
    li:hover .delete-btn{
        display: block;
    }
</style>