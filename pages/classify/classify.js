Page({
  data: {
    current: 0,
    duration:300
  },
  switchSlider: function (event) {
    this.setData({
      current:event.target.dataset.index
    });
  },
  changeSlider: function (event) {
    this.setData({
      current:event.detail.current
    })
  }

})
