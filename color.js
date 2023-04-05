var Links = { // 객체
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {  // 객체
  setColor:function (color){
    //document.querySelector('body').style.color=color;
    $('body').css('color', color);
  }, // 객체는property들을 구분할 때 콤마를 쓴다.
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('white');
  }else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
  }
}
// 파일로 쪼개서 정리정돈하기
