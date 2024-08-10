
export const data = {
    value: [
        { value: 1048, name: 'type1' },
        { value: 735, name: 'type2' },
        { value: 580, name: 'type3' },
        { value: 484, name: 'type4' },
        { value: 300, name: 'type5' }
    ]
}
export const setData = (a, b) => {
    a.series[0].data = b.value
    return a
}
export default (c) => {
    return setData({
        title: {
            text: '圆角环形图'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: 0,
            left: 'center'
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '60%'],
                bottom: 20,
                avoidLabelOverlap: false,
                data: []
            }
        ]
    }, data)
};
