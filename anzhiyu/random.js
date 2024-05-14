var posts=["2024/05/12/hello-world/","2024/05/13/博客更新！欢迎光临！/","2024/05/14/新的Bing镜像！秒过人机验证！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };