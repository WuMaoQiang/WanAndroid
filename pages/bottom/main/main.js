// pages/main/main.js
const app = getApp()
var that = this
Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    pagerList: [],
    pagernumber: 0,
    isloadmore: false,
    isRefresh: true //初始化为true或者false都无所谓，因为第一次请求true的话就直接赋值pagelist，如果为false则会获取pagelist与当前获取的list合并（初始化pagelist也为空数组 所以无所谓）
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    /**
     * banner图 请求
     */
    wx.request({
      url: app.globalData.baseUrl + '/banner/json',
      method: 'GET',
      success: function(res) {
        console.log(res)
        that.setData({
          banner: res.data.data
        })
      }
    })

    this.LoadListfunction()


  },

  LoadListfunction: function() {

    /**
     * 在当前页面显示导航条加载动画，并进行下面数据的请求
     */
    wx.showNavigationBarLoading()
    wx.request({
      url: app.globalData.baseUrl + '/article/list/' + that.data.pagernumber + '/json',
      method: 'GET',
      success: function(res) {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
        var list = res.data.data.datas

        if (that.data.isRefresh) {
          that.setData({
            pagerList: list,
            isRefresh: false
          })
        } else {
          var templist = that.data.pagerList
          var resultlist = templist.concat(list)
          that.setData({
            pagerList: resultlist
          })
        }


        if (list.length == 0) {
          wx.showToast({
            title: '没有更多数据了...',
            icon: 'none',
            duration: 1500,
            mask: true,
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        }

      },
      fail: function() {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
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

    that = this;
    that.setData({
      pagernumber: 0,
      isRefresh: true,
    })
    that.LoadListfunction()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    that = this;
    var page = that.data.pagernumber + 1;
    that.setData({
      pagernumber: page
    })
    that.LoadListfunction()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: 'wanAndroid-开放API',
      imageUrl: 'https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png',
      path: '/pages/bottom/main/main'
    }
  },
  imageClick: function(event) {
    wx.showModal({
      title: '提示',
      content: "web-view组件暂不支持个人类型的小程序使用",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })


    console.log(event.currentTarget.id)
  },
  detail: function(event) {
    that = this;
    var link = event.currentTarget.id
    wx.navigateTo({
      url: '../../web/web?link=' + link,
    })

  },
})