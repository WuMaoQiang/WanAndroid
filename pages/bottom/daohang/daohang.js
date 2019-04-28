// pages/daohang/daohang.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courselist: [],
    screenHeight: 0,
    currentTab: 0,
    toview: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var tempHeight = 0
    wx.getSystemInfo({
      success: function(res) {
        // 获取可使用窗口宽度
        let clientHeight = res.windowHeight;
        // 获取可使用窗口高度
        let clientWidth = res.windowWidth;
        // 算出比例
        let ratio = 750 / clientWidth;
        // 算出高度(单位rpx)
        let height = clientHeight * ratio;
        // 设置高度
        tempHeight = height;
      },
      fail: function(res) {},
      complete: function(res) {},
    })

    that.setData({
      screenHeight: tempHeight
    })




    this.getCurseList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //获取左侧分类列表
  getCurseList: function() {
    var that = this;
    wx.request({
      url: app.globalData.baseUrl + '/navi/json',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {

        that.setData({
          courselist: res.data.data,

        })

      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  //点击左侧分类列表，切换选中项 更改数据
  choosetype: function(event) {
    this.setData({
      currentTab: event.currentTarget.id
    })
    this.setData({
      toview: "date" + event.currentTarget.id
    })
  },
  //右侧item点击事件
  itemInClick: function(event) {
    var url=event.currentTarget.dataset.url;
    wx.setClipboardData({
      data: url,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  }
})