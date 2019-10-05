var prefer1, size1, top1, crust1;

function Pizza(name, size, topping, crust){
  this.name=name;
  this.size=size;
  this.topping=topping;
  this.crust=crust;
}

$("form").submit(function(){
  event.preventDefault();
    prefer1 = $(".prefer").val();
    size1 = $("#siz").val();
    top1 =$("#top").val();
    crust1 =$("#crus").val();
  });

  