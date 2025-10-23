/* ===========================
   Magic Academy CSS

   =========================== */

/* --- Base --- */
body{
  margin:0;
  font-family:'Noto Sans TC',sans-serif;
  color:#fff;
  overflow-x:hidden;
  position:relative;
  background:
    url('https://www.transparenttextures.com/patterns/stardust.png') repeat,
    radial-gradient(ellipse at bottom,#3a0057 0%,#0d0014 100%);
  background-size:auto,cover;
  animation:moveBg 60s linear infinite;
}
@keyframes moveBg{
  0%{background-position:0 0,center;}
  50%{background-position:100px 100px,center;}
  100%{background-position:0 0,center;}
}

/* --- Clouds --- */
.cloud-layer{
  position:fixed; top:0; left:0;
  width:200%; height:200%;
  background:url('https://www.transparenttextures.com/patterns/clouds.png') repeat;
  opacity:.12;
  animation:cloudMove 120s linear infinite;
  pointer-events:none; z-index:1;
}
@keyframes cloudMove{
  0%{transform:translate(0,0);}
  50%{transform:translate(-200px,-100px);}
  100%{transform:translate(0,0);}
}

/* --- Logo --- */
#logo{
  position:fixed; top:12px; left:12px; z-index:3000;
  text-decoration:none; cursor:pointer; user-select:none;
  transition:filter .3s ease, transform .2s ease;
  display:inline-flex; align-items:center; gap:10px;
  filter: drop-shadow(0 0 12px rgba(246,219,135,.45));
}
#logo:hover{ transform:translateY(-1px); filter: drop-shadow(0 0 18px rgba(246,219,135,.7)); }

#logo:not(:has(img)){
  font-family:'Cinzel Decorative',cursive;
  font-size:1.5em; color:#f6db87;
  text-shadow:0 0 15px rgba(246,219,135,.8);
  transition:color .3s ease,text-shadow .3s ease;
}
#logo:not(:has(img)):hover{ color:#fff; text-shadow:0 0 25px rgba(246,219,135,1); }
/* 圖片 logo  */
#logo img{ height:42px; width:auto; display:block; object-fit:contain; border-radius:8px; }
@media (max-width:800px){ #logo img{ height:36px; } }

/* --- Sections --- */
.section{ display:none; padding:100px 20px 50px; text-align:center; position:relative; z-index:2; }
.section.active{ display:block; }

/* --- Entry Page --- */
#entryPage{ display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; text-align:center; }
#entryPage h1{
  font-family:'Cinzel Decorative',cursive;
  font-size:3em; color:#f6db87; margin-bottom:30px;
  text-shadow:0 0 15px rgba(246,219,135,.8);
}
#entryPage .title-image{
  display:none; max-width:420px; width:90%; height:auto;
  border-radius:12px; box-shadow:0 6px 22px rgba(246,219,135,.25);
}
body.use-image-title #entryPage h1{ display:none; }
body.use-image-title #entryPage .title-image{ display:block; }

#joinBtn{
  font-family:'Cinzel Decorative',cursive; font-size:2.2em; color:#f6db87;
  background:transparent; border:none; padding:0; cursor:pointer;
  font-weight:700; letter-spacing:.05em;
  text-shadow:0 0 15px rgba(246,219,135,.8);
  transition:color .3s ease,text-shadow .3s ease;
}
#joinBtn:hover{ color:#fff; text-shadow:0 0 25px rgba(246,219,135,1); }

/* --- Music Toggle --- */
.music-toggle{
  position:fixed; right:20px; bottom:20px;
  display:inline-flex; align-items:center; gap:10px;
  background:linear-gradient(135deg, rgba(246,219,135,.2), rgba(255,255,255,.1));
  backdrop-filter:blur(8px);
  border:1px solid rgba(246,219,135,.4);
  border-radius:50px; padding:8px 16px; cursor:pointer; z-index:9999;
  font-family:'Segoe UI',sans-serif; font-size:14px; color:#f6db87;
  box-shadow:0 4px 15px rgba(246,219,135,.2);
  transition:all .3s ease;
}
.music-toggle:hover{
  background:linear-gradient(135deg, rgba(246,219,135,.4), rgba(255,255,255,.15));
  box-shadow:0 6px 20px rgba(246,219,135,.4);
  transform:translateY(-2px);
}
.music-toggle:active{ transform:scale(.96); }
#musicIcon{ font-size:16px; transition:transform .3s ease; }
.music-toggle[aria-pressed="true"] #musicIcon{ transform:rotate(360deg); }
.music-status{ font-size:.9em; color:#dcd0a1; margin-left:8px; }

/* --- Dropdown (generic) --- */
.dropdown{ position:relative; }

.dropdown-content,
.dropdown:hover .dropdown-content{ display:none !important; }

/* --- Student sub nav --- */
#studentSubNav{
  display:flex; justify-content:center; gap:25px;
  margin:10px 0 20px; font-size:1.3em; color:#f6db87;
}
#studentSubNav a{
  cursor:pointer; padding:5px 15px; border-radius:20px;
  background:rgba(246,219,135,.2); text-decoration:none; color:#f6db87;
  transition:background .3s;
}
#studentSubNav a:hover,#studentSubNav a.active{ background:#f6db87; color:#000; }

