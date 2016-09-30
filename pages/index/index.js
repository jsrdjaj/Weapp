//index.js
//获取应用实例
var app = getApp();
var type = [
        'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ];
var pageData={
  data:{
    pages:[
      {
            name:'试图容器',
            children:[
                {name:'view',url:'../view/view'},
                {name:'scroll-view',url:''},
                {name:'swiper',url:'../swiper/swiper'}
                ],
      },
      {
            name:'基本内容',
            children:[
                {name:'icon',url:'../icon/icon'},
                {name:'text',url:'../text/text'},
                {name:'progress',url:'../progress/progress'}
                ],
      },
      {
            name:'表单组件',
            children:[
                {name:'button',url:'../button/button'},
                {name:'switch',url:'../switch/switch'},
                {name:'input',url:'../input/input'},
                {name:'input',url:'../input/input'},
                {name:'checkbox',url:'../check-box/check-box'}],
      },
      {
            name:'操作反馈',
            children:[
                {name:'action-sheet',url:'../action-sheet/actionsheet'},
                ],
      }
    ]
  }
  
}

Page(pageData);
