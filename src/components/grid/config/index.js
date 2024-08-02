
const grids = {
    0: ['col-span-1 row-span-2', 'col-span-1 row-span-4', 'col-span-1 row-span-2', 'col-span-2 row-span-4', 'col-span-1 row-span-2'],
    1: ['col-span-1 row-span-2', 'col-span-2 row-span-4', 'col-span-1 row-span-2', 'col-span-1 row-span-2', 'col-span-1 row-span-4'],
    2: ['col-span-1 row-span-4', 'col-span-1 row-span-2', 'col-span-2 row-span-4', 'col-span-1 row-span-2', 'col-span-1 row-span-2'],
    3: ['col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-3 row-span-6', 'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2'],
    4: ['col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-3 row-span-4', 'col-span-3 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2'],
    5: ['col-span-2 row-span-3', 'col-span-2 row-span-3', 'col-span-3 row-span-6', 'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2'],
    6: ['col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-2 row-span-2', 'col-span-3 row-span-6', 'col-span-2 row-span-3', 'col-span-2 row-span-3'],
    7: ['col-span-2 row-span-3', 'col-span-2 row-span-3', 'col-span-3 row-span-6', 'col-span-2 row-span-3', 'col-span-2 row-span-3'],
    8: ['col-span-2 row-span-4', 'col-span-2 row-span-2', 'col-span-3 row-span-6', 'col-span-2 row-span-3', 'col-span-2 row-span-3'],
    9: ['col-span-2 row-span-4', 'col-span-2 row-span-2', 'col-span-3 row-span-6', 'col-span-2 row-span-6'],
    10: ['col-span-2 row-span-6', 'col-span-3 row-span-6', 'col-span-2 row-span-3', 'col-span-2 row-span-3'],
    11: ['col-span-2 row-span-6', 'col-span-3 row-span-6', 'col-span-2 row-span-6'],
}
const baseGridsConfig = () => {
    const o = {}
    Object.entries(grids).forEach(([key, value]) => {
        o[key] = {}
        o[key].grid = []
        value.length && value.map(e => {
            o[key].grid.push({
                class: e,
                colorType: 1,
                borderType: 'borderBox13'
            })
        })
    });
    return {
        title: '伟立看板设计器', // 标题
        tCurrent: 4, // 当前布局
        currentBorderType: 'borderBox13', // 当前边框
        list: o, // grid数据集
        options: {} // 图表数据option集合
    }
}

export default baseGridsConfig()