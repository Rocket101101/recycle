//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'The journey starts...',
    src: 'https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700270/61548263-smiling-green-recycle-bin-cartoon-mascot-character-holding-a-recycle-sign.jpg'
  },

  //调用图片选择和相机
  chooseImg: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], //可以指定是原图还是压缩图，'original'
      sourceType: ['album', 'camera'], //可以指定来源是相册还是相机
      success: function (res) {
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        _this.setData({
          img_1: res.tempFilePaths
        })
      }
    })
  },

  //预览图片
  preview_img: function () {
    wx.previewImage({
      current: this.data.img_1, // 当前显示图片的http链接
      urls: this.data.img_1 // 需要预览的图片http链接列表
    })
  }

})
