
var pageData={
    data:{
        imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        vertical:false,
        current:0,
        currentMsg:'当前显示第1张选项卡'
    },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  attrChange:function(e){
    console.log(e.currentTarget.id);
    var id=e.currentTarget.id;
    var attr=['indicatorDots','autoplay','interval','duration','vertical','current'];
    var data={};
    for(var i = 0;i<attr.length;i++){
      if( attr[i]==id){
        data[attr[i]]=e.detail.value;
      }else{
        data[attr[i]]=this.data[attr[i]];
      }
    }
    console.log(data);
    this.setData(data);
  },
  swiperChange:function(e){
    // console.log(e.detail.current)
    var num=e.detail.current+1;
    this.setData({
      currentMsg:'当前显示第'+num+'张选项卡',
    });
  }
}
Page(pageData)