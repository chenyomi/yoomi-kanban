export const data = {
    value: [120, 200, 150, 80, 70, 110, 130],
    type: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
}
export const setData = (a, b) => {
    let arr = []
    a.xAxis.data = b.type
    b.value.forEach((e, i) => {
        arr.push({
            value: e,
        })
    })
    a.series[0].data = arr
    return a
}
export default () => {
    return setData({
        title: {
            text: '基础面积图'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [],
                type: 'line',
                areaStyle: {}
            }
        ]
    }, data)
};