/* --- Students grid --- */
.studentsSection{
  max-width:720px; margin:0 auto 50px; text-align:left;
  display:grid; grid-template-columns:repeat(2,1fr);
  grid-auto-rows:minmax(80px,auto); gap:15px 25px;
}
.student-card{
  display:flex; align-items:center; background:rgba(246,219,135,.1);
  border-radius:12px; padding:15px 10px; box-shadow:0 0 10px rgba(246,219,135,.3);
  transition:box-shadow .3s ease;
}
.student-card:hover{ box-shadow:0 0 20px rgba(246,219,135,.6); }
.student-card img{
  width:70px; height:70px; border-radius:12px; object-fit:cover; margin-right:10px; flex-shrink:0;
}
.student-info{
  color:#f0e6a5; font-size:.9em; line-height:1.4;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

/* --- House: holfindo --- */
#house-holfindo{
  display:grid; grid-template-columns:repeat(2,1fr);
  gap:15px 25px; max-width:720px; margin:0 auto;
}


#team{ max-width:1100px; margin:0 auto; text-align:center; }
#team>h1{ font-size:2.8em; font-weight:bold; color:#f6db87; margin-bottom:30px; }


.team-members-wrapper{
  position:relative;
  display:grid;
  grid-template-columns:repeat(2,minmax(360px,1fr));
  gap:26px 38px;
  max-width:1100px;
  margin:0 auto 20px;
  padding:0 10px;
}
@media (min-width:1025px){
  .team-members-wrapper::before{
    content:"";
    position:absolute;
    top:0; bottom:0; left:50%;
    width:2px;
    transform:translateX(-1px);
    background:linear-gradient(to bottom, rgba(246,219,135,.0), rgba(246,219,135,.25), rgba(246,219,135,.0));
    border-radius:2px;
    pointer-events:none;
    opacity:.6;
  }
}


@media (max-width:1024px){
  .team-members-wrapper{ grid-template-columns:1fr; gap:18px; }
  .team-members-wrapper::before{ display:none; }
}


.team-member{
  display:flex; align-items:center; gap:18px;
  background:rgba(246,219,135,.10);
  border:1px solid rgba(246,219,135,.14);
  border-radius:14px;
  padding:16px 18px;
  box-shadow:0 0 10px rgba(246,219,135,.25);
  min-height:120px;
  overflow:hidden;
  transition:transform .18s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
}
.team-member:hover{
  transform:translateY(-2px);
  background:rgba(246,219,135,.14);
  border-color:rgba(246,219,135,.38);
  box-shadow:
    0 0 0 1px rgba(246,219,135,.28) inset,
    0 10px 26px rgba(246,219,135,.35),
    0 0 36px rgba(246,219,135,.45);
}
.team-member img{
  width:96px; height:96px; border-radius:12px; object-fit:cover; flex-shrink:0;
  box-shadow:0 0 10px rgba(0,0,0,.35); border:1px solid rgba(255,255,255,.05);
}
.member-info{
  text-align:left; color:#f0e6a5; line-height:1.45;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1 1 auto;
}
.member-info h3{
  font-size:1.45em; margin:0 0 4px 0; color:#f6db87; font-weight:800;
}
.member-info p{
  font-size:1.02em; margin:0; opacity:.95; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}

/* --- Academy --- */
#academy{ max-width:900px; margin:0 auto; text-align:left; }
#academies{ color:#dcd0a1; max-width:900px; margin:0 auto 50px; }
.academy-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
.academy-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:10px 22px;
  border-radius:18px; cursor:pointer; font-weight:bold;
  transition:all .3s ease; white-space:nowrap;
}
.academy-selector button.active{
  background:#f6db87; color:#000; box-shadow:0 0 12px rgba(246,219,135,.6);
}
.academy-card{ display:flex; gap:30px; align-items:center; justify-content:center; flex-wrap:wrap; }
.academy-text{ flex:1 1 300px; font-size:18px; line-height:1.5; }
.academy-text h2{ font-size:28px; margin-bottom:12px; font-weight:700; }
.academy-text p strong{ font-weight:700; }
.academy-image{ flex:1 1 300px; text-align:center; }
.academy-image img{ max-width:100%; border-radius:12px; box-shadow:0 0 12px rgba(220,208,161,.6); }

/* --- Map (已與 Religion / God 文字風格統一) --- */
#map .map-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
#map .map-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:8px 14px; border-radius:18px;
  cursor:pointer; font-weight:bold;
}
#map .map-selector button.active{
  background:#f6db87; color:#000; box-shadow:0 0 12px rgba(246,219,135,.6);
}

#map .map-content{ max-width:1000px; margin:0 auto; text-align:left; }

.map-card{
  display:flex; gap:20px; align-items:stretch; flex-wrap:wrap;
  background:rgba(0,0,0,.25);
  border-radius:12px; padding:18px;
  box-shadow:0 0 10px rgba(0,0,0,.4);
  margin-bottom:30px;
}

/* ✅ 內文 — 已與 Religion / God 完全一致 */
.map-text{
  flex:1 1 320px;
  min-width:260px;
  color:#f0e6a5;
  font-size:1.28em;
  line-height:1.85;
  font-weight:700;
  letter-spacing:.3px;
}

/* ✅ 標題 — 已與 Religion / God 系統標題一致 */
.map-text h2{
  margin-top:0;
  color:#f6db87;
  font-size:1.45em;
  font-weight:800;
  letter-spacing:1px;
  text-shadow:0 0 6px rgba(246,219,135,.6);
}

.map-image{
  flex:1 1 420px; min-width:280px;
  display:flex; align-items:center; justify-content:center;
}

.map-image img{
  width:100%; max-width:520px; height:auto;
  border-radius:10px; object-fit:cover;
  box-shadow:0 6px 20px rgba(0,0,0,.6);
  border:1px solid rgba(255,255,255,.04);
}



