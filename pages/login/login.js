Page({
  data:{
    modalHidden:false,
    userInfor:{
      username:'',
      password:''
    },
    Storageuser:[],
    haslogin:''
  },
  onLoad:function () {

  },
  onShow:function () {
    // var u = wx.getStorageSync('')
    for(var i=0;i<this.data.Storageuser.length;i++){
      console.log(this.data.Storageuser[i]);
      var u = wx.getStorageSync(this.data.Storageuser[i]);
    }
    // console.log(u);
    if(!u){
      this.setData({
        userInfor:{
          username:'',
          password:''
        },
        modalHidden:false
      });
    }else{

    }

  },
  modalConfirm:function () {
    // console.log("ok");
    wx.setStorageSync(this.data.userInfor.username,this.data.userInfor.username+"&&"+this.data.userInfor.password);
    this.data.Storageuser.push(this.data.userInfor.username);
    this.setData({
      Storageuser:this.data.Storageuser,
      modalHidden:true
    });
    console.log(this.data.Storageuser);

  },
  modalCancel:function () {
    this.setData({
      modalHidden:true
    })
  },
  saveUsername:function (event) {
    this.setData({
      'userInfor.username':event.detail.value
    })
  },
  savePassword:function (event) {
    this.setData({
      'userInfor.password':event.detail.value
    })
  }
})
