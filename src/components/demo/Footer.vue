<template>
    <div class="footer">
        <label>
            <input type="checkbox" 
            :checked="todos.every(item => item.completed)"
            @change="changeAllCheck($event)"
            />
        </label>
        <span>
            <span>已完成{{ completedTodo }}</span>/全部{{ todos.length }}
        </span>
        <button >清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'FooterComponent',
        data(){
            return{
            }
        },
        props:['todos','changeAll'],
        methods:{
            changeAllCheck(e){
                console.log(e)
                this.changeAll(e.target.checked)
            }
        },computed:{
            completedTodo(){
                // return this.todos.filter(item => item.completed).length
                return this.todos.reduce((pre,todo) => pre + (todo.completed ? 1 : 0),0)
                
            }
        }
        
    }
</script>

<style scoped>
 
</style>