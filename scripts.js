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
    size1 = $(".siz").find(":selected").text();
    top1 =$(".top").find(":selected").text();
    crust1 =$(".crus").find(":selected").text();

    var order= new Pizza(prefer1, size1, top1, crust1);
    $("ul#myOrder").append("<li><span class='orders'>" + order.fullOrder() + "</span></li>");
    
    $("#showOrder").show();
  });

  Pizza.prototype.fullOrder= function() {
    return this.name + " " + this.size + " " + this.topping + " " + this.crust;
  }
  
  