#division-detail{
  display:none;
  width:450px; height:600px; padding:20px;
  position:fixed; bottom:20px; left:20px;
  border-radius:16px;
  background: radial-gradient(80% 100% at 50% 0%, rgba(60,0,110,.55), rgba(8,0,24,.7)) padding-box;
  border:2px solid rgba(158,92,255,.6);
  box-shadow: 0 0 22px rgba(158,92,255,.45), inset 0 0 28px rgba(158,92,255,.18);
  color:#EED7FF; font-size:1em; line-height:1.4;
  z-index:1001;
  overflow: hidden !important;
  overscroll-behavior: contain;
  touch-action: none !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
#division-detail::-webkit-scrollbar{ width:0 !important; height:0 !important; background:transparent !important; }
#division-detail::-webkit-scrollbar-thumb{ background:transparent !important; }


#division-detail.scrollable{
  overflow: auto !important;
  touch-action: auto !important;
  scrollbar-width: thin;
  -ms-overflow-style: auto;
}
#division-detail.scrollable::-webkit-scrollbar{ width:8px; }
#division-detail.scrollable::-webkit-scrollbar-thumb{
  background:linear-gradient(#c8a862,#9b7a3e); border-radius:99px;
}

#division-detail>button#close-detail{
  position:absolute; top:10px; right:10px;
  background:none; border:none; font-size:1.8em; color:#f0e6a5;
  cursor:pointer; transition:color .3s ease; z-index:1010;
}
#division-detail>button#close-detail:hover{ color:#fff; }
#division-detail .content-wrapper{
  display:flex; flex-direction:column; align-items:center; gap:20px;
  text-align:center; padding-top:0; position:relative;
}
#division-img{
  width:280px; height:280px; border-radius:12px; object-fit:cover;
  box-shadow:0 0 15px rgba(246,219,135,.6); margin:0 auto;
  border:1px solid rgba(246,219,135,.25);
}


#division-text {
  white-space: pre-line;
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.05em;
  line-height: 1.8;
  color: #f0e6a5;
  text-align: left;
  letter-spacing: 0.5px;
  padding: 12px 14px;
  background: rgba(246,219,135,0.06);
  border-radius: 10px;
  box-shadow: inset 0 0 12px rgba(246,219,135,0.15);
  word-break: break-word;
}
#division-detail.scrollable #division-text{
  overflow-y: auto;
  max-height: 340px;
  scrollbar-width: thin;
}
#division-detail.scrollable #division-text::-webkit-scrollbar{ width: 6px; }
#division-detail.scrollable #division-text::-webkit-scrollbar-thumb{
  background: linear-gradient(180deg, rgba(200,168,98,.55), rgba(155,122,62,.55));
  border-radius: 99px;
}
#division-detail.scrollable #division-text::-webkit-scrollbar-thumb:hover{
  background: linear-gradient(180deg, rgba(200,168,98,.75), rgba(155,122,62,.75));
}

/* --- Division Actions & Twitch button --- */
#division-actions{ margin-top:12px; display:flex; gap:10px; flex-wrap:wrap; }
.twitch-btn{
  display:inline-flex; align-items:center; gap:6px; padding:10px 14px;
  border-radius:10px; background:#9146FF; color:#fff; text-decoration:none;
  font-weight:700; letter-spacing:.3px; transition:transform .08s ease;
}
.twitch-btn:hover{ transform:translateY(-1px); }
.twitch-btn:active{ transform:translateY(0); }
.twitch-btn svg{ width:18px; height:18px; }
.twitch-btn[aria-disabled="true"]{ opacity:.55; cursor:not-allowed; pointer-events:none; }

/* =========================
   10/21Nav重新排版
   ========================= */
nav{ all:unset; }
#mainNav{ position:fixed; z-index:3000; }

/* 桌機水平選單 */
@media (min-width:801px){
  #mainNav{
    top:0; right:0; left:auto;
    padding:10px 20px;
    background:rgba(0,0,0,.6);
    border-bottom-left-radius:10px;
    box-shadow:0 12px 22px rgba(0,0,0,.35);
    backdrop-filter:blur(8px);
    display:inline-block;
  }
  #mainNav .nav-toggle{ display:none !important; }
  #mainNav ul{
    display:flex !important; align-items:center; gap:14px;
    margin:0; padding:0; list-style:none;
    background:transparent; border:0; position:static;
  }
  #mainNav li{ position:relative; }
  #mainNav a{
    display:block; padding:10px 8px; color:#f6db87; text-decoration:none; font-weight:700; white-space:nowrap;
    border-radius:6px; transition:background .2s,color .2s;
    font-size:16px; line-height:1;
  }
  #mainNav a:hover{ background:rgba(246,219,135,.12); color:#fff; }
}

