<template>
  <div class="grid h-full grid-flow-col grid-rows-6 gap-2">
    <div v-for="(item, i) in gridList.list[gridList.tCurrent].grid" :class="item.class">
      <component :is="item.borderType" :colorType="item.colorType">
        <div class="absolute w-full h-full p-2">
          <div class="w-full h-full p-3" :class="item.borderType == 'chenyomiBox2' && 'over'">
            <div :id="'id' + i" class="w-full h-full"></div>
          </div>
        </div>
      </component>
    </div>
  </div>
</template>
<script setup name="produceboard">
import { ref, onMounted, onUnmounted, defineExpose, inject, watch } from 'vue'
const gridList = inject('gridList')

onMounted(() => {
  getData()
})
const getData = () => {
  gridList.list[gridList.tCurrent].grid.forEach((e, i) => {
    if (gridList.options?.[i]?.module && document.getElementById('id' + i)) {
      const myChart = echarts.init(document.getElementById('id' + i), 'dark');
      import(/* @vite-ignore */ `../../components/grid/js/${gridList.options[i].module}.js`).then(res => {
        res.default && myChart.setOption(res.default());
      })
    }
  })
}
defineExpose({
  getData,
})
</script>
<style scoped lang="less">
:deep(.ant-table-body),
.scroll-class {

  &::-webkit-scrollbar {
    //整体样式
    height: 12px;
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    //滑动滑块条样式
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #84cc16;
  }

  &::-webkit-scrollbar-track {
    //轨道的样式
    -webkit-box-shadow: 0;
    border-radius: 0;
    background: #170e2b;
  }
}


.over {
  overflow: hidden;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  background: #170e2b;
  border-radius: 10px;
}
</style>
