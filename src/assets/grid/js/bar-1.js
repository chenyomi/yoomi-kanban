import theme from '@/assets/js/chart-theme.json'

export default (c) => {
    let arr = []
    const base = [120, 200, 150, 80, 70, 110, 130]
    base.forEach((e, i) => {
        arr.push({
            value: e,
            itemStyle: {
                color: theme.color[i]
            }
        })
    })
    return {
        title: {
            text: '基础柱状图'
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: arr,
                type: 'bar'
            }
        ]
    }
};
