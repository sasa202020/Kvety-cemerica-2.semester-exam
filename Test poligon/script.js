
let total = 0;

valueChange = function(item){
    
    switch(total) {
        case item.id=="":
            value = parseInt(item.value);
          total = total + (value * 100)
          alert(total)
          break;
        case total==10000:
            
          break;
        default:
            alert("Pizda")
      }
}