/* 手機漢堡選單 */
@media (max-width:800px){
  #mainNav{
    top:12px; right:12px; left:auto !important;
    padding:0; background:transparent !important; box-shadow:none;
  }
  .nav-toggle{
    display:flex; width:44px; height:44px;
    border:1px solid rgba(246,219,135,.35); border-radius:12px;
    background:linear-gradient(135deg, rgba(246,219,135,.22), rgba(255,255,255,.08));
    backdrop-filter:blur(8px);
    cursor:pointer; align-items:center; justify-content:center; flex-direction:column; gap:4px;
    box-shadow:0 8px 18px rgba(0,0,0,.35);
  }
  .nav-toggle:active{ transform:scale(.98); }
  .nav-toggle-bar{ width:22px; height:2px; background:#f6db87; transition:transform .25s ease,opacity .25s ease; }
  #mainNav.open .nav-toggle-bar:nth-child(1){ transform:translateY(6px) rotate(45deg); }
  #mainNav.open .nav-toggle-bar:nth-child(2){ opacity:0; }
  #mainNav.open .nav-toggle-bar:nth-child(3){ transform:translateY(-6px) rotate(-45deg); }

  #mainMenu{
    position:absolute; top:calc(100% + 10px); right:0; left:auto;
    display:none; flex-direction:column;
    min-width:220px; margin:0; padding:6px 0;
    background:rgba(0,0,0,.86);
    border:1px solid rgba(246,219,135,.22);
    border-radius:12px; box-shadow:0 16px 30px rgba(0,0,0,.45);
    backdrop-filter:blur(10px); overflow:hidden;
  }
  #mainNav.open #mainMenu{ display:flex; }
  #mainMenu li{ list-style:none; }
  #mainMenu a{ display:block; padding:12px 14px; color:#f6db87; text-decoration:none; font-weight:700; white-space:nowrap; font-size:14px; line-height:1; }
  #mainMenu li + li a{ border-top:1px solid rgba(246,219,135,.15); }
  #mainMenu a:active{ background:rgba(246,219,135,.12); color:#fff; }
}

/* --- A11y --- */
.sr-only{
  position:absolute !important; width:1px; height:1px; padding:0; margin:-1px;
  overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;
}

/* =========================
   Responsive tweaks
   ========================= */
@media (max-width:800px){
  #entryPage h1{ font-size:2.2em; }
  body.use-image-title #entryPage .title-image{ max-width:320px; }
  .map-card{ flex-direction:column-reverse; }
  .map-image img{ max-width:100%; }
}

@media (max-width:640px){
  .studentsSection, #house-holfindo{
    grid-template-columns:1fr; max-width:520px; gap:12px; padding:0 10px;
  }
  .student-card{ padding:12px 10px; }

  .academy-card{ flex-direction:column; gap:16px; }
  .academy-text{ font-size:16px; }
  .academy-text h2{ font-size:22px; }

  .map-card{ flex-direction:column-reverse; padding:14px; }
  .map-text{ font-size:1em; }
  .map-image img{ max-width:100%; }

  #division-detail{
    inset:auto 0 0 0; position:fixed; width:100%; height:60vh !important;
    left:0; bottom:0; border-radius:16px 16px 0 0;
    padding:12px 12px 70px !important; z-index:4000;
    background: radial-gradient(80% 100% at 50% 0%, rgba(60,0,110,.58), rgba(8,0,24,.78)) padding-box;
    border:2px solid rgba(158,92,255,.6);
    box-shadow:0 -8px 28px rgba(158,92,255,.35), inset 0 0 24px rgba(158,92,255,.18);
    color:#EED7FF;
  }
  #division-detail .content-wrapper{ height:100%; overflow-y:auto; padding-right:4px; -webkit-overflow-scrolling:touch; }
  #division-img{ width:150px !important; height:150px !important; margin-top:6px; border-radius:10px; object-fit:cover; border:1px solid rgba(246,219,135,.25); box-shadow:0 8px 22px rgba(0,0,0,.45); }

  #division-detail.scrollable #division-text{
    max-height:50vh;
    font-size:.95em;
    line-height:1.7;
    padding:10px 12px;
  }

  #division-detail>#close-detail{
    position:absolute; top:8px; right:8px; width:40px !important; height:40px !important;
    line-height:40px; font-size:20px !important; border-radius:10px;
    background:rgba(0,0,0,.35); box-shadow:0 4px 12px rgba(0,0,0,.35); z-index:4010;
  }
  #division-actions{ position:fixed; left:16px; right:auto; bottom:16px; z-index:4010; margin:0; }
  .twitch-btn{ padding:10px 14px !important; font-size:14px !important; border-radius:999px; box-shadow:0 8px 18px rgba(145,70,255,.35); }

  @supports (padding:max(0px)){
    #division-detail{ padding-bottom:calc(70px + env(safe-area-inset-bottom)) !important; }
    #division-detail>#close-detail{
      top:max(8px, env(safe-area-inset-top));
      right:max(8px, env(safe-area-inset-right));
    }
  }
}

@media (min-width:641px){
  #division-actions{ position:fixed; left:20px; right:auto; bottom:20px; }
}

#entryPage .title-image,
#entryPage .title-image img,
#entryPage h1.entry-title {
  filter: none !important;
  box-shadow: none !important;
  text-shadow: none !重要;
  animation: none !important;
}

/* === Teacher cards two-column grid (desktop) === */
#teachers .teacher-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(320px,1fr));
  gap:24px;
  margin-top:12px;
}
#teachers .teacher-grid .teacher-card{ margin:0; }
@media (max-width:800px){
  #teachers .teacher-grid{ grid-template-columns:1fr; }
}

/* === Hover Glow for Students & Teachers === */
.studentsSection .student-card,
#teachers .teacher-card{
  position: relative;
  border: 1px solid rgba(246,219,135,.12);
  transition:
    transform .18s ease,
    box-shadow .25s ease,
    background .25s ease,
    border-color .25s ease;
}
.studentsSection .student-card:hover,
.studentsSection .student-card:focus-visible,
#teachers .teacher-card:hover,
#teachers .teacher-card:focus-visible{
  background: rgba(246,219,135,.12);
  border-color: rgba(246,219,135,.45);
  box-shadow:
    0 0 0 1px rgba(246,219,135,.35) inset,
    0 0 0 2px rgba(246,219,135,.18),
    0 10px 26px rgba(246,219,135,.35),
    0 0 36px rgba(246,219,135,.55);
  transform: translateY(-2px);
  outline: none;
}
.studentsSection .student-card::after,
#teachers .teacher-card::after{
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 12px;
  pointer-events: none;
  opacity: 0;
  transition: opacity .25s ease;
  box-shadow:
    0 0 25px rgba(246,219,135,.35),
    0 0 60px rgba(246,219,135,.22);
}
.studentsSection .student-card:hover::after,
.studentsSection .student-card:focus-visible::after,
#teachers .teacher-card:hover::after,
#teachers .teacher-card:focus-visible::after{
  opacity: 1;
}

