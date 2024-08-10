import theme from '@/assets/js/chart-theme.json'
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
            itemStyle: {
                color: theme.color[i]
            }
        })
    })
    a.series[0].data = arr
    return a
}
export default (c) => {
    return setData({
        title: {
            text: '基础柱状图'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [],
                type: 'bar'
            }
        ]
    }, data)
};
