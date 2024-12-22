let rate = 5000, mouseOv = false, blocky = false, msOffset = 0, lastMs = 0;
let title;

function moveTitle(ms){
  if(!title){
    title = document.getElementById('movingTitle');
    document.getElementById("blockyController").addEventListener("input", (e)=>{
      blocky = e.currentTarget.checked;
    });
  }
  if(!mouseOv){
    const t = ((ms + msOffset) % rate) / rate;
    const p = (t - 0.5) * 2 * 80;
    const reverse = t >= 0.5;
    let ml = p * (reverse ? -1 : 1) + 40;
    if(blocky){
      ml = Math.round(ml / 5) * 5;
    }
    title.style.marginLeft = ml + "%";
  }else{
    const t = ms - lastMs;
    msOffset -= t;
  }
  lastMs = ms;
  requestAnimationFrame(moveTitle)
}

function stopMove(){
  mouseOv = true;
}

function reStartMove(){
  mouseOv = false;
  moveTitle();
}

function setBlocky(b){
  return blocky = b;
}
