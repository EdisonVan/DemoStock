/*2019-04-07 点击按钮改变样式 Start by Sifan*/
function mCommonTapClass (obj) { //参数是查找范围 jq对象，默认是document
  var box = $(document); //查找范围
  if (obj != null && obj != "") { //如果obj有参数
    box = obj; //查找范围是obj
  }
  var tapItem = box.find("*[tapClass]"); //点击的对象
  if (tapItem.length == 0) { //范围内没有tapClass
    return false;
  }
  tapItem.tap(function () {
    var self = $(this);
    var timeOut = 200; 
    var tapClass = self.attr("tapClass");
    if (tapClass == "" || tapClass == null) {
      self.css("background-color", "#e5e5e5");
      setTimeout(function () {
        self.css("background-color", "");
      }, timeOut);
    } else {
      self.addClass(tapClass);
      setTimeout(function () {
        self.removeClass(tapClass)
      }, timeOut);
    }
  });
}
(function ($, _) {
  $.event.special[_] = {
    setup: function () {
      $(this).on('click', function (e) {
        e.type = _;
        $.event.dispatch.call(this, e);
      });
    },
    teardown: function () {
      $.event.remove(this, _);
    }
  };
  $.fn.tap = function (fn) {
    return this.bind(_, fn);
  };
  $().ready(function () {
    mCommonTapClass();
  });
})(jQuery, 'tap');
/*2019-04-07 点击按钮改变样式 End by Sifan*/


var praise = document.getElementById("praise");
  var tread = document.getElementById("tread");
  var isShow = false;
  praise.addEventListener("click", function () {
    if (false == isShow) {
      praise.src = "image/praise-confirm.png";
      tread.src = "image/tread.png";
      isShow = !isShow;
    } else {
      praise.src = "image/praise.png";
      isShow = !isShow;
    }
  })

  tread.addEventListener("click", function () {
    if (true == isShow) {
      tread.src = "image/tread-confirm.png";
      praise.src = "image/praise.png";
      isShow = !isShow;
    } else {
      tread.src = "image/tread.png";
      isShow = !isShow;
    }
  })