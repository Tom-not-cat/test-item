<template>
    <footer class="footer_guide border-1px">
        <span href="javascript:;" class="guide_item" :class="{on:isCurrent('/msite')}" @click="goto('/msite')">
        <span class="item_icon">
            <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{on:isCurrent('/search')}" @click="goto('/search')">
        <span class="item_icon">
            <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{on:isCurrent('/order')}" @click="goto('/order')">
        <span class="item_icon">
            <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
        </span>
        <span href="javascript:;" class="guide_item" :class="{on:isCurrent('/profile')}" @click="goto('/profile')">
        <span class="item_icon">
            <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
        </span>
    </footer>
</template>
 
<script>
    export default {
        name: "FooterGuide",
        data() {
            return {};
        },
        methods: {
            goto(path){
                this.$router.replace(path)
            },
            isCurrent(path){
                return path === this.$route.path
            }
        },
    };
</script>
 
<style lang="stylus" scoped>
    @import "../../common/stylus/mixins.styl" 
    .footer_guide 
        top-border-1px(#e4e4e4) 
        position fixed 
        z-index 100 
        left 0 
        right 0 
        bottom 0 
        background-color #fff 
        width 100% 
        height 50px 
        display flex 
        &::before
            content: ''
            position: absolute
            z-index: 200
            left: 0
            top: 0
            width: 100%
            height: 1px
            background-color: #e4e4e4   
        .guide_item 
            display flex 
            flex 1 
            text-align center 
            flex-direction column 
            align-items center
            margin 5px
            color #999
            &.on
                color: #02a774
            span
                font-size: 12px
                margin-top 2px
                margin-bottom 2px
                .iconfont
                    font-size: 22px                   
</style>