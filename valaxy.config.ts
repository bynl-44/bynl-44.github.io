import type {UserThemeConfig} from 'valaxy-theme-yun'
import {defineValaxyConfig} from 'valaxy'

// add icons what you will need
const safelist = [
    'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
    // site config see site.config.ts

    theme: 'yun',

    modules: {
        rss: {
            enable: true,
            fullText: false,
        }
    },

    unocss: {
        safelist,
    },


})
