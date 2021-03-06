//index.js
//获取应用实例
const app = getApp()
const uploadFileUrl = 'http://win12r2.eastus.cloudapp.azure.com:8000/upload1/'

Page({
  data: {
    motto: 'Click to start...',
    imgsrc: null,
    //showloading: false,
    src: 'https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700270/61548263-smiling-green-recycle-bin-cartoon-mascot-character-holding-a-recycle-sign.jpg'
  },

  //调用图片选择和相机
  chooseImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], //可以指定是原图还是压缩图，'original'
      sourceType: ['album', 'camera'], //可以指定来源是相册还是相机
      success: function (res) {
        console.log(res)
        that.setData({
          imageSrc: res.tempFilePaths[0]
        })
      }
    })
  },
  
  //上传图片
  Upload: function (e) {  // 绑定的upload button
    //loading
    wx.showLoading({
      title: 'Loading',
    })

    var that = this
    wx.uploadFile({  // 上传图片
      url: uploadFileUrl,
      name: 'picture',
      filePath: that.data.imageSrc,
      formData: {
        'user': 'test'
      },

      success: function (res) {
        wx.hideLoading()
        console.log('imageSrc is:', that.data.imageSrc)
        console.log('uploadImage success, res is:', res)
        console.log(res.data);
        //wx.showModal({
        //  content: res.data,
        //  showCancel: false,
        //  confirmText: "确定"
       // })
        app.globalData.tp = res.data;
        console.log('server result: ' + app.globalData.tp);

        wx.navigateTo({
          url: '../result/result?tp=' + app.globalData.tp
        })
      },
      fail: function ({ errMsg }) {
        wx.hideLoading()
        console.log('uploadImage fail, errMsg is', errMsg)
      }        
    })
  },

  reload: function (e) {  // 绑定的reload button
    wx.hideLoading()
    this.setData({
      imageSrc: null
    })
  }
  
})