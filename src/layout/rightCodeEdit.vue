<template>

    <div class="flex flex-row">
        <div class="flex-1 px-3 py-4">
            <div id="editor" style="height: 400px; "></div>
        </div>
        <div class="flex-1 p-3">
            <a-input-search v-model:value="apiUrl" prefix="GET：" enter-button="运行" @search="requestFn" />
            <div id="editor-api" class="mt-5" style="height: 300px; "></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, inject, toRaw } from 'vue';
import * as monaco from 'monaco-editor';
const gridList = inject('gridList')
const apiUrl = ref('')
const props = defineProps({
    openIndex: {
        type: Number
    }
})
if (gridList.api[props.openIndex]) {
    apiUrl.value = gridList.api[props.openIndex]
}
let editor1 = null
let editor2 = null
const init = () => {
    editor1 = initEdit('editor')
    editor2 = initEdit('editor-api')
}
const initEdit = (id) => {
    const editor = monaco.editor.create(document.getElementById(id), {
        value: '',
        language: 'json',
        readOnly: false,
        // 行号
        lineNumbers: false,
        wordWrap: true, // 开启自动换行
        fontSize: 14,
        lineHeight: 15,
        minimap: { enabled: false },
        // 设置是否启用自动布局，使编辑器在容器尺寸变化时自动调整大小。
        automaticLayout: true,
        renderLineHighlight: 'none',
        // 双击菜单
        contextmenu: false,
        // 辅助对齐线条
        renderIndentGuides: true,
        // 隐藏滚动条
        scrollbar: {
            vertical: 'hidden',
            horizontal: 'hidden'
        },
        // 鼠标悬浮提示
        hover: {
            enabled: false
        },
        // 滚动条
        scrollBeyondLastLine: true,
        // 禁用缩略块
        folding: true,
        theme: 'vs-dark' // 设置为暗色主题
    });
    return editor
    // setTimeout(() => {
    //     editor.setValue(val); // 
    //     editor && editor.trigger('', 'editor.action.formatDocument');
    // }, 100);
}
const getData = async () => {
    const moduleName = gridList.options[props.openIndex].module
    const { data } = await import(`../components/grid/js/${moduleName}.js`);
    setTimeout(() => {
        editor1.setValue('// 数据格式示例\n' + JSON.stringify(data))
        editor1.trigger('', 'editor.action.formatDocument');
    }, 100);
}

import { autoRequest } from '@/utils/request'
const requestFn = () => {
    apiUrl.value && autoRequest(apiUrl.value, {}, 'get').then(res => {
        setTimeout(() => {
            editor2.setValue(JSON.stringify(res))
            editor2.trigger('', 'editor.action.formatDocument');
        }, 100);
    })
}
onMounted(() => {
    init()
    getData()
    requestFn()
});
defineExpose({
    apiUrl
})
</script>
<style>
.ant-input-prefix {
    color: gold;
}
</style>