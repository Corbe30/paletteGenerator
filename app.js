function reanimate(a,b){
  a.classList.remove(b);
  void a.offsetWidth;
  a.classList.add(b);
  }

function rand(){
    return (Math.floor(Math.random() * 360) + 1);
}

function HSLToHex(h,s,l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function textToClipboard (text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

var hexCodes=["#7FF5E2","#61D497","#78EB83","#87D461","#DBF772"];

  const btn= document.getElementById("btn");
  const a1= document.getElementById("a1");
  const a2= document.getElementById("a2");
  const a3= document.getElementById("a3");
  const a4= document.getElementById("a4");
  const a5= document.getElementById("a5");

  const header= document.querySelector("header");

btn.addEventListener("click",function(){
  hexCodes=[];
  let h=rand();
  let s=86;
  let l=73;
  let a=1;
  let p=h;
  const ar=[a1,a2,a3,a4,a5];
  const ar2=["a1","a2","a3","a4","a5"];
  for(let i=0;i<=4;i++){
    reanimate(ar[i],ar2[i]);
    ar[i].style.background=`hsla(${p},${s}%,${l}%,${a})`;
    $(ar[i]).attr('data-original-title', HSLToHex(p,s,l));

    hexCodes.push($(ar[i]).attr('data-original-title'));
    p=(p+24)%360;
  }
  header.style.background = `linear-gradient(90deg, hsla(${h},${s}%,${l}%,${a}), hsla(${p},${s}%,${l}%,${a}))`;
  });

  a1.addEventListener("click",function(){
    textToClipboard(hexCodes[0]);});
  a2.addEventListener("click",function(){
    textToClipboard(hexCodes[1]);});
  a3.addEventListener("click",function(){
    textToClipboard(hexCodes[2]);});
  a4.addEventListener("click",function(){
    textToClipboard(hexCodes[3]);});
  a5.addEventListener("click",function(){
    textToClipboard(hexCodes[4]);});

    
