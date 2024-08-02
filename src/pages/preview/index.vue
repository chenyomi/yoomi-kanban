<template>
    <div class="flex h-screen" style="background-color: #242629;">
        <div class="relative pt-16 px-2.5 pb-2.5 text-white overflow-auto select-none produceboard_wrapper flex-1">
            <div id="board-title" class="absolute z-10 h-12 -translate-x-1/2 left-1/2 top-2 w-96"></div>
            <div class="absolute z-10 right-10 top-6" style="color: #ffffff;">更新时间：{{
                time }}&emsp;更新倒计时：{{
                    ss }}s</div>
            <contentModule ref="view"></contentModule>
        </div>
    </div>
</template>
<script setup name="produceboard">
import { ref, onMounted, onUnmounted, provide } from 'vue'
import contentModule from './module.vue'

const gridList = JSON.parse(localStorage.getItem('gridList'))
provide('gridList', gridList)

const time = ref('')
const view = ref('')
const ss = ref(60)
const getTime = () => {
    time.value = new Intl.DateTimeFormat('zh-cn', {
        timeStyle: "medium", dateStyle: "medium"
    }).format(new Date())
}
let timer1 = null
onMounted(() => {
    getText()
    getTime()
    timer1 = setInterval(() => {
        ss.value--
        !ss.value && getTime()
        !ss.value && view.value.getData()
        ss.value ||= 60
    }, 1000);
})

onUnmounted(() => {
    clearInterval(timer1)
})
const getText = () => {
    const myChart = echarts.init(document.getElementById('board-title'), 'dark');
    const option = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: gridList.title,
                        fontSize: 38,
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: '#111111',
                        stroke: '#60c5e7',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 5000,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.2,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                        ]
                    }
                }
            ]
        }
    };

    option && myChart.setOption(option);
}
</script>
<style scoped lang="less">
.produceboard_wrapper {
    background-color: #170e2b;
    /* background-color: #111111; */
    background-image: url(../../assets/img/logo.png);
    background-size: 100% 60px;
    background-repeat: no-repeat;
    background-position: top center;
}
</style>
