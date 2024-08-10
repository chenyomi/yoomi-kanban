import theme from '@/assets/js/chart-theme.json'
import svg from '../svg/machine.svg?raw'
export default (c) => {
    echarts.registerMap('machine', { svg: svg });
    return {
        tooltip: {},
        // legend: {
        //     // 图例的数据数组
        //     data: ['1号机床', '2号机床', '3号机床', '4号机床'],
        // },
        series: [
            {
                type: 'map',
                map: 'machine',
                roam: true,
                zoom: 8,
                // top: 320,
                emphasis: {
                    label: {
                        show: false
                    }
                },
                selectedMode: false,
                data: [
                    {
                        name: 'machine1', value: 1, itemStyle: {
                            areaColor: theme.color[0]
                        }
                    },
                    {
                        name: 'machine2', value: 2, itemStyle: {
                            areaColor: theme.color[1]
                        }
                    },
                    {
                        name: 'machine3', value: 3, itemStyle: {
                            areaColor: theme.color[2]
                        }
                    },
                    {
                        name: 'machine4', value: 4, itemStyle: {
                            areaColor: theme.color[3]
                        }
                    },
                ]
            },
        ]
    }
};
