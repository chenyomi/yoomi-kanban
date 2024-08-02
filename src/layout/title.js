
export default (title) => {
    return {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: title,
                        fontSize: 38,
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: '#111111',
                        stroke: '#60c5e7',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 5000,
                        loop: true,
                        keyframes: [
                            {
                                percent: 0.2,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                        ]
                    }
                }
            ]
        }
    }
}