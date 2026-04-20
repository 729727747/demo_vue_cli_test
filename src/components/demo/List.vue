<template>
    <li>
        <ItemComponent v-for="todo in todos" :key="todo.id" 
        :todo="todo" 
        :checkboxChange="checkboxChange"
        :deleteTodo="deleteTodo"
        />
    </li>
</template>


<script>
import ItemComponent from './Item.vue'

    export default {
        name:'ListComponent',
        data(){
            return{
                
            }
        },
        components:{
            ItemComponent
        },
        props:['todos','checkboxChange','deleteTodo']
    }
</script>

<style scoped>
  
</style>