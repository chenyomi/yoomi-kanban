import theme from '@/assets/js/chart-theme.json'
export default (c) => {
    return {
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
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '60%'],
                bottom: 20,
                avoidLabelOverlap: false,
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    }
};