.teacher-card{
  display:flex; align-items:flex-start; gap:20px; margin-bottom:30px;
  background:rgba(246,219,135,.08);
  padding:20px 24px; border-radius:16px;
  border:1px solid rgba(246,219,135,.14);
  box-shadow:0 0 15px rgba(246,219,135,.25);
  backdrop-filter:blur(4px);
  transition:transform .18s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease;
}
.teacher-card:hover{
  transform:translateY(-2px);
  background:rgba(246,219,135,.12);
  border-color:rgba(246,219,135,.38);
  box-shadow:
    0 0 0 1px rgba(246,219,135,.28) inset,
    0 10px 26px rgba(246,219,135,.35),
    0 0 36px rgba(246,219,135,.45);
}

.teacher-card > img,
.teacher-img{
  width:160px; height:160px; object-fit:cover; flex-shrink:0;
  border-radius:12px;
  border:1px solid rgba(246,219,135,.25);
  box-shadow:0 6px 20px rgba(0,0,0,.35);
}

.teacher-info{
  color:#f0e6a5; font-size:1.05em;
  line-height:1.9; letter-spacing:.02em; text-align:justify;
  white-space:pre-line; 
}
.teacher-info h2{
  margin:0 0 10px; font-size:1.3em; color:#f8e9b5; letter-spacing:.05em; font-weight:800;
}
.teacher-info p{ margin:0 0 14px; }

.twitch-link{
  display:inline-block; margin-top:6px;
  padding:8px 14px; border-radius:10px;
  background:rgba(145,70,255,.15);
  color:#d9c4ff; text-decoration:none;
  border:1px solid rgba(145,70,255,.5);
  font-size:.92em; transition:.2s;
}
.twitch-link:hover{ background:rgba(145,70,255,.25); color:#fff; }

@media (prefers-reduced-motion: reduce){
  .studentsSection .student-card,
  #teachers .teacher-card{
    transition: box-shadow .25s ease, background .25s ease, border-color .25s ease;
  }
  .studentsSection .student-card:hover,
  .studentsSection .student-card:focus-visible,
  #teachers .teacher-card:hover,
  #teachers .teacher-card:focus-visible{
    transform: none;
  }
}

.teacher-filter {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 6px auto 24px;
}
.teacher-filter .filter-btn {
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(246,219,135,.6);
  background: rgba(246,219,135,.08);
  color: #f0e6a5;
  font-weight: 700;
  letter-spacing: .02em;
  cursor: pointer;
  transition: transform .08s ease, background .2s ease, border-color .2s ease;
  user-select: none;
}
.teacher-filter .filter-btn:hover { transform: translateY(-1px); }
.teacher-filter .filter-btn.active {
  background: rgba(246,219,135,.22);
  border-color: rgba(246,219,135,.95);
}
.is-hidden { display: none !important; }


.academy-select-wrap{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:10px;
  margin:10px 0 6px;
}
.academy-select-wrap label{ color:#dcd0a1; font-weight:700; }
#acadSelectShell{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:6px 10px;
  border-radius:18px;
  border:1px solid rgba(246,219,135,.14);
  background:linear-gradient(135deg, rgba(246,219,135,.08), rgba(255,255,255,.06));
  box-shadow:0 4px 14px rgba(0,0,0,.25);
}
#academySelect{
  appearance:none; -webkit-appearance:none; -moz-appearance:none;
  border:none; outline:none; background:transparent;
  color:#f6db87; font-weight:800; letter-spacing:.02em;
  padding:8px 28px 8px 10px; border-radius:12px; cursor:pointer;
}
#acadSelectShell{ position:relative; }
#acadSelectShell::after{
  content:""; position:absolute; right:10px; top:50%; transform:translateY(-50%);
  width:0; height:0; border-left:6px solid transparent; border-right:6px solid transparent; border-top:7px solid #f6db87; opacity:.9; pointer-events:none;
}
#acadSelectShell:hover{
  border-color:rgba(246,219,135,.38);
  background:linear-gradient(135deg, rgba(246,219,135,.12), rgba(255,255,255,.08));
  box-shadow:0 0 0 1px rgba(246,219,135,.22) inset, 0 8px 20px rgba(246,219,135,.28);
}
#academySelect:focus-visible{ outline:2px solid rgba(246,219,135,.85); outline-offset:2px; border-radius:12px; }
#academySelect option{ background:#110018; color:#f0e6a5; }
.academy-selector, .academy-select-wrap{ flex-wrap:wrap; }
@media (max-width:640px){
  .academy-select-wrap{ margin:6px 0 10px; }
  #academySelect{ padding:8px 34px 8px 12px; font-weight:800; }
}
@media (prefers-reduced-motion: reduce){
  #acadSelectShell, #academySelect{ transition:none !important; }
}

/* ===== 主選單 ===== */


#mainMenu { position:relative; z-index:4000; }


#mainMenu .menu-has-dropdown{ position:relative; }


#mainMenu > li > a,
#mainMenu .menu-has-dropdown > .dropdown-toggle{
  background: transparent;
  border: 0;
  font: inherit;
  color: #f6db87;
  cursor: pointer;
  padding: 10px 12px;
  display: inline-block;
  line-height: 1;
}

