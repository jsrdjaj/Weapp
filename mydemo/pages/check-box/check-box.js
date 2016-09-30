var pageData={
  data:{
    'country':[
      {name:'中国',val:'CHN'},
      {name:'日本',val:'JAP'},
      {name:'美国',val:'USA'},
    ],
    selcountry:'',
    checkboxDemo:[
      {name:'设置初值',value:'10',disabled:false,checked:false},
      {name:'组件禁用',value:'10',disabled:true,checked:false},
      {name:'默认勾选',value:'',disabled:false,checked:true}
    ]
  },
  checkboxChange:function(e){
    var value=e.detail.value;
    var valstring='';
    for(var i in value ){
      valstring+=value[i]+',';
    }
    this.setData({
      selcountry:valstring,
    })
  }
}
Page(pageData)