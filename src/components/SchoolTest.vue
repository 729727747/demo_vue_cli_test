<template>
   <div class="school">
    <h2>学校名称:{{schoolName}}</h2>
    <h2>学校地址:{{schoolAddress}}</h2>
    <button @click="changeSchoolName">点我弹出学校名称</button>
   </div>
</template>

<script>
    export default {
        name:'SchoolTest',
        data(){
            return{
                schoolName:'武汉大学',
                schoolAddress:'武汉市'
            }
        },
        methods:{
            changeSchoolName(){
                alert(this.schoolName)
            }
        }
    }
</script>

<style scoped>
    .school{
        color:red;
    }
</style>


