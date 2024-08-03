
export default () => {
    return {
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

            data: ['line1', 'line2', 'line3', 'line4', 'line5']
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'line1',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [12, 13, 11, 13, 9, 23, 21]
            },
            {
                name: 'line2',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [22, 18, 19, 23, 29, 33, 31]
            },
            {
                name: 'line3',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [15, 23, 20, 15, 19, 33, 40]
            },
            {
                name: 'line4',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [32, 33, 30, 33, 39, 22, 33]
            },
            {
                name: 'line5',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [55, 40, 55, 33, 60, 66, 55]
            }
        ]
    }
};