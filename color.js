var body = {
  setcolor:function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function night_day_handler(self){
  var target = document.querySelector('body');
  var i =0;
  var alist = document.querySelectorAll('a');
  if(self.value === 'Night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    self.value = 'Day';

    while(i<alist.length){
      alist[i].style.color = 'red';
      i = i+1;
    }
  }
  else{
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    self.value = 'Night';

    while(i<alist.length){
      alist[i].style.color = 'blue';
      i = i+1;
    }
  }
}
