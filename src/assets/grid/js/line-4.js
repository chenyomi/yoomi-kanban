
export default () => {
    return {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [10, 13, 11, 13, 9, 23, 32]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [22, 18, 19, 23, 29, 33, 31]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [15, 23, 23, 15, 19, 33, 41]
            }
        ]
    }
};