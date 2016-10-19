Page({
  data:{
    imgUrls:[
      "/images/ban1.jpeg",
      "/images/ban2.jpeg",
      "/images/ban3.jpeg"
    ],
    indicatordots:true,
    autoplay:true,
    interval:5000,
    duration:300,
    list:[],
    loadinghidden:false,
    refreshhidden:true,
    loadmorehidden:true
  },
  onLoad:function(){
    var that=this;
    wx.request({
      url:"http://liuxiaonan.applinzi.com/list.json",
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res.data);
        setTimeout(function(){
          that.setData({
            list:res.data,
            loadinghidden:true
          });
        },1500);
      },

    });
  },

  onPullDownRefresh:function(){
    console.log(1);
    //下拉刷新
    this.setData({
      refreshhidden:false
    });
    var that=this;
    wx.request({
      url:"http://liuxiaonan.applinzi.com/refresh.json",
      header: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        that.setData({
          list:res.data
        })
      },
      complete:function(){
        console.log(2);
        setTimeout(function(){
          that.setData({
            refreshhidden:true
          });
        },1500);

        wx.stopPullDownRefresh();
      }
    })
  },


  //上拉加载
  actionTolower: function () {
    this.setData({
      loadmorehidden:false
    });
    var that=this;
    wx.request({
      url:"http://liuxiaonan.applinzi.com/more.json",
      success: function (res) {
        // console.log(res.data);

        setTimeout(function(){
          that.setData({
            loadmorehidden:true,
            list:that.data.list.concat(res.data)
          });

        },2000)
      }
    })
  }


})
