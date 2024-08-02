<template>
    <div id="cantainer" class="relative flex" style="background-color: #242629;pointer-events: auto;"
        @mousedown="pointdown" @mousemove="pointmove" @mouseup="pointup" @touchstart="pointdown" @touchmove="pointmove"
        @touchend="pointup">
        <leftMenu></leftMenu>
        <div class="flex-1 ">
            <div class="flex flex-col h-full">
                <div class="flex-3">
                    <div class="flex flex-row h-full">
                        <div
                            class="relative pt-16 px-2.5 pb-2.5 text-white overflow-auto select-none produceboard_wrapper flex-1">
                            <div id="board-title" class="absolute z-10 h-12 -translate-x-1/2 left-1/2 top-2 w-96"></div>
                            <router-view v-slot="{ Component }">
                                <component :is="Component" ref="view" v-if="show[0]" class="fadeIn"
                                    :key="$route.fullPath"></component>
                            </router-view>
                            <a-button class="absolute right-8 top-6" style="color: #ffffff;"
                                @click="preview">预览</a-button>
                        </div>
                    </div>
                </div>
                <!-- <div class="flex-1">11</div> -->
            </div>
        </div>
        <div style="width: 300px;">
            <div class="flex flex-col h-full">
                <!-- <rightCodeEdit v-if="show[1]" class="fadeIn" style="height: 50vh;"></rightCodeEdit> -->
                <rightProps v-if="show[2]" class="fadeIn" style="height: 100vh;"></rightProps>
            </div>
        </div>
    </div>
</template>
<script setup name="produceboard">
import { provide, ref, onMounted } from 'vue';
import leftMenu from './leftMenu.vue';
import rightCodeEdit from './rightCodeEdit.vue';
import rightProps from './rightProps.vue';
import chartTitle from './title'

import { kanban } from '@/stores/index'
const { gridList } = kanban()
provide('gridList', gridList)

const lock = ref(false)
provide('lock', lock)

let startId = null
let dom_ = null

const pointdown = (e) => {
    if (e.target.dataset.id) {
        startId = e.target.dataset.id
    }
}

const pointmove = (e) => {
    const x = e.clientX || e.changedTouches?.[0].clientX
    const y = e.clientY || e.changedTouches?.[0].clientY
    if (startId && x > 200) {
        const width = 100
        if (!dom_) {
            const dom = document.getElementById(startId)
            const body = document.getElementById('cantainer')
            dom_ = dom.cloneNode(dom)
            dom_.id = startId + '_'
            dom_.style.position = 'absolute'
            dom_.style.border = '2px solid #ffffff'
            dom_.style.cursor = 'pointer'
            dom_.style.width = `${width}px`
            dom_.style.left = `${x - width / 2}px`
            dom_.style.top = `${y - 30}px`
            body.appendChild(dom_)
        } else {
            dom_ = document.getElementById(startId + '_')
            if (dom_) {
                dom_.style.left = `${x - width / 2}px`
                dom_.style.top = `${y - 30}px`
            }

        }
        lock.value = true
    } else {
        const node = document.getElementById(startId + '_')
        node && node?.parentNode.removeChild(node);
    }
}

const pointup = (e) => {
    const x = e.clientX || e.changedTouches[0].clientX
    const y = e.clientY || e.changedTouches[0].clientY
    if (startId) {
        const doms = document.elementsFromPoint(x, y)
        const box = doms.filter(c => c.dataset.index)[0]
        if (box) {
            gridList.options[box.dataset.index] = {
                module: startId
            }
            view.value.getData(box.id)
        }
        if (dom_) {
            const node = document.getElementById(startId + '_')
            node && node.parentNode.removeChild(node);
        }
    }
    dom_ = null
    startId = null
    lock.value = false
}

onMounted(() => {
    getText()
})

const getText = () => {
    const myChart = echarts.init(document.getElementById('board-title'), 'dark');
    myChart.setOption(chartTitle(gridList.title));
}

// 预览
const preview = () => {
    localStorage.setItem('gridList', JSON.stringify(gridList))
    window.open('/#/preview', '_blank', 'height=1080,width=1920')
}

// 看板视图
const view = ref()
provide('view', view)

// reload Grid
const show = ref({
    0: true,
    1: true,
    2: true,
})
const reloadView = (arr) => {
    if (arr && arr.length) {
        arr.forEach(e => {
            show.value[e] = false
            setTimeout(() => {
                show.value[e] = true
            }, 0);
        })
    }
    getText()
}
provide('reloadView', reloadView)

</script>
<style scoped lang="less">
.produceboard_wrapper {
    background-color: #170e2b;
    /* background-color: #111111; */
    background-image: url(../assets/img/logo.png);
    background-size: 100% 60px;
    background-repeat: no-repeat;
    background-position: top center;
}
</style>
