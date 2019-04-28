// pages/projectexperience/projectexperience.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typelist: [{
      visible: 1,
      name: '直属小管家'
    }, {
      visible: 0,
      name: '人生玩家'
    }, {
      visible: 0,
      name: '云学'
    }, {
      visible: 0,
      name: '华友汇'
    }], //标签列表
    time: "2018年3月-2018年9月  ",
    des: "诺信集团内部员工使用的含组织架构、业绩查询、审批等功能的OA系统",
    duty: " 1. 本项目采用MVP模式进行项目开发\n2. 使用MPAndroidChart类库实现柱状图折线图展示效果 \n3. 封装基于okhttp的网络请求框架进行网络请求 \n4. 使用glide图片下载缓存库实现图片下载裁剪等功能 \n5. 使用友盟推送和分享实现推送与分享功能 \n6. 使用自定义组件实现手势解锁功能\n7. 使用calendarview实现日程模块日历展示样式修改等功能",
    num: 0,
  },
  choosetype: function(event) {
    var that = this;
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
      num: index
    })
    if (this.data.num == 0) {
      that.setData({
        time: "2018年3月-2018年9月  ",
        des: "诺信集团内部员工使用的含组织架构、业绩查询、审批等功能的OA系统",
        duty: " 1. 本项目采用MVP模式进行项目开发\n2. 使用MPAndroidChart类库实现柱状图折线图展示效果 \n3. 封装基于okhttp的网络请求框架进行网络请求 \n4. 使用glide图片下载缓存库实现图片下载裁剪等功能 \n5. 使用友盟推送和分享实现推送与分享功能 \n6. 使用自定义组件实现手势解锁功能\n7. 使用calendarview实现日程模块日历展示样式修改等功能",
      })
    } else if (this.data.num == 1) {
      that.setData({
        time: "2016年7月-2017年9月  ",
        des: "人生玩家是一款个性化旅行定制服务项目致力于制造旅行的愉悦",
        duty: "   1. 本项目使用android+h5进行hybrid混合开发，本人负责Android端应用开发全部工作 \n2. 使用SlidingMenu类库实现侧滑菜单栏功能 \n3. 使用Picasso图片下载缓存库实现图片下载裁剪等功能 \n4. 使用极光推送实现通知的单点推送一对多推送等 \n5. 使用微信开放平台和支付宝开放平台实现微信支付和支付宝支付功能 \n6. 使用ShareSDK实现产品分享以及微信微博等第三方登陆功能 \n7. 使用智齿客服sdk实现人工客服以及在线客服等功能 \n8. 使用腾讯的Bugly实现热更新功能及异常上报和运营统计",
      })

    } else if (this.data.num == 2) {
      that.setData({
        time: "2015年10月-2016年6月 ",
        des: " 世华云学院是一款面向大众的管理教育O2O平台，目前已有40W+用户在使用",
        duty: "     1. 本项目采用MVC模式进行项目开发\n2. 负责Android端应用开发全部工作\n3. 使用Volley框架实现网络请求以及图片缓存\n4. 使用Jpush实现消息推送\n5. 使用自定义VideoView + MediaController实现视频播放、暂停、快进、快退、横竖屏播放等\n6. 使用奥点云直播SDK实现视频直播，在线交流，送礼物等功能\n7. 使用MediaPlayer+SeekBar实现音频播放以及手动控制播放时长等功能\n8. 使用微信sdk实现微信支付，微信分享，微信授权联合登录等功能\n9. 使用SwipeRefreshLayout组件实现下拉刷新功能",
      })

    } else if (this.data.num == 3) {
      that.setData({
        time: "2014年7月-2015年10月",
        des: "北京世华智业集团2015年全方位聚焦推出的华友汇科技，是集社交、商务、资本三维 一体的线上线下平台",
        duty: "  1. 基于环信sdk的IM社交功能\n2. 微信QQ第三方sso授权登录功能\n3. 用户在线购物在线支付功能\n4. 积分商城，商品团购，商品搜索等功能\n5. 商品分享，商品展示等功能\n6. 个人中心信息展示，头像上传等功能\n7. 使用友盟实现分享内容至微信朋友圈QQ微博等平台"
      })

    }
    // 不知道为啥switch不好使。。 
    // switch (this.data.num) {
    //   case 0:

    //     break
    //   case 1:
    //     console.log("111")

    //     break;
    //   case 2:

    //     break
    //   case 3:

    //     break
    //   default:

    //     break
    // }


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

  }
})