#mainMenu > li > a:hover,
#mainMenu .menu-has-dropdown > .dropdown-toggle:hover{
  background:rgba(246,219,135,.12);
  color:#fff;
}


#mainMenu .menu-has-dropdown > .dropdown{
  display:none;                 /*  */
  position:absolute;
  top:100%; left:0;
  min-width:180px;
  margin-top:6px;
  padding:6px 0;
  list-style:none;
  background:rgba(0,0,0,.92);
  border:1px solid rgba(246,219,135,.22);
  border-radius:10px;
  box-shadow:0 16px 30px rgba(0,0,0,.45);
  z-index:4010;
}
#mainMenu .menu-has-dropdown > .dropdown > li{ display:block; }
#mainMenu .menu-has-dropdown > .dropdown a{
  display:block; padding:10px 12px; color:#f6db87; text-decoration:none; white-space:nowrap;
}
#mainMenu .menu-has-dropdown > .dropdown a:hover{
  background:rgba(246,219,135,.12); color:#fff;
}


@media (min-width:801px){
  #mainMenu .menu-has-dropdown:hover > .dropdown,
  #mainMenu .menu-has-dropdown:focus-within > .dropdown{ display:block; }
}


@media (max-width:800px){
  #mainMenu .menu-has-dropdown > .dropdown{
    position:static;
    margin:6px 8px 0;
    background:transparent;
    border:0;
    box-shadow:none;
    padding:0;
  }
  #mainMenu .menu-has-dropdown.open > .dropdown,
  #mainMenu .menu-has-dropdown:focus-within > .dropdown{ display:block; }
  #mainMenu .menu-has-dropdown .dropdown a{
    padding:10px 14px;
  }
}


.dropdown-content,
.dropdown:hover .dropdown,
.dropdown:hover .dropdown-content{ display:none !important; }


@media (min-width:801px){
  #mainNav{
    top:0; right:0; left:auto;
    padding:10px 20px;
    background:rgba(0,0,0,.6);
    border-bottom-left-radius:10px;
    box-shadow:0 12px 22px rgba(0,0,0,.35);
    backdrop-filter:blur(8px);
    display:inline-block;
  }
  #mainNav .nav-toggle{ display:none !important; }

  /* 這行改成 > */
  #mainNav > ul{
    display:flex; align-items:center; gap:14px;
    margin:0; padding:0; list-style:none;
    background:transparent; border:0; position:static;
  }

  #mainNav li{ position:relative; }
  #mainNav a{
    display:block; padding:10px 8px; color:#f6db87; text-decoration:none; font-weight:700; white-space:nowrap;
    border-radius:6px; transition:background .2s,color .2s;
    font-size:16px; line-height:1;
  }
  #mainNav a:hover{ background:rgba(246,219,135,.12); color:#fff; }
}


#mainMenu .menu-has-dropdown > .dropdown{
  display:none !important;
  position:absolute; top:100%; left:0;
  min-width:180px; margin-top:6px; padding:6px 0;
  list-style:none;
  background:rgba(0,0,0,.92);
  border:1px solid rgba(246,219,135,.22);
  border-radius:10px;
  box-shadow:0 16px 30px rgba(0,0,0,.45);
  flex-direction:column;
}
@media (min-width:801px){
  #mainMenu .menu-has-dropdown:hover > .dropdown,
  #mainMenu .menu-has-dropdown:focus-within > .dropdown{
    display:block !important;
  }
}

@media (max-width:800px){
  #mainMenu .menu-has-dropdown > .dropdown{
    position:static; margin:6px 8px 0; background:transparent; border:0; box-shadow:none; padding:0;
  }
  #mainMenu .menu-has-dropdown.open > .dropdown,
  #mainMenu .menu-has-dropdown:focus-within > .dropdown{
    display:block !important;
  }
}



#mainMenu > li > a,
#mainMenu .menu-has-dropdown > .dropdown-toggle{
  font-weight: 700;
  font-size: 16px;
  padding: 10px 12px;
  color: #f6db87;
  line-height: 1;
  border-radius: 6px;
  background: transparent;
  border: 0;
  cursor: pointer;
  transition: background .2s, color .2s, box-shadow .25s ease;
}


#mainMenu > li > a:hover,
#mainMenu .menu-has-dropdown > .dropdown-toggle:hover{
  color: #fff;
  background: rgba(246,219,135,.12);
  box-shadow: 0 0 12px rgba(246,219,135, .55),
              0 0 22px rgba(246,219,135, .35);
}


#mainMenu > li > a:hover,
#mainMenu .menu-has-dropdown > .dropdown-toggle:hover {
  background: transparent !important;   /*  */
  box-shadow: none !important;          /*  */
  color: #ffffff !important;            /*  */
  text-shadow: 0 0 6px rgba(255,255,200,0.9),
               0 0 12px rgba(255,255,150,0.78),
               0 0 18px rgba(255,255,120,0.55);  /* ✦ 金 */
}

.world-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
.world-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:8px 14px; border-radius:18px;
  cursor:pointer; font-weight:bold; transition:.25s;
}
.world-selector button.active{
  background:#f6db87; color:#000;
  box-shadow:0 0 12px rgba(246,219,135,.6);
}


#history .map-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
#history .map-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:8px 14px; border-radius:18px;
  cursor:pointer; font-weight:bold; transition:.25s;
}
#history .map-selector button:hover{
  transform:translateY(-1px);
  background:rgba(246,219,135,.12);
  border-color:rgba(246,219,135,.30);
}
#history .map-selector button.active{
  background:#f6db87; color:#000; box-shadow:0 0 12px rgba(246,219,135,.6);
}

