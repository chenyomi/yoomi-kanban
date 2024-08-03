
export default (c) => {
    return {
        title: {
            text: '数据集'
        },
        tooltip: {
            trigger: 'axis',
        },
        legend: {},
        xAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']

        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [33, 33, 12, 60, 20, 30]
            },
            {
                name: '2012',
                type: 'bar',
                data: [55, 44, 40, 20, 33, 20]
            }
        ]
    }
};
