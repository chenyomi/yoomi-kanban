<template>
    <div class="flex flex-col h-full overflow-hidden">
        <div class="flex items-center justify-between p-3" style="color: #ffffff;">
            <span>属性</span>
        </div>
        <div class="flex-1 p-3" style="background: #1e1e1e; color: #ffffff;">
            <div class="overflow-y-scroll scroll-class" style="height: calc((100vh) - 80px)">
                <a-collapse v-model:activeKey="activeKey" accordion>
                    <a-collapse-panel v-for="(item, index) in gridList.list[gridList.tCurrent].grid" :key="index"
                        :header="'Grid-' + (index + 1)">
                        <a-form-item v-if="gridList.options?.[index]?.option" label="标题">
                            <a-input v-model:value="gridList.options[index].option.title.text"
                                @blur="onInputChange($event, index, 'title.text')">
                            </a-input>
                        </a-form-item>
                        <a-form-item class="mt-2" label="边框类型">
                            <a-select v-model:value="item.borderType" @change="onChange($event, index, 'borderType')">
                                <a-select-option v-for="e in options" :value="e">{{ e }}</a-select-option>
                            </a-select>

                        </a-form-item>
                        <a-form-item class="mt-2" v-if="item.borderType.indexOf('chen') !== -1" label="边框颜色">
                            <a-select v-model:value="item.colorType" @change="onChange($event, index, 'colorType')">
                                <a-select-option v-for="e in options2" :value="e">{{ e }}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-collapse-panel>
                </a-collapse>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, inject, watch } from 'vue';
const gridList = inject('gridList')
const view = inject('view')
const activeKey = ref([]);
const options = ['borderBox1', 'borderBox2', 'borderBox3', 'borderBox4', 'borderBox5', 'borderBox6', 'borderBox7', 'borderBox8', 'borderBox9', 'borderBox10', 'borderBox11', 'borderBox12', 'borderBox13', 'chenyomiBox1', 'chenyomiBox2', 'chenyomiBox3']
const options2 = [1, 2, 3, 4]

const reloadView = inject('reloadView')
const onChange = (e, i, key) => {
    gridList.list[gridList.tCurrent].grid[i][key] = e
    reloadView([0, 1])
}
const onInputChange = (e, i, key) => {
    view.value.getData('id' + i)
}
</script>
<style lang="less" scoped>
.ant-form-item {
    margin-bottom: 0;
}
</style>