#history .map-content{ max-width:1000px; margin:0 auto; text-align:left; }
#history .map-card{
  display:flex; gap:20px; align-items:stretch; flex-wrap:wrap;
  background:rgba(0,0,0,.25);
  border-radius:12px; padding:18px;
  box-shadow:0 0 10px rgba(0,0,0,.4);
  margin-bottom:30px;
}
#history .map-text{
  flex:1 1 320px;
  min-width:260px;
  color:#f0e6a5;
  font-size:1.28em;   
  line-height:1.85;   
  font-weight:700;    
}

#history .map-text h2{ margin-top:0; color:#f6db87; text-shadow:0 0 6px rgba(246,219,135,.6); }

#history .map-image{
  flex:1 1 420px; min-width:280px;
  display:flex; align-items:center; justify-content:center;
}
#history .map-image img{
  display:block;
  width:100%; max-width:520px; height:auto; object-fit:cover;
  border-radius:10px; box-shadow:0 6px 20px rgba(0,0,0,.6);
  border:1px solid rgba(255,255,255,.04);
}


@media (max-width:800px){
  #history .map-card{ flex-direction:column-reverse; padding:14px; }
  #history .map-text{ font-size:1em; }
  #history .map-image img{ max-width:100%; }
}


#god .god-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
#god .god-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:8px 14px; border-radius:18px;
  cursor:pointer; font-weight:bold; transition:.25s;
}
#god .god-selector button:hover{
  transform:translateY(-1px);
  background:rgba(246,219,135,.12);
  border-color:rgba(246,219,135,.30);
}
#god .god-selector button.active{
  background:#f6db87; color:#000;
  box-shadow:0 0 12px rgba(246,219,135,.6);
}

#god .god-content{ max-width:1000px; margin:0 auto; text-align:left; }
#god .god-card{
  display:flex; gap:20px; align-items:stretch; flex-wrap:wrap;
  background:rgba(0,0,0,.25);
  border-radius:12px; padding:18px;
  box-shadow:0 0 10px rgba(0,0,0,.4);
  margin-bottom:30px;
}
#god .god-text{
  flex:1 1 320px;
  min-width:260px;
  color:#f0e6a5;
  font-size:1.28em;     
  line-height:1.85;     
  font-weight:700;      
}

#god .god-text h2{ margin-top:0; color:#f6db87; text-shadow:0 0 6px rgba(246,219,135,.6); }

#god .god-image{
  flex:1 1 420px; min-width:280px;
  display:flex; align-items:center; justify-content:center;
}
#god .god-image img{
  display:block;
  width:100%;
  max-width:350px;  
  height:auto;
  object-fit:cover;
  border-radius:10px;
  box-shadow:0 6px 20px rgba(0,0,0,.6);
  border:1px solid rgba(255,255,255,.04);
}


@media (max-width:800px){
  #god .god-card{ flex-direction:column-reverse; padding:14px; }
  #god .god-text{ font-size:1em; }
  #god .god-image img{ max-width:100%; }
}

/* ===== Religion ===== */
#religion .religion-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
#religion .religion-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:10px 16px; border-radius:18px;
  cursor:pointer; font-weight:800; font-size:1.05em; transition:.25s;
}
#religion .religion-selector button:hover{
  transform:translateY(-1px);
  background:rgba(246,219,135,.12);
  border-color:rgba(246,219,135,.30);
}
#religion .religion-selector button.active{
  background:#f6db87; color:#000; box-shadow:0 0 12px rgba(246,219,135,.6);
}

#religion .religion-content{ max-width:1000px; margin:0 auto; text-align:left; }
#religion .religion-card{
  display:flex; gap:20px; align-items:stretch; flex-wrap:wrap;
  background:rgba(0,0,0,.25);
  border-radius:12px; padding:18px;
  box-shadow:0 0 10px rgba(0,0,0,.4);
  margin-bottom:30px;
}
#religion .religion-text{
  flex:1 1 320px; min-width:260px;
  color:#f0e6a5;
  font-size:1.28em;     
  line-height:1.85;     
  font-weight:700;
}

#religion .religion-text h2{
  margin-top:0; color:#f6db87;
  font-size:1.7em; font-weight:900; letter-spacing:1.2px;
  text-shadow:0 0 6px rgba(246,219,135,.6);
}

#religion .religion-image{
  flex:1 1 420px; min-width:280px;
  display:flex; align-items:center; justify-content:center;
}
#religion .religion-image img{
  display:block; width:100%; max-width:520px; height:auto; object-fit:cover;
  border-radius:10px; box-shadow:0 6px 20px rgba(0,0,0,.6);
  border:1px solid rgba(255,255,255,.04);
}

@media (max-width:800px){
  #religion .religion-card{ flex-direction:column-reverse; padding:14px; }
  #religion .religion-text{ font-size:1.08em; line-height:1.7; }
  #religion .religion-image img{ max-width:100%; }
}

/* ===== Races ===== */
#races .races-selector{
  display:flex; flex-wrap:wrap; justify-content:center;
  gap:12px; margin:20px 0 30px;
}
#races .races-selector button{
  background:rgba(246,219,135,.08);
  border:1px solid rgba(246,219,135,.14);
  color:#f6db87; padding:10px 16px; border-radius:18px;
  cursor:pointer; font-weight:800; font-size:1.05em; transition:.25s;
}
#races .races-selector button:hover{
  transform:translateY(-1px);
  background:rgba(246,219,135,.12);
  border-color:rgba(246,219,135,.30);
}
#races .races-selector button.active{
  background:#f6db87; color:#000; box-shadow:0 0 12px rgba(246,219,135,.6);
}

