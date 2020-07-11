const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

// モバイルじゃなかったら
if (window.navigator.userAgent.search(regexp) === -1) {
const elm = document.getElementById("top_wave_pc");
elm.innerHTML = '<svg class="svg-bg"><path d="M 0,60 q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0 l 0 10000 l -880 0 z" stroke=#A4E49C stroke-width="5" fill=#A4E49C opacity="0.5"/><svg class="svg-bg"><path d="M 0,60 q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0q 60 60 120 0 q 60 -60 120 0 q 60 60 120 0 q 60 -60 120 0 l 0 10000 l -880 0 z" stroke="rgba(115, 205, 255)" stroke-width="5" fill="rgb(115, 205, 255)" opacity="0.5"/></svg>';
}
