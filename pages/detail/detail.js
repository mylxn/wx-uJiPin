Page({
  data: {
    id:0,
    imgUrls:[],
    indicatordots:true,
    autoplay:true,
    interval:5000,
    duration:300,
    detail_name:"",
    nowprice:"",
    marketprice:"",
    hassaled:""
  },
  onLoad: function (params) {
    this.setData({
      id:params.id
    });
    console.log(params.id);
  },
  onReady: function (){
    var that = this;
    wx.request({
      url:"http://liuxiaonan.applinzi.com/detail"+that.data.id+".json",
      success:function(res){
        wx.setNavigationBarTitle({
          title:res.data.title,
          success: function () {
            that.setData({
              imgUrls:res.data.imgUrls,
              detail_name:res.data.goodname,
              nowprice:res.data.nowprice,
              marketprice:res.data.marketprice,
              hassaled:res.data.hassaled
            })
          }
        })
      }
    });

  }
})
