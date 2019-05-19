// pages/photo/takephoto.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    foursrc: 'https://previews.123rf.com/images/chudtsankov/chudtsankov1603/chudtsankov160300047/55651246-four-color-recycle-bins-cartoon-character-on-a-sunny-hill.jpg'
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
  },

  //向服务器端上传图片 
  //wx.uploadFile({
  //  url: 'https://win12r2.eastus.cloudapp.azure.com:8000', //服务器url
    //filePath: this.data.img_1, //要上传的文件路径，string类型
    //name: 'uploadfile', //后台接口规定的关于图片的请求参数
    //header: {
    //  'content-type': 'multipart/form-data'
    //}, // 设置请求的 header
    //formData: {}, // HTTP 请求中其他额外的参数
    //success: function (res) {
    //},
    //fail: function (res) {
    //}
  //})


})