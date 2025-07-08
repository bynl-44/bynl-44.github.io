import {defineSiteConfig} from 'valaxy'

export default defineSiteConfig({
    url: 'https://uuqi.icu',
    lang: 'zh-CN',
    title: '北苑南路44号',
    subtitle: '一个有趣的地方。',
    author: {
        name: '44号',
        avatar: '/images/avatar.jpg'
    },
    description: '北苑南路44号，一个有趣的地方。',
    mediumZoom: {
        enable: true,
    },
    social: [
        {
            name: 'RSS',
            link: '/atom.xml',
            icon: 'i-ri-rss-line',
            color: 'orange',
        },
        {
            name: 'GitHub',
            link: 'https://github.com/YunYouJun',
            icon: 'i-ri-github-line',
            color: '#6e5494',
        },
        {
            name: 'E-Mail',
            link: 'uuqk@qq.com',
            icon: 'i-ri-mail-line',
            color: '#8E71C1',
        },

    ],

    search: {
        enable: true,
        type: 'fuse'
    },

    comment: {
        enable: true,
    },

    sponsor: {
        enable: true,
        title: '我很可爱，支持一下！',
        methods: [],
    },

    statistics: {
        enable: true,
    }
})
