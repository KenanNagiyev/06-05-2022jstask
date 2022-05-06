let item = document.getElementById("item1");

item.addEventListener("dragstart",function(e){
  e.dataTransfer.setData("item1Id",this.id);
})

document.querySelectorAll(".area1").forEach(area1=>{
    area1.addEventListener("dragover",function(e){
        e.preventDefault();
    })
})
document.querySelectorAll(".area2").forEach(area2=>{
    area2.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("item1Id");
        this.appendChild(document.getElementById(data));
    })
})