export default {
    install(Vue){
        console.log('插件安装成功')

        //全局过滤器
        Vue.filter('upperCase',function(value){
            return value.toUpperCase()
        })

        //全局指令
        Vue.directive('focus',{
            inserted(el){
                el.focus()
            }
        })
    }
}