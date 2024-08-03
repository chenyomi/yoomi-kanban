<template>
    <div class="h-full card-item">
        <slot></slot>
    </div>
</template>
<script setup name="chenyomiBox3">
const props = defineProps({
    colorType: {
        type: Number,
        default: 1
    },
})
</script>
<style lang="less">
.card-item {
    color: #ffffff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 15px;
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        border: 6px solid #27283c;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 15px;
    }

    .card-item-title {
        .card-item-title-icon {
            font-size: 22px;
            margin-right: 8px;
            vertical-align: middle;
        }

        span {
            vertical-align: middle;
        }
    }
}

.card-item-type1 {
    background: linear-gradient(90deg, #5171fd, #c97afd);
}

.card-item-type2 {
    background: linear-gradient(90deg, #3dadf6, #737bfc);
}

.card-item-type3 {
    background: linear-gradient(90deg, #ea677c, #ef9b5f);
}

.card-item-type4 {
    background: linear-gradient(90deg, #42d79b, #a6e25f);
}
</style>