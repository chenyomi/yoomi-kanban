<template>
  <div class="grid h-full grid-flow-col grid-rows-6 gap-2">
    <div v-for="(item, i) in gridList.list[gridList.tCurrent].grid" :class="item.class">
      <component :is="item.borderType" :colorType="item.colorType">
        <span class="absolute top-0 z-10 px-3 text-9xl right-6 opacity-5" style="color: #ffffff;">{{ i + 1
          }}</span>
        <div class="absolute w-full h-full p-2">
          <div class="w-full h-full p-3" :class="item.borderType == 'chenyomiBox2' && 'over'">
            <div :id="'id' + i" :data-index="i" class="w-full h-full"></div>
          </div>
        </div>
      </component>
    </div>
  </div>
</template>
<script setup name="produceboard">
import { ref, onMounted, onUnmounted, defineExpose, inject, watch } from 'vue'

const gridList = inject('gridList')

const reloadView = inject('reloadView')

const setNewData = (e) => {
  e && (gridList[e.key] = e.value)
  if (gridList.list[gridList.tCurrent].grid.length) {
    gridList.list[gridList.tCurrent].grid.forEach(e => {
      e.borderType = gridList.currentBorderType
    })
    reloadView([0, 1, 2])
  }
}


onMounted(() => {
  getData()
})

const getData = (id) => {
  gridList.list[gridList.tCurrent].grid.forEach(async (e, i) => {
    if (gridList.options?.[i]?.module && document.getElementById('id' + i)) {
      // 当前拖拽id 只更新一个 或者 没有id 全部更新
      if ((id && id == ('id' + i)) || !id) {
        const myChart = echarts.init(document.getElementById('id' + i), 'dark');
        // 导入当前拖拽图表默认数据
        if (gridList.options[i].option) {
          myChart.clear()
          myChart.setOption(gridList.options[i].option);
          reloadView([1])
        } else {
          const moduleName = gridList.options[i].module
          const res = await import(`../../components/grid/js/${moduleName}.js`);
          myChart.clear()
          res.default && myChart.setOption(res.default());
          gridList.options[i].option = res.default() // 设置图表数据
          reloadView([1])
        }

      }
    }
  })
}

defineExpose({
  getData,
  setNewData
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
</style>
