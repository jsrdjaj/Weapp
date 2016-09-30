var PageData={
  data:{
    // text:"这是一个页面"
    switch:[
        {
            title:'选中',
            checked:true,
            type:'switch',
            bindchange:"switch1Change"
        },
        {
            title:'未选中',
            checked:false,
            type:'switch',
            bindchange:"switch2Change"
        },
        
        {
            title:'禁用',
            checked:true,
            type:'switch',
            bindchange:"",
            disabled:true
        }
        
    ],
    checkbox:[
        {
            title:'选中',
            checked:true,
            type:'checkbox',
            bindchange:"switch3Change"
        },{
            title:'未选中',
            checked:false,
            type:'checkbox',
            bindchange:"switch4Change"
        },
        {
            title:'禁用',
            checked:true,
            type:'checkbox',
            bindchange:"",
            disabled:true
        }
    ]
  }
}
for(var i = 1; i <= 5; ++i) {
  (function(index) {
    PageData[`switch${index}Change`] = function(e) {
      console.log(`switch${index}发生change事件，携带值为`, e.detail.value)
      var obj = {}
      obj[`switch${index}Checked`] = e.detail.value
      this.setData(obj)
      obj = {}
      obj[`switch${index}Style`] = e.detail.value ? '' : 'text-decoration: line-through'
      this.setData(obj)
    }
  })(i)
}
Page(PageData)