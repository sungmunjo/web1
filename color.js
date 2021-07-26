var link = {
  setcolor:function(color){

    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   alist[i].style.color = color;
    //   i = i+1;
    // }
    $('a').css("color", color);
  }
}

var body = {
  setcolor:function(color){
  //  document.querySelector('body').style.color = color;
    $('body').css("color",color);
  },
  setBackgroundColor:function(color){
  //  document.querySelector('body').style.backgroundColor = color;
    $('body').css("backgroundColor",color);
  }
}
function night_day_handler(self){
  if(self.value === 'Night'){
    self.value = 'Day';
    body.setcolor("white");
    body.setBackgroundColor("black");
    link.setcolor("white");
  }
  else{
    body.setcolor("black");
    body.setBackgroundColor("white");
    self.value = 'Night';

    link.setcolor("blue");
  }
}
