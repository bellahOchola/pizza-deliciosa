$("#pname"). click(function(){
  var mine=  $('#pname').val();
    alert(mine);
});

$("#psize"). click(function(){
    var size=  $('#psize option:selected').val();
      alert(size);
  });
  
  $("#pcrust"). click(function(){
    var crust=  $('#pcrust').val();
      alert(crust);
  });

  function Pizza(name, size, topping, crust){
    this.name=name;
    this.size=size;
    this.topping=topping;
    this.crust=crust;
  }

  $(".btn").submit(function(){
    var prefer1 = $("#prefer").val();
    var size1 = $("#siz").val();
    var top1 =$("#top").val();
    var crust1 =$("#crus").val();

  });