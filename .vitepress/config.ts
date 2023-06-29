import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "音留文档",
  description: "音留网络官方文档",
  base: '/docs/',
  lang: 'zh-cn',
  srcDir: './index',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档主页', link: '/' },
      { text: '音留官网', link: 'https://www.holdvoice.cn' },
      { text: '壹阿尔', link: 'https://www.yiair.cc' },
      { text: '音留社区', link: 'https://club.holdvoice.cn' },
      { text: '堂瞰工艺', link: 'https://tc.holdvoice.cn' },
    ],

    sidebar: [
      {
        text: 'HoldVoice 音留网络',
        items: [
          { text: '账号系统', link: '/holdvoice/account' },
          { text: '联系方式', link: '/contact#音留网络统括理事会' },
        ]
      },
      {
        text: 'Yiair 壹阿尔',
        items: [
          { text: '基本服务协议', link: '/yiair' },
          { text: '联系方式', link: '/contact#壹阿尔团队' },
        ]
      },
      {
        text: 'HoldVoice Club 音留社区',
        items: [
          { text: '用户协议', link: '/club/terms' },
          { text: '社区规范', link: '/club/protocol' },
          { text: '隐私政策', link: '/club/privacy' },
          { text: '联系方式', link: '/contact#音留社区管理组' },
        ]
      },
      {
        text: 'TangibleCraft 堂瞰社区',
        items: [
          { text: '玩家条款', link: '/tangiblecraft' },
          { text: '联系方式', link: '/contact#堂瞰工艺风纪委员' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HoldVoice' }
    ]
  }
})
