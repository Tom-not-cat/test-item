<template>
    <div id="app">
        <!-- 路由展示 -->
        <router-view></router-view>
        <!-- FooterGuide页底 -->
        <FooterGuide></FooterGuide>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'

    export default {
        name:'app',
        components:{
            FooterGuide
        }
    }
</script>

<style lang="stylus">
   #app
       width 100%
       height 100%
       background #f5f5f5
       position relative
       
</style>>
