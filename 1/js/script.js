let colors = ["red", "blue", "darkgoldenrod"]

function change(obj) {
   
   obj.style.backgroundColor = colors[obj.dataset.color];
   obj.dataset.color = parseInt(obj.dataset.color)+1;
    if (obj.dataset.color =="3") {
        obj.dataset.color ="0";
    }
}