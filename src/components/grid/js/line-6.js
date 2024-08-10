export const data = {
    type: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6', 'type7'],
    value: [
        {
            name: 'line1',
            value: [14, 23, 10, 26, 9, 34, 25]
        },
        {
            name: 'line2',
            value: [12, 28, 11, 23, 22, 34, 31]
        },
        {
            name: 'line3',
            value: [32, 13, 20, 33, 19, 13, 22]
        },
        {
            name: 'line4',
            value: [22, 40, 23, 13, 19, 23, 12]
        },
        {
            name: 'line5',
            value: [22, 30, 18, 23, 21, 29, 15]
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
            smooth: true,
            lineStyle: {
                width: 1
            },
            showSymbol: false,
            areaStyle: {
                opacity: .8,
            },
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
            text: '渐变堆叠面积图'
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