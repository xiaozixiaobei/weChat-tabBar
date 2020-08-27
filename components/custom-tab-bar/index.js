Component({
  data: {
    iPhoneX: false,
    color: "#949494",
    selectedColor: "#FF0000",
    list: [{
        pagePath: "/pages/one/one",
        text: "one",
        iconPath: "/images/one.png",
        selectedIconPath: "/images/one_cur.png"
      },
      {
        pagePath: "/pages/two/two",
        text: "two",
        iconPath: "/images/two.png",
        selectedIconPath: "/images/two_cur.png"
      },
      {
        pagePath: "/pages/three/three",
        text: "three",
        iconPath: "/images/three.png",
        selectedIconPath: "/images/three.png"
      },
      {
        pagePath: "/pages/four/four",
        text: "four",
        iconPath: "/images/four.png",
        selectedIconPath: "/images/four_cur.png"
      },
      {
        pagePath: "/pages/five/five",
        text: "five",
        iconPath: "/images/five.png",
        selectedIconPath: "/images/five_cur.png"
      }

    ]
  },
  properties(){
    selected: Number
  },
  attached() {
    this.setData({
      selected: this.dataset.tel
    });
    var self = this
    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        if (res.model.indexOf('iPhone X') >= 0) {
          self.setData({
            iPhoneX: true
          })
        }
      }
    })

    var obj = this.createSelectorQuery();
    obj.select('.tab-bar').boundingClientRect(function (rect) {
      console.log('获取tabBar元素的高度',rect.height);
      wx.setStorageSync('tabBarHeight', rect.height)     // 将获取到的高度设置缓存，以便之后使用
    }).exec();

  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      // console.log(data.index)
      wx.switchTab({url})
      this.setData({
        selected: this.dataset.index
      })
    }
  },
  pageLifetimes: {
    show() {
    
    }
  }
  
})