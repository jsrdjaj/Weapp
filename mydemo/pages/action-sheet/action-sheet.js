var pageData={
    data:{
        actionSheetHidden: true,
        actionSheetItems: ['item1', 'item2', 'item3', 'item4'],
        selMsg:''
    },
    actionSheetTap: function(e) {
        this.setData({
        actionSheetHidden: !this.data.actionSheetHidden
        })
    },
    actionSheetChange: function(e) {
        console.log(e);
        this.setData({
        actionSheetHidden: !this.data.actionSheetHidden,
        selMsg:'您的选择是:取消',
        })
    },
    bindItemTap:function(e){
        console.log(e);
        var name=e.currentTarget.dataset.name;
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden,
            selMsg:'您的选择是:'+name,
        })

    }
}
Page(pageData)