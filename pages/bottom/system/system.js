// pages/system/system.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    systemList: [],
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: app.globalData.baseUrl + '/tree/json',
      method: 'GET',
      success: function(res) {
        that.setData({
          systemList: res.data.data
        })
      }
    })


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

  }, systemListClick:function(event){
    var that=this;
    console.log(event)
    var index = event.currentTarget.dataset.id //拿到当前是那一列，然后获取这一列的数据 存储到gloableData中 ，跳转的下个页面用
    app.globalData.systemtypelist = that.data.systemList[index].children
    wx.navigateTo({
      url: '../../systemnext/systemnext?title=' + that.data.systemList[index].name,
    })



  }
})