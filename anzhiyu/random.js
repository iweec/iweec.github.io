var posts=["2024/05/13/博客更新！欢迎光临！/","2024/05/14/新的Bing镜像！秒过人机验证！/","2024/05/15/GPT-4o震撼发布！Plus功能免费！/","2024/05/15/Arc浏览器！为取代Chrome而生/","2024/05/16/GPT-4-API免费用！签到即可领取！/","2024/05/27/家中废电脑改装Ubuntu服务器/","2024/07/05/分享下如何用香橙派搭建Ubuntu服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };