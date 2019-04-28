// pages/bottom/project/project.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: [], //标题列表
    currentTab: 0, //当前项
    cid: 0, //用来请求项目列表的标题 id
    isRefresh: true,
    pagernumber: 1,
    projectList: [], //项目列表
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTitles()
  }, //获取顶部titles
  getTitles: function() {
    var that = this
    wx.request({
      url: app.globalData.baseUrl + '/project/tree/json',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        var list = res.data.data;
        that.setData({
          titleList: list,
        })
        //上面赋值titleList然后下面从list中拿出第一个id赋值给cid进行请求
        that.setData({
          cid: that.data.titleList[0].id,
        })
        //拿到titlelist的数据 去除id字段进行请求下面的数据

        that.getprojectList();

      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  //点击title切换下面的数据
  onTabClick: function(event) {
    //设置选中样式
    this.setData({
      currentTab: event.currentTarget.dataset.index,
      cid: event.currentTarget.dataset.cid,
      pagernumber: 1,
      pagerList: [], //列表数据
      isRefresh: true,
    })
    //列表数据请求
    this.getprojectList()

  },
  //获取列表数据
  getprojectList: function() {
    wx.showNavigationBarLoading();
    var that = this;　
    wx.request({
      url: app.globalData.baseUrl + '/project/list/' + that.data.pagernumber + '/json?' + 'cid=' + that.data.cid,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();


        var list = res.data.data.datas
        if (that.data.isRefresh) {
          that.setData({
            projectList: list,
            isRefresh: false
          })
        } else {
          var tempList = that.data.projectList;
          var resultlist = tempList.concat(list)
          that.setData({
            projectList: resultlist
          })

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

        }


      },
      fail: function(res) {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      },
      complete: function(res) {},
    })
  },
  onItemClick: function(event) {

    wx.setClipboardData({
      data: event.currentTarget.dataset.url,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    var that = this;
    var page = that.data.pagernumber + 1;
    that.setData({
      pagernumber: page
    })
    //列表数据请求
    that.getprojectList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})