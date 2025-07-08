import {defineThemeConfig} from 'valaxy-theme-yun'

export default defineThemeConfig({
    banner: {
        enable: true,
        title: ['北', '苑', '南', '路', '44', '号'],
        cloud: {
            enable: true,
        },
    },

    pages: [
        {
            name: 'home',
            url: '/',
            icon: 'i-ri-home-line',
            color: '#00a5e7',
        },
        {
            name: 'about',
            url: '/about/',
            icon: 'i-ri-user-line',
            color: '#00a5e7',
        },
    ],

    footer: {
        since: 2025,
    },

    colors: {
        primary: '#b8376f'
    },

    bg_image: {
        enable: true,
        url: '/images/bg_1.jpg',
        dark: '/images/bg_dark_2.jpg',
        opacity: 1,
    },
})