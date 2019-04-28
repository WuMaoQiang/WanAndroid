// pages/bottom/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}, //动画
    modalName: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    const animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
      // delay:1000 //多个动画之间的delay
    })
    this.animation = animation

    //为什么要使用定时器呢，可能是因为进入页面还没显示动画效果就已经播放完了  所以需要定时器延迟

    var next = true;
    //连续动画关键步骤
    setInterval(function() {
      if (next) {
        this.animation.scale(0.88).step()
        next = !next;
      } else {
        this.animation.scale(1).step()
        next = !next;
      }
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 2000)
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
  //复制 我的博客地址
  myblog: function(event) {
    var dataUrl = ''
    if (event.currentTarget.dataset.which == 'jianshu') {
      dataUrl = ' https://blog.csdn.net/xiaoqiang_0719'


    } else if (event.currentTarget.dataset.which == 'github') {
      dataUrl = 'https://github.com/WuMaoQiang'

    } else {
      dataUrl = 'https://blog.csdn.net/xiaoqiang_0719'

    }
    wx.setClipboardData({
      data: dataUrl,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  //个人概述
  personsummarize: function() {
    wx.navigateTo({
      url: '../../personsummarize/personsummarize',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  //工作经历
  work: function() {

    wx.navigateTo({
      url: '../../workexperience/workexperience',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //专业技能
  professionalskill: function() {
    wx.navigateTo({
      url: '../../professionalskill/professionalskill',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //项目经验
  projectexperience: function() {
    wx.navigateTo({
      url: '../../projectexperience/projectexperience',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //自我评价
  selfassessment: function() {
    wx.navigateTo({
      url: '../../selfassessment/selfassessment',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //关于项目
  aboutproject: function() {
    wx.navigateTo({
      url: '../../aboutproject/aboutproject',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})