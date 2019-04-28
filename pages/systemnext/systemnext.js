// pages/systemnext/systemnext.js
var app = getApp();
var that = this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typelist: [], //标签列表
    cid: "",
    pagerList: [], //列表数据
    isRefresh: false,
    pagernumber: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    //赋值title
    wx.setNavigationBarTitle({
      title: options.title
    })
    //从globalData获取上一个页面存的标签列表
    var listtitle = app.globalData.systemtypelist;
    //初始化把第一个标签设置为 可见状态（visible为接口返回的状态 1代表选中 0代表未选中）
    for (var i in listtitle) {
      if (i == 0) {
        listtitle[0].visible = 1
      } else {
        listtitle[i].visible = 0
      }
    }
    //设置标签列表给typelist
    that.setData({
      typelist: listtitle,
      cid: app.globalData.systemtypelist[0].id,
    })


    this.getPagerData()
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

    this.setData({
      pagernumber: 0,
      pagerList: [] //列表数据
    })
    this.getPagerData();


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
    that.getPagerData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //点击上面的标签，切换数据
  choosetype: function(event) {
    that = this;
    var index = event.currentTarget.id;
    var listtitle = that.data.typelist;
    //修改listtitle的visible状态
    for (var i in listtitle) {
      if (i == index) {
        listtitle[i].visible = 1
      } else {
        listtitle[i].visible = 0
      }
    }
    //设置  改变状态后的数据
    that.setData({
      typelist: listtitle,
      cid: that.data.typelist[index].id,
      pagernumber: 0,
      isRefresh: true,
    })

    that.getPagerData()

  }, //获取列表数据
  getPagerData: function() {
    console.log(app.globalData.baseUrl + '/article/list/' + that.data.pagernumber + '/json?cid=' + that.data.cid)
    that = this
    wx.showNavigationBarLoading()
    wx.request({
      url: app.globalData.baseUrl + '/article/list/' + that.data.pagernumber + '/json?cid=' + that.data.cid,
      method: 'GET',
      success: function(res) {
        console.log(res)
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
        var list = res.data.data.datas

        if (that.data.isRefresh) { //isRefres为true表示第一次
          that.setData({
            pagerList: list,
            isRefresh: false
          })
        } else { //表示 上啦加载  首先获取当前的数据 赋值给templist 然后使用concat方法讲刚刚获取到的list连接原先的pagerlist 产生一个新的resultlist

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
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
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
   * item点击事件
   */
  detail: function(event) {
    that = this;
    var link = event.currentTarget.id
    wx.setClipboardData({
      data: link,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

})