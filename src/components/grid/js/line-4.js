
export const data = {
    type: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6', 'type7',],
    value: [
        {
            name: 'line1',
            value: [10, 13, 11, 13, 9, 23, 32]
        },
        {
            name: 'line2',
            value: [22, 18, 19, 23, 29, 33, 31]
        },
        {
            name: 'line3',
            value: [15, 23, 23, 15, 19, 33, 41]
        },
    ],
}
export const setData = (a, b) => {
    let arr = []
    let type = []
    a.xAxis.data = b.type
    a.legend.data = b.type
    b.value.forEach((e, i) => {
        arr.push({
            data: e.value,
            name: e.name,
            type: 'line',
            stack: 'Total',
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
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
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