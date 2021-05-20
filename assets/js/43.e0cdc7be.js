(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{404:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"第三方登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方登录"}},[t._v("#")]),t._v(" 第三方登录")]),t._v(" "),a("p",[t._v("除了自定义身份认证之外，"),a("code",[t._v("Identity Server")]),t._v("也支持使用第三方登录。很多知名平台都提供了第三方登录，如 Google，Github，Microsoft，微信，微博等。下面我们以 Google 和 Github 为例简单演示第三方登录集成，其它第三方认证各平台申请方式略有差异，但集成方式基本相同。")]),t._v(" "),a("h2",{attrs:{id:"_1-google"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-google"}},[t._v("#")]),t._v(" 1. Google")]),t._v(" "),a("h3",{attrs:{id:"_1-1-申请google认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-申请google认证"}},[t._v("#")]),t._v(" 1.1 申请Google认证")]),t._v(" "),a("p",[t._v("使用第三方授权首先需要到对应平台下申请认证信息。Google 认证信息需要到"),a("a",{attrs:{href:"https://console.developers.google.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Cloud Platform 控制台"),a("OutboundLink")],1),t._v("申请。")]),t._v(" "),a("p",[t._v("我们首先创建一个项目。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/Snip6uYOj8tLacP.png",alt:"创建GCP项目"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/FDnMyRl79aYgCzG.png",alt:"填写GCP项目信息"}})]),t._v(" "),a("p",[t._v("项目创建完成后，进入 API 和服务。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/qIukeGUx3avRCQf.png",alt:"GCP API和服务"}})]),t._v(" "),a("p",[t._v("第一次使用时需要创建一个 OAuth 同意屏幕。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/52t9QVCRzYmFJhn.png",alt:"创建OAuth同意屏幕"}})]),t._v(" "),a("p",[t._v("OAuth 同意屏幕创建过程不再逐步讲解，下图是其摘要信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/kzTFPaO8VuqSLDM.png",alt:"OAuth同意屏幕摘要"}})]),t._v(" "),a("p",[t._v("接下来开始正式创建凭据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/axts7kA8YB4yp3Q.png",alt:"创建凭据"}})]),t._v(" "),a("p",[a("code",[t._v("Identity Server")]),t._v(" 是Web应用，所以下面我们选择创建 Web应用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/etLrnxiwN4zAGE7.png",alt:"创建Web应用"}})]),t._v(" "),a("p",[t._v("下面根据"),a("code",[t._v("Identity Server")]),t._v("信息填写Web应用客户端信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/FIctldn13jhy5pO.png",alt:"完善客户端信息"}})]),t._v(" "),a("p",[t._v("客户端创建完成后得到下图的凭据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/4SxcJUyuBZTm3C2.png",alt:"GCP客户端凭据"}})]),t._v(" "),a("h3",{attrs:{id:"_1-2-集成google认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-集成google认证"}},[t._v("#")]),t._v(" 1.2 集成Google认证")]),t._v(" "),a("p",[t._v("集成 Google 认证需要借助"),a("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.Google",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft.AspNetCore.Authentication.Google"),a("OutboundLink")],1),t._v(" Nuget 包。")]),t._v(" "),a("p",[a("code",[t._v("Identity Server")]),t._v("默认项目模板中已经集成了 Google 认证，我们只需要替换为刚申请的凭证信息即可。")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceCollection")]),t._v(" services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuthentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddGoogle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SignInScheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IdentityServerConstants"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExternalCookieAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register your IdentityServer with Google at https://console.developers.google.com")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable the Google+ API")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the redirect URI to https://localhost:5000/signin-google")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"778213714307-cjpuh2td8uml33lke0n818t7ft37kfvb.apps.googleusercontent.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Eiv41aO7KHdq2BNSpXx5Vkzr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h3",{attrs:{id:"_1-3-客户端google登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-客户端google登录"}},[t._v("#")]),t._v(" 1.3 客户端Google登录")]),t._v(" "),a("p",[t._v("这里我们使用 "),a("a",{attrs:{href:"https://github.com/colin-chang/AuthSamples/tree/main/ColinChang.IdentityServer.ImplicitJavaScriptClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("Implicit"),a("OutboundLink")],1),t._v(" 中的客户端为例来演示 Google 认证过程。")]),t._v(" "),a("p",[t._v("在客户端登录被重定向到"),a("code",[t._v("Identity Server")]),t._v("后我们可以看到 Google 认证的入口。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/JlkFs3LVa7cNQW6.png",alt:"Google登录"}})]),t._v(" "),a("p",[t._v("点击 Google 认证按钮被重定向到 Google 认证授权页面")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/mhPoRQDBCKF7GZ5.png",alt:"Google认证"}})]),t._v(" "),a("p",[t._v("认证通过后可以在客户端拿到 Google 的 "),a("code",[t._v("Identity")]),t._v(" 数据如下图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/MzrSWDZcv73sCiF.png",alt:"Google Identity"}})]),t._v(" "),a("h2",{attrs:{id:"_2-github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-github"}},[t._v("#")]),t._v(" 2. Github")]),t._v(" "),a("h3",{attrs:{id:"_2-1-申请github认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-申请github认证"}},[t._v("#")]),t._v(" 2.1 申请Github认证")]),t._v(" "),a("p",[t._v("Github 认证信息需要到"),a("a",{attrs:{href:"https://github.com/settings/profile",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings / Developer settings"),a("OutboundLink")],1),t._v("申请。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/kvAdzFpIa7qenCU.png",alt:"Github Settings"}})]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Developer settings")]),t._v("中创建 OAuth 应用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/ldsrFbeyUNQJ2gR.png",alt:"Github创建应用"}}),t._v(" "),a("img",{attrs:{src:"https://i.loli.net/2021/05/20/4N8LUyJhelgbrjH.png",alt:"注册OAuth App"}})]),t._v(" "),a("p",[t._v("应用创建完毕后可以得到凭证如下图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/micGbH4z5guEP1N.png",alt:"github-client-credential.png"}})]),t._v(" "),a("h3",{attrs:{id:"_2-2-集成github认证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-集成github认证"}},[t._v("#")]),t._v(" 2.2 集成Github认证")]),t._v(" "),a("p",[t._v("集成 Github 认证需要借助"),a("a",{attrs:{href:"https://www.nuget.org/packages/AspNet.Security.OAuth.GitHub/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AspNet.Security.OAuth.GitHub"),a("OutboundLink")],1),t._v(" Nuget 包。")]),t._v(" "),a("p",[t._v("Github 认证集成方式与 Google 基本一致，更多内容可以参考"),a("a",{attrs:{href:"https://github.com/aspnet-contrib/AspNet.Security.OAuth.Providers/blob/dev/samples/Mvc.Client/Startup.cs",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方案例"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceCollection")]),t._v(" services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuthentication")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddGitHub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SignInScheme "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" IdentityServerConstants"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExternalCookieAuthenticationScheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"49e302895d8b09ea5656"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientSecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"98f1bf028608901e9df91d64ee61536fe562064b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user:email"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"_2-3-客户端github登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-客户端github登录"}},[t._v("#")]),t._v(" 2.3 客户端Github登录")]),t._v(" "),a("p",[t._v("这里我们继续使用 "),a("a",{attrs:{href:"https://github.com/colin-chang/AuthSamples/tree/main/ColinChang.IdentityServer.ImplicitJavaScriptClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("Implicit"),a("OutboundLink")],1),t._v(" 中的客户端为例来演示 Github 认证过程。")]),t._v(" "),a("p",[t._v("在客户端登录被重定向到"),a("code",[t._v("Identity Server")]),t._v("后我们可以看到Google认证的入口。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/2WsfLzwX3jDgSaA.png",alt:"Github登录"}})]),t._v(" "),a("p",[t._v("点击 Github 认证按钮被重定向到 Github 认证授权页面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/NRyxhcLIQM4DvZo.png",alt:"Github认证"}}),t._v(" "),a("img",{attrs:{src:"https://i.loli.net/2021/05/20/mtofyqj1RFxPpvI.png",alt:"同意授权页面"}})]),t._v(" "),a("p",[t._v("认证通过后可以在客户端拿到 Github 的"),a("code",[t._v("Identity")]),t._v("数据如下图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2021/05/20/VosGHXdal9AbCuN.png",alt:"Github Identity"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);