var prefer1, size1, topping1, crust1;
var pricing=0;
var crustPrice = 0;
var total=0;
var toppingPrice;
  
function Pizza(name, size, topping, crust){
  this.name=name;
  this.size=size;
  this.topping=topping;
  this.crust=crust;
}

$("form").submit(function(){
  event.preventDefault();
  var pizza1 = function add(size1,crust1,topping1){
  prefer1 = $(".prefer").find(":selected").val();
  size1 = $(".siz").find(":selected").val();
  crust1 =$(".crus").find(":selected").val();
  // console.log(crust1);
  topping1=[];
  $.each($("input[name='top']:checked"), function(){            
      topping1.push($(this).val());
  });
  console.log(topping1.join(", "));

  
  switch(size1){
    case "large":
      pricing = 1000;
    break;
    case "medium":
      pricing = 800;
    break;
    case "small":
      pricing = 550;
      // alert(pricing);
    break;
    default:
      console.log("error"); 
  }
  switch(crust1){
    case "glutten-free":
      crustPrice = 150;
    break;
    case "crispy":
      crustPrice = 90;
      // alert(crustPrice);
    break;
    case "stuffed":
      crustPrice = 70;
    break;
    default:
      console.log("Invalid"); 
  }
  toppingPrice=topping1.length * 100;
  // total=pricing + crustPrice + toppingPrice;
  return parseInt(pricing) + parseInt(crustPrice) + toppingPrice;
  // alert(total);
}
  function pizzaAmount(){
    var pizzaNumber= $(".quantify").val();
    return pizza1() * parseInt(pizzaNumber);
  }
  alert("Current price is " + pizzaAmount());

var order= new Pizza(prefer1, size1, topping1, crust1);
    $("ul#myOrder").append("<li><span class='orders'>" + order.fullOrder() + "</span></li>");
    
    $("#showOrder").show();

  });
  
  // $(".toDeliver").show();


  Pizza.prototype.fullOrder= function() {
    return this.name + " " + this.size + " " + this.topping + " " + this.crust;
  }
  
  