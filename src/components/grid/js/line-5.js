

export const data = {
    type: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6', 'type7'],
    value: [
        {
            name: 'line1',
            value: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'line2',
            value: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'line3',
            value: [150, 232, 201, 154, 190, 330, 410]
        },

    ],
}
export const setData = (a, b) => {
    let arr = []
    let type = []
    b.value.forEach((e, i) => {
        arr.push({
            name: e.name,
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: e.value,
        })
        type.push(e.name)
    })
    a.series = arr
    a.xAxis.data = data.type
    a.legend.data = type
    return a
}
export default () => {
    return setData({
        title: {
            text: '堆叠面积图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: []
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: []
    }, data)
};