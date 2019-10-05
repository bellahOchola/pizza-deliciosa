var prefer1, size1, top1, crust1;

function Pizza(name, size, topping, crust){
  this.name=name;
  this.size=size;
  this.topping=topping;
  this.crust=crust;
}

$("form").submit(function(){
  event.preventDefault();
    prefer1 = $(".prefer").find(":selected").text();
    size1 = $("#siz").val();
    top1 =$("#top").val();
    crust1 =$("#crus").val();

    var order= new Pizza(prefer1, size1, top1, crust1);
    $("ul#myOrder").append("<li><span class='orders'>" + order.name + "</span></li>");

    // $(".prefer").val("");
    // $("input#new-last-name").val("");
  });
  
  