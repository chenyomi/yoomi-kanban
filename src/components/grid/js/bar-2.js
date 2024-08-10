
export const data = {
    value: [
        {
            name: '2011',
            value: [33, 33, 12, 60, 20, 30]
        },
        {
            name: '2012',
            value: [55, 44, 40, 20, 33, 20]
        }
    ],
    type: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
}
export const setData = (a, b) => {
    const arr = []
    a.xAxis.data = b.type
    b.value.forEach((e, i) => {
        arr.push({
            name: e.name,
            data: e.value,
            type: 'bar'
        })
    })
    a.series = arr
    return a
}
export default (c) => {
    return setData({
        title: {
            text: '数据集'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {},
        xAxis: {
            type: 'category',
            data: []

        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        series: []
    }, data)
};
