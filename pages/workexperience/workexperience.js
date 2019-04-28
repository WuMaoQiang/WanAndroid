const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    basicsList: [{
      icon: 'usefullfill',
      name: '开始'
    }, {
      icon: 'radioboxfill',
      name: '等待'
    }, {
      icon: 'roundclosefill',
      name: '错误'
    }, {
      icon: 'roundcheckfill',
      name: '现在'
    }, ],
    basics: 0,
    numList: [{
      name: '开始'
    }, {
      name: '然后'
    }, {
      name: '然后'
    }, {
      name: '现在'
    }, ],
    time: "2014年06月-2016年7月 ",
    name: "北京世华智业集团有限公司",
    duty: "1、负责公司电商类APP的爱品汇和个人中心模块开发工作\n2、独立负责公司视频直播类APP框架搭建及代码实现工作\n3、产品使用培训相关工作\n4、负责后期的产品维护、Bug修复",
    num: 0,
    scroll: 0,
  },
  numSteps() {
    /**
     * 设置点击下一步之后的数字变化
     */
    var that = this;
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1,

    })
    /**
     * 取消掉 下一步按钮 的动画
     */
    this.setData({
      animationData: {}
    })
    /**
     * 根据当前的num 更换数据
     */
    switch (this.data.num) {
      case 0:
        console.log(0 + "log")
        that.setData({
          time: "2014年06月-2016年7月 ",
          name: "北京世华智业集团有限公司",
          duty: "1、负责公司电商类APP的爱品汇和个人中心模块开发工作\n2、独立负责公司视频直播类APP框架搭建及代码实现工作\n3、产品使用培训相关工作\n4、负责后期的产品维护、Bug修复",
        })
        break
      case 1:
        that.setData({
          time: '2016年07月-2018年1月  ',
          name: '北京阿不科技技术有限公司',
          duty: '1、独立负责公司旅行定制Android项目的框架搭理，代码实现\n2、参与产品规划过程，与产品经理沟通相关需求，进行需求分析优化，协助制定产品原型\n3、根据产品规划与后台人员制定接口方案与开发周期，把控相关开发进度\n4、针对后期产品使用过程问题进行维护',
        })
        break;
      case 2:
        that.setData({
          time: '2018年03月-至今 ',
          name: ' 中永诺信华富投资管理有限公司',
          duty: '1、作为项目负责人对公司OA项目直属小管家进行开发与日常维护工作\n2、根据产品规划和开发流程，与产品、UI和后台人员沟通产品以及制定接口文档\n3、创建WBS工作量化表分配任务并把控相关开发进度\n4、负责与组内开发人员共同完成其他项目的紧急开发任务\n5、推动bug修复，降低ANR发生比例，提高代码质量\n6、负责整理组内控件使用方法形成文档供组内人员开发使用\n7、负责微信小程序组件以及API调研工作并进行组内技术分享\n8、独立负责直属小管家项目微信小程序开发工作',
        })
        break
      case 3:
        that.setData({
          time: "3",
          name: "3",
          duty: "3"
        })
        break
      default:

        break
    }

  },



});