import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '软件开发工具实践',
  description: '实验报告成果展示',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '实验二', link: '/实验二' },
      { text: '实验三', link: '/实验三' },
      { text: '实验四', link: '/实验四' },
      { text: '实验五', link: '/实验五' },
      { text: '实验六', link: '/实验六' },
      { text: '实验七', link: '/实验七' },
      { text: '实验八', link: '/实验八' },
    ],

    sidebar: [
      {
        text: '实验报告',
        items: [
          { text: '首页', link: '/' },
          { text: '实验二 - Node.js 与 Hexo 环境搭建', link: '/实验二' },
          { text: '实验三 - VS Code 安装与配置', link: '/实验三' },
          { text: '实验四 - Hexo 博客创建与部署', link: '/实验四' },
          { text: '实验五 - VirtualBox 虚拟机搭建', link: '/实验五' },
          { text: '实验六 - 系统配置与环境变量', link: '/实验六' },
          { text: '实验七 - SSH 远程连接与文件传输', link: '/实验七' },
          { text: '实验八 - VitePress 与 CI/CD 部署', link: '/实验八' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/66776776/teamblog' }
    ]
  }
})
