


export default function toList(){

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var contentView = document.getElementById('contentPanelId');
    var itemView = document.getElementsByClassName('itemGrid');

    contentView.classList.replace("contentPanelGrid","contentPanel");
    btn2.classList.remove("btnActive");
    btn1.classList.add("btnActive");
    

    for (let i = 0; i < itemView.length; i++) {
        itemView[i].className = "item textLink";
      }
      
      
}