#races .races-content{ max-width:1000px; margin:0 auto; text-align:left; }
#races .races-card{
  display:flex; gap:20px; align-items:stretch; flex-wrap:wrap;
  background:rgba(0,0,0,.25);
  border-radius:12px; padding:18px;
  box-shadow:0 0 10px rgba(0,0,0,.4);
  margin-bottom:30px;
}
#races .races-text{
  flex:1 1 320px; min-width:260px;
  color:#f0e6a5; font-size:1.18em; line-height:1.75; font-weight:700; letter-spacing:.2px;
}
#races .races-text h2{
  margin-top:0; color:#f6db87;
  font-size:1.7em; font-weight:900; letter-spacing:1.2px;
  text-shadow:0 0 6px rgba(246,219,135,.6);
}
#races .races-image{
  flex:1 1 420px; min-width:280px;
  display:flex; align-items:center; justify-content:center;
}
#races .races-image img{
  display:block; width:100%; max-width:320px; height:auto; object-fit:cover;
  border-radius:10px; 
  box-shadow:0 6px 20px rgba(0,0,0,.6);
  border:1px solid rgba(255,255,255,.04);
}

@media (max-width:800px){
  #races .races-card{ flex-direction:column-reverse; padding:14px; }
  #races .races-text{ font-size:1.08em; line-height:1.7; }
  #races .races-image img{ max-width:240px; margin:0 auto; }
}

/* Demon Selector */
#demon-lord .demon-selector {
  display: flex;
  gap: 12px;
  margin: 20px 0 30px;
  justify-content: center;
}

#demon-lord .demon-selector button {
  background: rgba(246, 219, 135, .08);
  border: 1px solid rgba(246, 219, 135, .14);
  color: #f6db87;
  padding: 10px 16px;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.05em;
  transition: .25s;
}

#demon-lord .demon-selector button:hover {
  transform: translateY(-1px);
  background: rgba(246, 219, 135, .12);
  border-color: rgba(246, 219, 135, .30);
}

#demon-lord .demon-selector button.active {
  background: #f6db87;
  color: #000;
  box-shadow: 0 0 12px rgba(246, 219, 135, .6);
}

/* Demon Content */
#demon-lord .demon-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

#demon-lord .demon-card {
  display: flex;
  gap: 20px;
  align-items: stretch;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, .25);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  margin-bottom: 30px;
}

/* Text on the left */
#demon-lord .demon-text {
  flex: 1 1 320px;
  min-width: 260px;
  color: #f0e6a5;
  font-size: 1.18em;
  line-height: 1.75;
  font-weight: 700;
  letter-spacing: .2px;
}

#demon-lord .demon-text h2 {
  margin-top: 0;
  color: #f6db87;
  font-size: 1.7em;
  font-weight: 900;
  letter-spacing: 1.2px;
  text-shadow: 0 0 6px rgba(246, 219, 135, .6);
}

/* Image on the right */
#demon-lord .demon-image {
  flex: 1 1 420px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Demon Image */
#demon-lord .demon-image img {
  display: block;
  width: 100%;
  max-width: 320px;  
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .6);
  border: 1px solid rgba(255, 255, 255, .04);
}


/* Responsive adjustments */
@media (max-width: 800px) {
  #demon-lord .demon-card {
    flex-direction: column-reverse;
    padding: 14px;
  }

  #demon-lord .demon-text {
    font-size: 1.08em;
    line-height: 1.7;
  }

  #demon-lord .demon-image img {
    max-width: 100%;
  }
}


#demon-lord .demon-selector {
  display: flex;
  gap: 12px;
  margin: 20px 0 30px;
  justify-content: center;
  flex-wrap: wrap; 
}

#demon-lord .demon-selector button {
  background: rgba(246, 219, 135, .08);
  border: 1px solid rgba(246, 219, 135, .14);
  color: #f6db87;
  padding: 10px 16px;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.05em;
  transition: .25s;
}

#demon-lord .demon-selector button:hover {
  transform: translateY(-1px);
  background: rgba(246, 219, 135, .12);
  border-color: rgba(246, 219, 135, .30);
}

#demon-lord .demon-selector button.active {
  background: #f6db87;
  color: #000;
  box-shadow: 0 0 12px rgba(246, 219, 135, .6);
}


#demon-lord .demon-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}

#demon-lord .demon-card {
  display: flex;
  gap: 20px;
  align-items: stretch;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, .25);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  margin-bottom: 30px;
  flex-direction: row; 
}

#demon-lord .demon-text {
  flex: 1 1 320px;
  min-width: 260px;
  color: #f0e6a5;
  font-size: 1.18em;
  line-height: 1.75;
  font-weight: 700;
  letter-spacing: .2px;
}

#demon-lord .demon-text h2 {
  margin-top: 0;
  color: #f6db87;
  font-size: 1.7em;
  font-weight: 900;
  letter-spacing: 1.2px;
  text-shadow: 0 0 6px rgba(246, 219, 135, .6);
}

#demon-lord .demon-image {
  flex: 1 1 420px;
  min-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#demon-lord .demon-image img {
  display: block;
  width: 100%;
  max-width: 320px;  
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .6);
  border: 1px solid rgba(255, 255, 255, .04);
}


@media (max-width: 800px) {
  #demon-lord .demon-card {
    flex-direction: column-reverse;
    padding: 14px;
  }

  #demon-lord .demon-text {
    font-size: 1.08em;
    line-height: 1.7;
  }

  #demon-lord .demon-image img {
    max-width: 100%;
  }
}
