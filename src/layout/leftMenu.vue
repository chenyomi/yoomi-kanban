<template>
    <div class="h-screen text-center" style="width: 200px;">
        <a-radio-group v-model:value="size" class="pt-3.5 pb-3.5">
            <a-radio-button :value="0">布局</a-radio-button>
            <a-radio-button :value="1">边框</a-radio-button>
            <a-radio-button :value="2">图表</a-radio-button>
        </a-radio-group>

        <div v-if="size == 0" class="overflow-y-scroll scroll-class fadeIn" style="height: calc(100vh - 60px);">
            <div v-for="item in templateLayout" class="p-3 pt-0">
                <img :src="item.name" :class="item.index == tCurrent && 'border-2 border-white rounded-md border-solid'"
                    @click="changeGrid(item.index)" draggable="false">
            </div>
        </div>
        <div v-if="size == 1" class="overflow-y-scroll scroll-class fadeIn" style="height: calc(100vh - 60px);">
            <div v-for="item in borderLayout" class="p-3 pt-0">
                <component :is="item" style="height: 250px; zoom: .5;" backgroundColor="#1c1c1c"
                    @click="changeBorder(item)">
                    <div class="absolute w-full h-full p-2">
                        <div class="w-full h-full p-3" :class="item == 'chenyomiBox2' && 'over'">
                        </div>
                    </div>
                </component>
                <!-- <a-button style="color: #fff;" @click="changeBorder(item)">{{
                    item }}</a-button> -->
            </div>
        </div>
        <div v-if="size == 2" class="scroll-class fadeIn" style="height: calc(100vh - 60px);"
            :style="lock ? 'overflow-y:hidden' : 'overflow-y:scroll'">
            <div v-for="item in templateChart" class="p-3 pt-0">
                <img :src="item.name" class="border-8 border-gray-900 rounded-xl" :id="item.id" :data-id="item.id"
                    draggable="false">
            </div>
        </div>
    </div>

</template>

<script setup>
import { inject, ref, watch } from 'vue';

const size = ref(2)
const templateLayout = import.meta.glob("@/components/grid/config/\*.svg")
const borderLayout = ['borderBox1', 'borderBox2', 'borderBox3', 'borderBox4', 'borderBox5', 'borderBox6', 'borderBox7', 'borderBox8', 'borderBox9', 'borderBox10', 'borderBox11', 'borderBox12', 'borderBox13', 'chenyomiBox1', 'chenyomiBox2', 'chenyomiBox3']
const templateChart = import.meta.glob("@/components/grid/img/\*.webp")

Object.entries(templateLayout).map(([key, value], index) => value.index = index)
Object.entries(templateChart).map(([key, value], index) => {
    value.id = value.name.split('/')?.at(-1).split('.')?.[0] || null
    value.index = index
})

const tCurrent = ref(0)

const view = inject('view')
const lock = inject('lock')
const changeGrid = (i) => {
    tCurrent.value = i
    view.value.setNewData({ key: 'tCurrent', value: i })
}

const changeBorder = (data) => {
    view.value.setNewData({ key: 'currentBorderType', value: data })
}

</script>