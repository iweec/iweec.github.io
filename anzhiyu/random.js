var posts=["2024/05/12/hello-world/","2024/05/13/博客更新！欢迎光临！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };