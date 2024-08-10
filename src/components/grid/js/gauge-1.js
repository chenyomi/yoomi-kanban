
const axisLabelformatter = (value) => {
    if (value == 50 || value == 70 || value == 100) {
        return value
    } else {
        return ''
    }
}
export const data = {
    value: 80,
}
export const setData = (a, b) => {
    a.series[0].axisLabel.formatter = axisLabelformatter
    a.series[0].data[0].value = b.value
    return a
}
export default (c) => {
    return setData({
        title: {
            text: '仪表盘'
        },
        series: [
            {
                type: 'gauge',
                splitNumber: 10,
                axisLine: {
                    lineStyle: {
                        width: 5,
                        color: [
                            [0.5, '#fd666d'],
                            [0.7, '#37a2da'],
                            [1, '#23ec13']
                        ]
                    }
                },
                pointer: {
                    width: 2,
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: false,
                splitLine: {
                    distance: 0,
                    length: 0,
                    lineStyle: {
                        color: '#fff',
                        width: 1
                    }
                },
                axisLabel: {
                    color: 'inherit',
                    distance: 12,
                    fontSize: 10,
                    formatter: {}
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}%',
                    color: 'inherit',
                    offsetCenter: [0, '95%'],
                    fontSize: 18,
                    fontWeight: 'normal'
                },
                data: [
                    {
                        value: 0
                    }
                ]
            }
        ]
    }, data)
};
