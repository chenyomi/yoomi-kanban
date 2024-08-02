<template>
    <div class="flex flex-col h-full">
        <div class="flex items-center justify-between p-3" style="color: #ffffff;">
            <span>数据源</span>
            <a-button @click="reload">运行</a-button>
        </div>
        <div id="editor" class="flex-1" style="height: calc((100vh / 2) - 80px)"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, inject, toRaw } from 'vue';
import * as monaco from 'monaco-editor';
const gridList = inject('gridList')
const editor = ref(null);

const reloadView = inject('reloadView')

const reload = () => {
    const value = JSON.parse(toRaw(editor.value).getValue())
    gridList.list[gridList.tCurrent].grid = value.grid
    gridList.options = value.options
    reloadView([0, 2])
}
onMounted(() => {
    editor.value = monaco.editor.create(document.getElementById('editor'), {
        value: JSON.stringify({
            ...gridList.list[gridList.tCurrent],
            options: gridList.options
        }),
        language: 'json',
        readOnly: false,
        // 行号
        lineNumbers: false,
        wordWrap: false, // 开启自动换行
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
    // editor.value.addCommand(monaco.KeyMod.CtrlCmd || monaco.KeyCode.KEY_S, function () {
    //     console.log('Ctrl + S 保存')
    // })
    // 禁用键盘按键
    // editor.value.onKeyDown((event) => {
    //     event.stopPropagation();
    //     event.preventDefault();
    // });
    //添加按键监听

    // 自动格式化整个文档
    setTimeout(() => {
        editor.value && editor.value.trigger('', 'editor.action.formatDocument');
    }, 400);
});
</script>