module.exports = {
    title: '.Net 实战笔记',
    description: '熟知.NET Core核心组件设计原理;基于DDD开发云原生微服务应用;掌握.NET Core工程设计最佳实践;提升K8s微服务部署与维护技能',
    base: '/dotnet/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://i.loli.net/2020/02/25/AOjBhkIxtb8dRgl.png'
        }]
    ],
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        ['@vuepress/google-analytics', {
            ga: 'UA-131744342-1'
        }]
    ],
    themeConfig: {
        repo: 'https://github.com/colin-chang/dotnet',
        nav: [{
                text: 'Get Start',
                link: '/basic/introduction'
            },
            {
                text: 'Books',
                items: [
                    { text: 'Python', link: 'https://ccstudio.com.cn/python' },
                    { text: 'Linux', link: 'https://ccstudio.com.cn/linux' },
                    { text: '系统架构设计', link: 'https://ccstudio.com.cn/architecture' }
                  ]
            },
            {
                text: 'Blog',
                link: 'https://ccstudio.com.cn/'
            }
        ],
        sidebar:[
            {
                title: '.Net基础',
                collapsable: true,
                children: [
                    '/basic/introduction',
                    '/basic/thread',
                    '/basic/asynchronous'
                ]
            },
            {
                title: '依赖注入',
                collapsable: true,
                children: [
                    '/di/ioc',
                    '/di/dm',
                    '/di/di',
                    '/di/register',
                    '/di/consume',
                    '/di/lifetime',
                    '/di/aspnet',
                    '/di/src'
                ]
            },
            {
                title: '文件系统',
                collapsable: true,
                children: [
                    '/file_system/fileprovider'
                ]
            },
            {
                title: '配置选项',
                collapsable: true,
                children: [
                    '/config/configuration',
                    '/config/options'
                ]
            },
            {
                title: '日志框架',
                collapsable: true,
                children: [
                    '/log/framework',
                    '/log/elk',
                    '/log/exceptionless'
                ]
            },
            {
                title: '承载系统',
                collapsable: true,
                children: [
                    '/hosting/hosted_service'
                ]
            },
            {
                title: '管道',
                collapsable: true,
                children: [
                    '/pipeline/pipeline',
                    '/pipeline/middleware'
                ]
            },
            {
                title: '静态文件',
                collapsable: true,
                children: [
                    '/pipeline/staticfiles'
                ]
            },
            {
                title: '异常处理',
                collapsable: true,
                children: [
                    '/pipeline/exception'
                ]
            },
            {
                title: '认证授权',
                collapsable: true,
                children: [
                    '/auth/auth',
                    '/auth/jwt'
                ]
            },
            {
                title: '其他组件',
                collapsable: true,
                children: [
                    '/component/envar',
                    '/component/cachesession'
                ]
            },
            {
                title: 'EF Core',
                collapsable: true,
                children: [
                    '/ef/basic'
                ]
            },
            {
                title: 'WebAPI',
                collapsable: true,
                children: [
                    '/api/basic',
                    '/api/route',
                    '/api/multi-version',
                    '/api/openapi'
                ]
            },
            {
                title: '其他主题',
                collapsable: true,
                children: [
                    '/others/automapper',
                    '/others/dapper',
                    '/others/staticize',
                    '/others/unittest',
                    '/others/https'
                ]
            }
        ],
        displayAllHeaders: true,
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    },
    markdown: {
        lineNumbers: true
    }
}
