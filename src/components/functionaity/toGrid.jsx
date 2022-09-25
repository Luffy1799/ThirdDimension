

export default function toGrid(){
    
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var contentView = document.getElementById('contentPanelId');
    var itemView = document.getElementsByClassName('item');

    contentView.classList.replace("contentPanel","contentPanelGrid");
    btn1.classList.remove("btnActive");
    btn2.classList.add("btnActive");

    for (let i = 0; i < itemView.length; i++) {
        itemView[i].className = "itemGrid textLink"
      }
      
      
      
    
}