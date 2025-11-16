/* =========================================================
   ========================================================= */
(function initGlobals(){

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  window.escapeHtml = escapeHtml;

 
  function buildTwitchAnchor(href, disabled) {
    const a = document.createElement('a');
    a.className = 'twitch-btn';
    a.setAttribute('role', 'button');

    if (disabled) {
      a.setAttribute('aria-disabled', 'true');
      a.textContent = 'Twitch（未提供）';
    } else {
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:18px;height:18px;vertical-align:-3px;margin-right:6px">
          <path fill="currentColor" d="M4 3h16v10.5L16 17H12l-2.5 2.5H8V17H4V3zm14 2H6v9h3v2l2-2h4l3-3.5V5zM14 7h2v4h-2V7zm-5 0h2v4H9V7z"/>
        </svg>
        前往 Twitch
      `;
    }
    return a;
  }

  function renderTwitchButton(url) {
    const divisionText = document.getElementById('division-text');
    if (!divisionText) return;

    let actions = document.getElementById('division-actions');
    if (!actions) {
      const wrapper = document.createElement('div');
      wrapper.id = 'division-actions';
      divisionText.after(wrapper);
      actions = wrapper;
    }
    actions.innerHTML = '';

    if (!url) {
      const disabledBtn = buildTwitchAnchor('#', true);
      disabledBtn.title = '尚未提供 Twitch 連結';
      actions.appendChild(disabledBtn);
      return;
    }

    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    const btn = buildTwitchAnchor(href, false);
    actions.appendChild(btn);
  }
  window.renderTwitchButton = renderTwitchButton;
})();

/* =========================================================
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('#studentSubNav a');
  const houseSections = document.querySelectorAll('.house-students');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const targetHouse = link.dataset.house;
      houseSections.forEach(section => {
        section.style.display = section.id === ('house-' + targetHouse) ? 'block' : 'none';
      });

      const divisionDetail = document.getElementById('division-detail');
      if (divisionDetail) divisionDetail.style.display = 'none';
    });
  });
});

/* =========================================================
   學生資料 
   ========================================================= */
const divisionData = {
  holfindo: {
    '學生1': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】迪諾
【性別】男
【年齡】18歲
【種族】人族 
【個性】開朗  喜愛熱鬧   小害羞
【簡介】
【扮演者】天瀨
`,
      twitch: 'https://www.twitch.tv/ranamase'
    },
    '學生2': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】露亞・艾莉娜 
【性別】女
【年齡】18歲 
【種族】精靈 
【個性】天然 呆萌 調皮。
【簡介】與同齡人的不同之處展現出學習的天賦，對於魔法有著極高的憧憬
【扮演者】諾櫻
`,
      twitch: 'https://www.twitch.tv/re_noe_'
    },
    '學生3': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】露亞・艾莉娜 
【性別】男
【年齡】18歲 
【種族】犬人族 
【個性】好奇心旺盛、熱血、衝動、真誠但混亂
【簡介】出生於犬人族的山邊小鎮，自小就有強烈的好奇心與「不服從天性」。
【扮演者】源犬太
`,
      twitch: 'https://www.twitch.tv/minamoto__kenta'
    },
    '學生4': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】丹佛勒斯・雷焰
【性別】男
【年齡】18歲 
【種族】半精靈 
【個性】天性冷靜、理性，但內心藏著強烈的復仇慾與罪惡感。
【簡介】他的血中同時流著精靈的純淨魔力與雷焰的詛咒之炎。
【扮演者】丹丹丹尼
`,
      twitch: 'https://www.twitch.tv/dandanny1026'
    },
    '學生5': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】薇薇安・胡珀
【性別】女
【年齡】18歲 
【種族】精靈 
【個性】禮貌、文靜、略顯笨拙，實際上固執
【簡介】她的魔力血脈極其純淨，自幼便能聽見樹語與星光之聲。
【扮演者】唯唯兒
`,
      twitch: 'https://www.twitch.tv/kazehaya_yui'
    },
    '學生6': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】艾莉亞・瑟蕾絲
【性別】女
【年齡】18歲 
【種族】精靈 
【個性】看起來柔和可親，但內心有著不容忽視的執著與勇氣
【簡介】十年前，星歌村在魔族的突襲中被摧毀。艾莉亞是少數倖存者之一，被奧德倫的學者救出。
【扮演者】嘎璇
`,
      twitch: ''
    },
    '學生7': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】李秋生
【性別】男
【年齡】18歲 
【種族】人類 
【個性】帥氣、能吸引女性、但常惹麻煩、有點好色為人直接
【簡介】來自古老神秘的東方國度，從小以道教入門學習道法，因後來跟隨家人遠渡西洋
【扮演者】俊俏王
`,
      twitch: 'https://www.twitch.tv/join90328'
    },
    '學生8': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】肯尼・葛林伍夫
【性別】男
【年齡】18歲 
【種族】半狼人 
【個性】溫柔、幽默、神秘、潔癖，滿月時有點亢奮
【簡介】由於詛咒原因無法變身，但滿月時性格還是會有點亢奮，夜視、嗅覺能力偏高，帶著過分乾淨又危險的氣場
【扮演者】罐罐
`,
      twitch: 'https://www.twitch.tv/can1021'
    },
    '學生9': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】波波魯・坡伊
【性別】女
【年齡】18歲 
【種族】魔族 
【個性】自己的本份會認真對待，甚至連聲音都會變得成穩
【簡介】要不是魔族的血統實在太顯眼，她本來是能混成一個「極不想努力的普通人」。
【扮演者】魯波 Lupo
`,
      twitch: 'https://www.twitch.tv/lupo_relive'
    },
    '學生10': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】珂練
【性別】女
【年齡】18歲 
【種族】獸人 
【個性】堅毅、內斂
【簡介】從小便能察覺風的方向、預知天候變化，甚至能聽懂獸群的警告。
【扮演者】歐練
`,
      twitch: 'https://www.twitch.tv/olan300'
    },
    '學生11': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】哈泊
【性別】男
【年齡】18歲 
【種族】人類
【個性】「陽光」「鼓舞人心」
【簡介】意外獲得能操縱水的手鐲後想要好好的操控這些魔法的能力
【扮演者】夜某
`,
      twitch: 'https://www.twitch.tv/yamouo'
    },
    '學生12': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】瓦娃‧希德拉
【性別】女
【年齡】18歲 
【種族】野獸族 
【個性】有些笨拙、容易給人呆呆的感覺，但其實那都是因為她故意不想理人時會裝出的樣子。
【簡介】出生在高貴的吸血蝙蝠世家，對她的家庭來說，血統的純正是最為重要的一件事情，從小到大她被灌輸著「妳必須要達到這個高度」的教育。
【扮演者】襪子わつ
`,
      twitch: 'https://www.twitch.tv/zerowatu'
    }
  },
  skmalin: {
    '學生1': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】薩芮拉
【性別】女
【年齡】18歲 
【種族】魔族 
【個性】開朗、直率；喜歡打破尷尬氣氛，也喜歡挑戰權威
【簡介】誕生為半血魔族，然而這樣的混血身分在魔族與人類之間皆被視為「不潔的存在」，她自幼飽受排斥與歧視。
【扮演者】老婆
`,
      twitch: 'hhttps://www.twitch.tv/s73225200'
    },
    '學生2': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】水仙·穆爾西
【性別】女
【年齡】18歲 
【種族】人類(純血貴族) 
【個性】調皮幽默 反叛精神 優雅卻不拘小節 野心勃勃
【簡介】天生優雅且具有高貴的氣質，但卻不拘小節，喜歡挑戰權威與規則。對黑魔法和幻術有著無與倫比的天賦
【扮演者】水天酋長
`,
      twitch: 'https://www.twitch.tv/waterday0930'
    },
    '學生3': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】多比
【性別】男
【年齡】18歲 
【種族】哥布林
【個性】聰明但衝動，愛炫耀自己是「史上第一個進魔法學院的哥布林」
【簡介】出生在「鐵沼部落」，一個專門回收破銅爛鐵、靠修修補補維生的哥布林族群。
【扮演者】我大歪頭
`,
      twitch: 'https://www.twitch.tv/waitou1117'
    },
    '學生4': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】舒洛里恩·灰花
【性別】女
【年齡】18歲 
【種族】半吸血鬼
【個性】壓抑情緒、自律、極強自尊心
【簡介】舒洛里恩明白家族所中的詛咒，需要靠自己去破除。而她只希望，透過長時間的訓練，她能忍住對血腥的渴望
【扮演者】舒狐
`,
      twitch: 'https://www.twitch.tv/sofox_relive'
    },
    '學生5': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】莎咪·理貢
【性別】女
【年齡】18歲 
【種族】人類
【個性】矛盾、猶豫不決、自卑、迷茫、渴望知識
【簡介】內心非常矛盾，一方面渴望外界的知識，以及被人理解、認同、接納，另一方面又害怕自己的動作會傷害到別人
【扮演者】貝貝
`,
      twitch: 'https://www.twitch.tv/beibei401'
    },
    '學生6': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】梅林·海德羅斯
【性別】男
【年齡】18歲 
【種族】精靈 
【個性】好勝，好奇，混亂善良，樂子人，有點毒舌
【簡介】幼便展現出對一切魔法與戰技的無限熱忱，與多數優雅矜持的同族不同，他桀驁、好勝、充滿實驗精神
【扮演者】梅林
`,
      twitch: 'https://www.twitch.tv/mer1ins'
    },
    '學生7': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】來奧娜
【性別】女
【年齡】18歲 
【種族】人類 
【個性】直爽、慵懶、毒舌，會為了維護自身的利益而不擇手段
【簡介】貧民窟出身，為了生活可以不擇手段
【扮演者】來希
`,
      twitch: 'https://www.twitch.tv/raiki_raibao'
    },
    '學生8': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】安柏·史塔克
【性別】男
【年齡】18歲 
【種族】魔族 
【個性】好奇貪婪，活潑幽默，重視情誼
【簡介】出身於次級貴族家庭，自幼聰慧過人，卻因過度好奇曾誤闖禁書庫，被迫離鄉就學。
【扮演者】秋澤恭介
`,
      twitch: 'https://www.twitch.tv/akizkke0328'
    },
    '學生9': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】瑪莉蓮·吱吱
【性別】女
【年齡】18歲 
【種族】獸人族
【個性】性感 撫媚 騷猴
【簡介】一隻極其聰明、手腳靈活的卷尾猴，他並非來自森林，而是一個瑪莉蓮家族的寵物猴。
【扮演者】Ume
`,
      twitch: 'https://www.twitch.tv/ume_zz'
    },
    '學生10': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】文嘉德·奈洛斯
【性別】男
【年齡】18歲 
【種族】魔族
【個性】幽默活潑、善於活絡氣氛的個性，喜歡以機智俏皮的言語挑逗周遭
【簡介】在父親的牽制下被迫逃離家族，流亡到了艾斯瑞達。努力學習知識與魔法術語
【扮演者】RVin
`,
      twitch: 'https://www.twitch.tv/r_vin310'
    },
    '學生11': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】貓娜・露西婭
【性別】女
【年齡】18歲 
【種族】魔族
【個性】病嬌、腹黑、惡魔、樂子人、不服輸、非常喜歡小動物
【簡介】傳聞她在鏡中看不見自己的倒影，因為她的靈魂早已被她自己吞噬。
【扮演者】猫羽うみ
`,
      twitch: 'https://www.twitch.tv/umii_u'
    },
    '學生12': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】派崔克・雷文沙德
【性別】男
【年齡】18歲 
【種族】海星族
【個性】沉靜、善於傾聽的少年，情緒不易外露，但內心極為敏感。
【簡介】海星族是誕生於潮汐與魔力交會之處的古老種族。他們外表與人類相近，但膚色呈現粉紅色的皮膚
【扮演者】流傳派
`,
      twitch: 'https://www.twitch.tv/zweizz'
    }
  },
  rowenpaf: {
    '學生1': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】依夏 · 拉芙蕾絲 
【性別】女
【年齡】18歲 
【種族】人類 
【個性】溫柔、善解人意、容易讓人感到放鬆，偶爾天然呆犯蠢。
【簡介】天然呆，經常忘東忘西，偶爾把魔法草藥當成糖果吃，或在做咒語時嘴裡嘟囔出完全沒有關係的詞，但她的微笑總是能融化周圍人的緊張和不安。
【扮演者】Misuzu
`,
      twitch: 'https://www.twitch.tv/isuzumaccha'
    },
    '學生2': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】伊森.喬丹 
【性別】男
【年齡】18歲
【種族】獸人 
【個性】性格溫和 不容易生氣很近人喜歡和人聊天
【簡介】來自「灰角山脈」的年輕獸人，身形和正常人類並無區別、覆滿紫色短毛，額頭上有兩隻尚未長成的角。
【扮演者】振宇
`,
      twitch: 'https://www.twitch.tv/da0aaa'
    },
    '學生3': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】凍・維里爾
【性別】男
【年齡】18歲
【種族】精靈 
【個性】極少表達情緒，討厭謊言，卻常用沉默隱藏真相。
【簡介】
【扮演者】可口奶凍
`,
      twitch: 'https://www.twitch.tv/yoyo30108'
    },
    '學生4': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】鈴・艾蕾諾 
【性別】女
【年齡】18歲
【種族】精靈 
【個性】膽小、害羞但極度溫柔的孩子。
【簡介】父母為了保護森林與孩子，燃起光之魔法奮戰至最後一刻。他想成為與父母一樣厲害的魔法師；卻也害怕 害怕陌生的世界、害怕失敗、害怕孤單。
【扮演者】貓白
`,
      twitch: 'https://www.twitch.tv/nekoa_o'
    },
    '學生5': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】馬可・菠蘿
【性別】女
【年齡】18歲
【種族】人類混巫師 
【個性】活潑、開朗、樂天
【簡介】出生於格蘭席亞王國的貴族之家——馬可家族。從小被爸媽保護得很好，可以說是含著金湯匙出生的。
【扮演者】Peggy
`,
      twitch: 'https://www.twitch.tv/peggy_030'
    },
    '學生6': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】賽勒斯・格倫
【性別】男
【年齡】18歲
【種族】半精靈 
【個性】隨和、內向、有點報復心態
【簡介】擁有男性和女性的雙重特徵，但他認為自己是個男性，說話聲音比較陰柔，由於自己混血的身分有時會被純血派的人找麻煩
【扮演者】阿莫
`,
      twitch: ''
    },
    '學生7': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】涅比亞 ・涅波絲姬
【性別】女
【年齡】18歲
【種族】人類 
【個性】喜愛小動物，但不喜歡蟲子，喜好品嘗各式美食，尤其喜歡甜食。
【簡介】族是一個歷史悠久的化獸師世家，雖然不是宮廷權貴但也是名門望族。家族世世代代祭祀信奉著九尾狐神——象徵豐饒及與自然共生的神獸
【扮演者】涅波絲姬
`,
      twitch: ''
    },
    '學生8': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】森薇爾・雷納德
【性別】女
【年齡】18歲
【種族】人類 
【個性】喜歡和平、不喜歡戰爭與殺戮，溫柔、開朗、對世界充滿好奇心。
【簡介】對「刀與劍」有強烈的排斥感、連碰都不願意碰...沒有人知道為什麼、她也從來不跟其他人說....
【扮演者】阡狐
`,
      twitch: 'https://www.twitch.tv/senkitsune_huni'
    },
    '學生9': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】菲尼・克斯
【性別】男
【年齡】18歲
【種族】人類 
【個性】勇敢 冷靜 不放棄的精神 大E人
【簡介】性格勇敢堅毅，心懷和平與善良的信念。雖然只是普通人，卻始終渴望成為能守護他人的存在
【扮演者】柳丁
`,
      twitch: 'https://www.twitch.tv/mama0321'
    },
    '學生10': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】威斯・塔克
【性別】男
【年齡】18歲
【種族】人類 
【個性】樂觀 沒主見 單純 體能好 記憶力不好 想太多 
【簡介】因自信不足和想太多而猶豫不決。他記性不好，做事容易忘東忘西
【扮演者】Shoyu
`,
      twitch: 'https://www.twitch.tv/shoyu0526'
    },
    '學生11': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】達克·鴨鴨
【性別】男
【年齡】18歲
【種族】獸人 
【個性】膽小內向閉俗 遇到危險就快跑
【簡介】想改變自己懦弱的性格，立志成為一個更有用的鴨子。
【扮演者】鴨鴨二
`,
      twitch: 'https://www.twitch.tv/yaya6315341'
    },
    '學生12': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】米拉·艾芙琳
【性別】女
【年齡】18歲
【種族】半精靈 
【個性】溫柔、怕生、喜歡小動物、聰明但有點小迷糊
【簡介】她在童年時曾誤入父親封印的古老森林，遭受魔物襲擊，最後靠著自己微弱的治癒魔法保住了性命
【扮演者】五十鈴抹茶糰子
`,
      twitch: 'https://www.twitch.tv/isuzumaccha'
    }
  },
  twicklow: {
    '學生1': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】妮芙·羅萊特
【性別】女
【年齡】18歲
【種族】精靈 
【個性】求知慾旺盛、喜歡小動物和食物
【簡介】求知慾旺盛的年輕精靈，對世間萬物充滿好奇。她不僅熱衷於書本上的知識，也喜歡親身探索與實踐。
【扮演者】踏雪嗚哇
`,
      twitch: 'https://www.twitch.tv/sunohamster'
    },
    '學生2': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】尼諾・普普卡
【性別】男
【年齡】18歲
【種族】幽影族 
【個性】冷靜神秘，理智而敏感，對未知充滿好奇
【簡介】出生於幽影族，族人本不與人類世界頻繁接觸，但對生者世界充滿好奇。
【扮演者】補路
`,
      twitch: 'https://www.twitch.tv/blue_kao'
    },
    '學生3': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】踢卡.赫布斯特
【性別】女
【年齡】18歲
【種族】兔人族 
【個性】喜愛探索學習，膽子有點小，喜愛森林的一切，喜愛蒐集小東西。
【簡介】艾斯瑞達大陸的森林兔人族少女，赫布斯特世世代代為藥草師家族，嚮往學習更多關於魔法的奧秘
【扮演者】踢踢
`,
      twitch: 'https://www.twitch.tv/ttspoon'
    },
    '學生4': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】栗里.咪烏斯
【性別】女
【年齡】18歲
【種族】人類 
【個性】慵懶、可愛、隨性，最愛曬太陽和打盹
【簡介】自小在花草與魔獸之間長大，家人希望她繼承家族職責，成為「森林守護者」。
【扮演者】沐沐菟栮
`,
      twitch: 'https://www.twitch.tv/mutuer'
    },
    '學生5': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】栗里.咪烏斯
【性別】男
【年齡】18歲
【種族】人類 
【個性】豪放、愛冒險、頑皮、口無遮攔、男子氣概、 稱兄道弟
【簡介】希望能夠成為真正能守護他人的強者，不再只是被世界逼著低頭的弱者。
【扮演者】千夏
`,
      twitch: 'https://www.twitch.tv/chinatsu_tkfmt'
    },
    '學生6': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】莉斯法古曼
【性別】女
【年齡】18歲
【種族】人類 
【個性】樂觀活潑又調皮，內心心思細膩也很善良，樂於助人。
【簡介】家境雖然不算富裕卻也過得還算滋潤，從小被父母捧在手心長大，有些被寵壞的調皮，但是內心還是善良的
【扮演者】德海伊拉
`,
      twitch: ''
    },
    '學生7': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】哥倫比婭·沐玥
【性別】女
【年齡】18歲
【種族】人類 
【個性】聰慧、冷靜、但有強烈正義感與反骨氣質
【簡介】出身於古老的月紋家族——以製作月石聞名。家族的魔法信條是「順服光明，驅逐黑暗」。
【扮演者】阿辣
`,
      twitch: 'https://www.twitch.tv/rr_leice'
    },
    '學生8': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】艾涅爾．平安
【性別】女
【年齡】18歲
【種族】游牧族群──「風隱者」 
【個性】喜愛刺激自由冒險，喜歡跟有相同目標的人相處
【簡介】他自幼便能聽見「風的聲音」，能感受到氣流的情緒，並在夢中看到星辰的軌跡。
【扮演者】鋪許
`,
      twitch: 'https://www.twitch.tv/pushxrp'
    },
    '學生9': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】伊默．哞斯塔
【性別】男
【年齡】18歲
【種族】牛頭人
【個性】穩重、善良、有點慢熱
【簡介】從小就與魔力產生奇怪的共鳴。當他情緒激動時，周圍的金屬會「鳴響」；當他難過時，鐵匠鋪的工具會微微震動
【扮演者】馬魯
`,
      twitch: 'https://www.twitch.tv/anninmaru0402'
    },
    '學生10': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【角色】凱特琳・汀斯莉
【性別】女
【年齡】18歲
【種族】人類
【個性】外向、樂天、嘴甜、行動派、愛管閒事但心地超好
【簡介】對她的爸媽來說，執法是榮譽，魔法卻被視為危險的幻想，魔法太變幻無常了。但凱特琳認為，在這個有魔族的世界，光成為警察是不夠的，肯定要學會魔法才能更有信心對抗這一切
【扮演者】ㄚ布丁丁
`,
      twitch: 'https://www.twitch.tv/hipudding1223'
    },
    '學生11': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E5%AD%B8%E7%94%9F%2FMG%20M.png?alt=media&token=105f2c02-64b9-4f5c-8d32-3212b39c7bb1',
      text: `
【未登記學生資料】
【扮演者】
`,
      twitch: ''
    },
    '學生12': {
      img: 'https://via.placeholder.com/150?text=特威克羅學生12',
      text: `
【未登記學生資料】
【扮演者】
`,
      twitch: ''
    }
  }
};

/* =========================================================
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const studentListSection = document.getElementById('students-section');
  const studentSubNav = document.getElementById('studentSubNav');
  const divisionDetail = document.getElementById('division-detail');
  const divisionImg = document.getElementById('division-img');
  const divisionText = document.getElementById('division-text');
  const closeDetailBtn = document.getElementById('close-detail');
  const contentWrapper = divisionDetail?.querySelector('.content-wrapper');

  function closeDivisionDetail() {
    if (!divisionDetail) return;
    divisionDetail.style.display = 'none';
    if (studentListSection) studentListSection.style.display = 'block';
    if (studentSubNav) studentSubNav.style.display = 'flex';
    const actions = document.getElementById('division-actions');
    if (actions) actions.innerHTML = '';
  }
  window.closeDivisionDetail = closeDivisionDetail;

  if (closeDetailBtn) {
    closeDetailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDivisionDetail();
    });
  }

  if (divisionDetail && contentWrapper) {
    divisionDetail.addEventListener('click', (e) => {
      if (!contentWrapper.contains(e.target) && e.target !== closeDetailBtn) {
        closeDivisionDetail();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && divisionDetail && divisionDetail.style.display === 'block') {
      closeDivisionDetail();
    }
  });

  // 綁定學生卡片
  document.querySelectorAll('.student-card').forEach(card => {
    card.addEventListener('click', () => {
      const student = card.dataset.student;
      const house = card.dataset.house;
      const detail = (divisionData[house] && divisionData[house][student]) || null;

      if (!detail) {
        alert('該學生的分業資料尚未設定。');
        return;
      }

      if (divisionImg) {
        divisionImg.src = detail.img || '';
        divisionImg.alt = (student || '') + ' 分業圖片';
      }
      if (divisionText) divisionText.innerHTML = detail.text || '';

      window.renderTwitchButton(detail.twitch);

      if (divisionDetail) {
        divisionDetail.style.display = 'block';
        divisionDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (studentListSection) studentListSection.style.display = 'none';
      if (studentSubNav) studentSubNav.style.display = 'none';
    });
  });

  
  (function () {
    const modal = divisionDetail;
    if (!modal) return;
    let block = null;
    window.lockDetail = function (lock) {
      if (lock) {
        modal.classList.add('no-scroll');
        block = function (e) { e.preventDefault(); e.stopPropagation(); };
        const targets = [
          modal,
          modal.querySelector('.content-wrapper'),
          modal.querySelector('#division-text')
        ].filter(Boolean);
        targets.forEach(el => {
          el.addEventListener('wheel', block, { passive: false });
          el.addEventListener('touchmove', block, { passive: false });
          el.addEventListener('scroll', block, { passive: false });
        });
      } else {
        modal.classList.remove('no-scroll');
        if (!block) return;
        const targets = [
          modal,
          modal.querySelector('.content-wrapper'),
          modal.querySelector('#division-text')
        ].filter(Boolean);
        targets.forEach(el => {
          el.removeEventListener('wheel', block);
          el.removeEventListener('touchmove', block);
          el.removeEventListener('scroll', block);
        });
        block = null;
      }
    };
  })();
});

/* =========================================================
   學院資料 
   ========================================================= */
const academies = {
  gryffindor: {
    title: '霍爾芬多',
    desc: `霍爾芬多分院代表的是忠誠與榮譽，以守護他人與誓言為信條。這個分院的學生往往來自具有強烈責任感的家族——無論是人類、精靈或矮人，對他們而言，忠誠不僅是一種品德，更是一種力量。<br><br>
分院的座右銘是：「守護不僅是使命，更是信仰」。霍爾芬多的校徽是一隻展翅的雄鷹，象徵勇氣與無畏的守護精神。`,
    notes: '特色：勇氣、無畏、守護精神。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%A0%A1%E5%BE%BD%2FHolfindo.png?alt=media&token=92aa53b0-9fb9-4d91-bb22-a8b5836909e6',
    alt: '霍爾芬多 學院徽章'
  },
  hufflepuff: {
    title: '赫文帕夫',
    desc: `赫文帕夫分院代表和諧與平衡，是學院中最為和平與內斂的分院。學生多半擁有優雅的氣質與溫和的性格，崇尚安寧與心靈的純淨。<br><br>
他們重視魔法對自然與情感的影響，而非追求力量本身。赫文帕夫的校徽是一隻鹿，象徵潔淨、溫柔與和諧之力。`,
    notes: '特色：潔淨、和諧。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%A0%A1%E5%BE%BD%2FHuwenpaf.png?alt=media&token=0601abd2-5306-495a-a472-50843bd98518',
    alt: '赫文帕夫 學院徽章'
  },
  ravenclaw: {
    title: '特威克羅',
    desc: `特威克羅分院代表智慧與知識，是學院中最神秘且最重視學術研究的分院。學生熱衷於探索魔法理論與世界真理，相信知識是解開萬物之鎖的唯一鑰匙。<br><br>
他們致力於推進魔法科學的邊界，揭露隱藏於世界縫隙間的奧秘。特威克羅的校徽是一隻貓頭鷹，象徵對知識的無盡渴望與探索未知的勇氣。`,
    notes: '特色：智慧、知識、創造力。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%A0%A1%E5%BE%BD%2FTwicklaw.png?alt=media&token=67837eb6-0317-45fb-b10e-302e58a05b26',
    alt: '特威克羅 學院徽章'
  },
  slytherin: {
    title: '坎普費爾',
    desc: `坎普費爾分院代表力量與權威，主張身體與心靈皆必須歷經鍛鍊與試煉。這個分院的學生擅長攻擊魔法與戰鬥技巧，並追求自我強化與無盡的力量。<br><br>
他們相信唯有經歷無數挑戰與磨難，才能真正掌握強大的力量。坎普費爾分院的校徽是一條青蛇，象徵強勢的力量、意志與狡詐之美。`,
    notes: '特色：野心、狡猾、領導力。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%A0%A1%E5%BE%BD%2Fkampfer.png?alt=media&token=3c1fba28-265a-4c0e-9fe5-e6139cb332c6',
    alt: '坎普費爾 學院徽章'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const academySelector = document.getElementById('academySelector');
  const academyContent = document.getElementById('academyContent');

  function showAcademy(key) {
    const a = academies[key];
    if (!a) {
      academyContent.innerHTML = '<p style="color:#d6c98b;">尚未設定此學院內容。</p>';
      return;
    }
    academyContent.innerHTML = `
      <div class="academy-card" role="region" aria-label="${escapeHtml(a.title)}">
        <div class="academy-text">
          <h2>${escapeHtml(a.title)}</h2>
          <p class="academy-desc"></p>
          <p><strong>${escapeHtml(a.notes)}</strong></p>
        </div>
        <div class="academy-image">
          <img src="${escapeHtml(a.img)}" alt="${escapeHtml(a.alt)}">
        </div>
      </div>
    `;
    academyContent.querySelector('.academy-desc').innerHTML = a.desc;
  }
  window.showAcademy = showAcademy;


  if (academySelector) {
    academySelector.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.academy;
        academySelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showAcademy(key);
      });
    });
  }
  // 預設顯示
  if (academyContent) showAcademy('gryffindor');
});

/* =========================================================
   首頁/進入頁、音樂、區塊切換、學生分頁切換
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');
  const nav = document.querySelector('nav');
  const entryPage = document.getElementById('entryPage');
  const homeSection = document.getElementById('home');

  function showEntryPage() {
    if (entryPage) entryPage.style.display = 'flex';
    if (nav) nav.style.display = 'none';
    if (logo) logo.style.display = 'none';
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  }

  function showHomePage() {
    if (entryPage) entryPage.style.display = 'none';
    if (nav) nav.style.display = 'block';
    if (logo) logo.style.display = 'block';
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    if (homeSection) homeSection.classList.add('active');
  }

  window.showEntryPage = showEntryPage;
  window.showHomePage = showHomePage;


  showEntryPage();

  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      showHomePage();
    });
  }

 const joinBtn     = document.getElementById('joinBtn');
const bgMusic     = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon   = document.getElementById('musicIcon');
const musicLabel  = document.getElementById('musicLabel');

if (bgMusic) {
  bgMusic.volume = 0.18;
  bgMusic.loop = true;
}


  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.house-students').forEach(hs => hs.style.display = 'none');


    if (sectionId === 'students') {
      const students = document.getElementById('students');
      if (students) students.classList.add('active');
      setActiveHouse('holfindo');
    } else {
      const sec = document.getElementById(sectionId);
      if (sec) sec.classList.add('active');

 
      if (sectionId === 'map') {
        const mapContentHasCard = !!document.querySelector('#mapContent .map-card');
        if (!mapContentHasCard) {
          showMap('aldrun');
          const allBtns = document.querySelectorAll('#mapSelector button');
          const schoolBtn = document.querySelector('#mapSelector button[data-map="school"]');
          allBtns.forEach(b => b.classList.remove('active'));
          if (schoolBtn) schoolBtn.classList.add('active');
        }
      }
    }
  }
  window.showSection = showSection;

  function setActiveHouse(houseKey) {
    document.querySelectorAll('.house-students').forEach(hs => hs.style.display = 'none');
    const el = document.getElementById('house-' + houseKey);
    if (el) el.style.display = 'block';

    const houseLinks = document.querySelectorAll('#studentSubNav a');
    houseLinks.forEach(link => {
      if (link.dataset.house === houseKey) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  window.setActiveHouse = setActiveHouse;


  function setUI(isPlaying) {
  if (musicIcon) musicIcon.textContent = isPlaying ? '⏸' : '▶';
  if (musicToggle) musicToggle.setAttribute('aria-pressed', String(isPlaying));
  if (musicLabel) musicLabel.textContent = isPlaying ? '音樂：播放中' : '背景音樂（暫停）';
}

if (bgMusic) {
  bgMusic.addEventListener('play',   () => setUI(true));
  bgMusic.addEventListener('playing',() => setUI(true));
  bgMusic.addEventListener('pause',  () => setUI(false));
  bgMusic.addEventListener('ended',  () => setUI(false));
  bgMusic.addEventListener('error',  () => setUI(false));
  bgMusic.addEventListener('stalled',() => setUI(false));
  bgMusic.addEventListener('waiting',() => setUI(true)); 
}


let opLock = false;


async function safePlay() {
  if (!bgMusic) return;
  if (opLock) return;          
  try {
    
    const p = bgMusic.play();
    if (p && typeof p.then === 'function') {
      await p;                 
    }
    
  } catch (err) {
   
    console.warn('播放音樂遭阻擋或錯誤：', err);
    setUI(false);
  } finally {
    opLock = false;
  }
}


if (joinBtn) {
  joinBtn.addEventListener('click', async () => {
    showHomePage();
    if (!bgMusic) return;
    await safePlay();
  });
}

// --- 切換播放/暫停 ---
if (musicToggle) {
  musicToggle.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!bgMusic || opLock) return;

  
    if (!bgMusic.paused) {
      
      opLock = true;
      try {
        bgMusic.pause();  
      } finally {
       
        setTimeout(() => { opLock = false; }, 120);
      }
    } else {
      await safePlay();   
    }
  });
}


setUI(false);


  document.querySelectorAll('nav a[data-section]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const section = link.dataset.section;
      showSection(section);
    });
  });


  const studentIntroNav = document.getElementById('studentIntroNav');
  if (studentIntroNav) {
    studentIntroNav.addEventListener('click', e => {
      e.preventDefault();
      showSection('students');
      setActiveHouse('holfindo');
    });
  }


  const houseLinks = document.querySelectorAll('#studentSubNav a');
  houseLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const house = link.dataset.house;
      setActiveHouse(house);
    });
  });
});
// JavaScript 用來顯示魔鏡日報頁面
document.querySelector('[data-section="newspaper"]').addEventListener('click', function() {
  // 隱藏其他頁面
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');
  
  // 顯示魔鏡日報頁面
  document.getElementById('newspaper').style.display = 'block';
});


/* =========================================================
   地圖功能
   ========================================================= */
const maps = {
  aldrun: {
    title: '奧德倫王國',
    desc: '奧德倫以魔法與奧術傳統並立而聞名於世。自建國以來，魔導學識便被視為貴族修養與王權象徵，每位王室成員皆受嚴格的法術教育，以確保血脈中流動的，不僅是統治的權威，更是「秩序與光」的祝福。王族視自己為「光之代言人」，肩負維持世界平衡與驅逐黑暗之責。',
    notes: '特色：傳承奧秘、多元共融、卓越教育。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%8E%8B%E5%9C%8B%2F%E5%A5%A7.png?alt=media&token=8e7ccd82-4ecd-4c7c-9910-5c3f081ff60a',
    alt: '奧德倫王國 圖片'
  },
  school: {
    title: '麥格華茲',
    desc: '麥格華茲學院座落於奧德倫王國。致力於培養年輕一代的魔法師，促進不同種族間的理解與合作，共同維護大陸的和平與繁榮。四個分院，每個分院代表著不同的價值觀與特質。 透過這樣的分院制度，學生不僅能學習強大的魔法技能，更能培養出領導力、勇氣與智慧。',
    notes: '特色：傳承奧秘、多元共融、卓越教育。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%8E%8B%E5%9C%8B%2FMG.png?alt=media&token=f94a5fc4-c7d0-4aa4-92dd-949bfcc18b23',
    alt: '麥格華茲 圖片'
  },
  dwarf: {
    title: '矮人城塞',
    desc: '矮人城塞位於高聳岩巒之中，石砌建築與鍛造作坊遍佈其間。這裡的矮人工匠擅長打造堅固盔甲與精密機械，城內常有金屬火花與悠揚的敲擊聲。來到此地，旅者會被深厚的歷史感與工藝魅力所吸引。',
    notes: '特色：地下鍛造坊、堅固城牆、古老礦道。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%8E%8B%E5%9C%8B%2Fdwarf.png?alt=media&token=76daff30-5e37-4e6f-b803-7151427ab8cb',
    alt: '矮人城塞 圖片'
  },
  sakura: {
    title: '櫻花城',
    desc: '櫻花城以滿山的櫻花聞名，春季時整座城猶如粉色海洋。城中的古寺和茶屋保存了細緻的禮儀與傳統，吸引詩人與畫家長期駐足創作。',
    notes: '特色：櫻花大道、古寺、季節祭典。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%8E%8B%E5%9C%8B%2FCherry.png?alt=media&token=1002ccb7-d96f-4382-a779-87063bf91090',
    alt: '櫻花城 圖片'
  },
  elves: {
    title: '精靈城邦',
    desc: '精靈城邦隱匿於古老森林的樹冠之上，以輕盈優雅的建築和自然魔法融合為特色。精靈們與自然和諧共處，擅長治癒與自然魔法，是求學與靈性修養的理想之地。',
    notes: '特色：樹屋建築、自然魔法、長生傳說。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%8E%8B%E5%9C%8B%2FElf.png?alt=media&token=94a3acf5-00d7-4d39-b378-1c393f13b227',
    alt: '精靈城邦 圖片'
  },
  snow: {
    title: '聖塔瑞斯城',
    desc: '聖塔瑞斯城依山傍海而建，白色大理石殿堂與橘頂圓塔林立，宛如眾神居所。街道間遍布石柱與壁畫，記錄著古老神話與英雄傳說。旅者能在此感受到濃厚的文化底蘊與神聖氛圍。',
    notes: '神殿建築、神話傳說、英雄紀念碑。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%8E%8B%E5%9C%8B%2FGreece.png?alt=media&token=c193bf96-4859-4f6f-ba39-0d44019d82e1',
    alt: '聖塔瑞斯城 圖片'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const mapSelector = document.getElementById('mapSelector');
  const mapContent = document.getElementById('mapContent');

  function showMap(key) {
    const m = maps[key];
    if (!m) {
      if (mapContent) mapContent.innerHTML = '<p style="color:#d6c98b;">尚未設定此地圖內容。</p>';
      return;
    }
    if (mapContent) {
      mapContent.innerHTML = `
        <div class="map-card" role="region" aria-label="${escapeHtml(m.title)}">
          <div class="map-text">
            <h2>${escapeHtml(m.title)}</h2>
            <p>${escapeHtml(m.desc)}</p>
            <p><strong>${escapeHtml(m.notes)}</strong></p>
          </div>
          <div class="map-image">
            <img src="${escapeHtml(m.img)}" alt="${escapeHtml(m.alt)}">
          </div>
        </div>
      `;
    }
  }
  window.showMap = showMap;

  if (mapSelector) {
    mapSelector.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = btn.dataset.map;
        mapSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showMap(key);
      });
    });
  }
});

/* =========================================================
   紀元 
   ========================================================= */
const eras = {
  primordial: {
    title: '太初紀元',
    desc: ' 世界初開，七大元素自虛空誕生。 獸人首先踏上大地，成為自然原力的化身。 山川開始流動，風與火首次交織，艾斯瑞達迎來最原始的生命之歌。',
    notes: '創世、古誓。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%B4%80%E5%85%83%2F%E5%A4%AA%E5%88%9D%E7%B4%80%E5%85%83_768x768.png?alt=media&token=adb7cea7-cf55-4e52-bef1-8b8d97bd6e73',
    alt: '太初紀元 圖像'
  },
  ironfire: {
    title: '鐵與火之紀元',
    desc: '精靈、矮人與龍族的黃金時代。 山嶺中響起工坊的鐵擊聲，而天空之上，龍族以烈焰劃出古代榮光的軌跡。 這是一個力量與技藝共存的年代——被稱為「鍛造之世」。',
    notes: '鍛造、城塞、盟約。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%B4%80%E5%85%83%2F%E9%90%B5%E8%88%87%E7%81%AB.png?alt=media&token=d1920baf-528f-43b8-a4f5-39f0c8a3763f',
    alt: '鐵與火之紀元 圖像'
  },
  sea_man: {
    title: '海與人之紀元',
    desc: '人類崛起的時代。他們乘著風帆穿越海洋，建立王國與信仰，並創立第一批魔法學院，使知識成為力量的新象徵。宗教與學術並行，世界的秩序開始以「理性」而非「血統」為核心重構。',
    notes: '航海、星圖、學院。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%B4%80%E5%85%83%2F%E6%B5%B7%E8%88%87%E4%BA%BA.png?alt=media&token=b1e45734-28bb-4414-89c9-c1e5a8ff8a03',
    alt: '海與人之紀元 圖像'
  },
  dark: {
    title: '黑暗紀元',
    desc: `地獄之門被打開，惡魔族降臨大地。魔王薩爾格洛斯率領魔族大軍席捲世界，精靈森林化為焦土，矮人城塞被烈焰吞噬，龍族幾近滅絕，而獸裔被迫流亡荒原。<br><br>
長達五百年的戰火將文明推向崩潰，世界陷入永夜與絕望之中。`,
    notes: '禁忌、魔族、戰爭。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%B4%80%E5%85%83%2F%E9%BB%91%E6%9A%97.png?alt=media&token=638a8403-d43e-44a4-9a89-1a1bb904117d',
    alt: '黑暗紀元 圖像'
  },
  darkend: {
    title: '黑暗紀元的浩劫',
    desc: `在黑暗紀元4497年，創世三主神降臨凡界，聯合最後的人類、精靈與矮人聯軍，於「靈魂荒原」展開最終決戰。魔王的咆哮吞噬天際，而神之光撕裂了永夜。<br><br>
最終，薩爾格洛斯被擊殺，靈魂四分五裂，封印於四件聖物之中。此戰後，大陸陷入漫長的沉眠期——種族凋零、知識失傳，唯有學院的火焰仍微弱閃爍。`,
    notes: '戰爭結束、封印、勝利。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%B4%80%E5%85%83%2F%E9%BB%91%E6%9A%97%E6%9C%AB.png?alt=media&token=53fe9df5-47ab-46d1-afb8-fce5f811ce9e',
    alt: '黑暗紀元 圖像'
  },
  rebirth: {
    title: '新生紀元',
    desc: `三主神修復世界秩序、封印地獄之門；倖存的種族開始重建家園，而麥格華茲魔法學院也在廢墟之上，再度點燃知識之火。<br><br>
新生紀元象徵和平與重生，但陰影仍潛伏於大地的縫隙之間——魔族殘黨、純血家族與禁忌魔法的低語，正悄然醞釀新的風暴。`,
    notes: '重建、聯盟、新生。',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%B4%80%E5%85%83%2F%E6%96%B0%E7%94%9F.png?alt=media&token=058007cd-f225-4150-9871-f189331346a7',
    alt: '新生紀元 圖像'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const eraSelector = document.getElementById('eraSelector');
  const eraContent = document.getElementById('eraContent');

  function renderEra(key) {
    const e = eras[key];
    if (!e || !eraContent) return;
    eraContent.innerHTML = `
      <div class="map-card">
        <div class="map-text">
          <h2>${escapeHtml(e.title)}</h2>
          <p>${e.desc}</p>
          <p><strong>重點：</strong>${escapeHtml(e.notes)}</p>
        </div>
        <div class="map-image">
          <img src="${escapeHtml(e.img)}" alt="${escapeHtml(e.alt)}">
        </div>
      </div>
    `;
  }
  window.renderEra = renderEra;

  if (eraSelector) {
    eraSelector.addEventListener('click', (ev) => {
      const btn = ev.target.closest('button[data-era]');
      if (!btn) return;
      [...eraSelector.querySelectorAll('button')].forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderEra(btn.dataset.era);
    });
  }
  // 預設
  if (eraContent) renderEra('primordial');
});

/* =========================================================
   三主神  + 宗教 
   ========================================================= */
const gods = {
  astrion: {
    title: '光明主神・奧爾菲恩（Orpheon）',
    desc: ' 祂的光明是萬物的起始，賜予靈魂與希望。祂曾以神火燃盡魔王的肉身，使大地重獲新生。 信徒多為聖職者與治癒系魔導師。',
    domains: '生命、重生',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A5%9E%2FOrpheon.png?alt=media&token=6d91eaf4-d986-47e8-b081-466e8dbb1dcd',
    alt: '光照群山的湖面'
  },
  noctalis: {
    title: '黑暗主神・納斐爾（Naphiel）',
    desc: '祂是靈魂歸途的守望者，審視生者之罪與亡者之願。 在魔王死後，納斐爾將其靈魂粉碎，使其永不得輪迴。 祂的信仰象徵平衡，而非邪惡。',
    domains: '死亡與審判',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A5%9E%2FNaphiel.png?alt=media&token=4ea8e82b-1918-4ad1-989a-ff54d12b7729',
    alt: '星空與夜色'
  },
  aetherion: {
    title: '時間之主・伊多斯（Idoth）',
    desc: '祂是世界規律的織者，讓時間、命運與魔力流轉不息。 在終極之戰中，祂以時光鎖鏈封印魔族之門，使世界再次歸於穩定。所有關於魔法理論與智慧之書，皆以祂為源。',
    domains: '秩序與循環',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A5%9E%2FIdoth.png?alt=media&token=5ce207c4-e9ec-447b-a7c9-9a3b7b992a57',
    alt: '金色晨光中的森林'
  }
};

const religionData = {
  astrion: {
    title: '曙光聖環教',
    desc: `信奉光明主神。主張「魔力即神恩，光明即秩序」。信徒以魔法祈禱維持和平與救贖。教團設有審光院與聖環騎士團，負責審查黑魔法與異端。<br><br>
「唯有被光照亮的知識，才值得傳承。」`,
    domain: '秩序、誓約、循環',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A5%9E%2F%E5%B1%AC%E5%85%89.png?alt=media&token=2c5236f4-48dd-4d34-b4db-0fc4964deba2',
    alt: '聖光灑落的大地'
  },
  noctalis: {
    title: '灰月秘儀會',
    desc: `信奉黑暗主神。主張「黑暗是光的回聲，死亡是生命的延續」。儀式於月蝕之夜舉行，以血墨繪製月之符文，召喚亡靈對話。其信徒多為靈魂法師與夜行者。<br><br>
「光能照亮世界，但唯有影子能讓世界有形。」`,
    domain: '夢境、影、憐憫',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A5%9E%2F%E7%81%B0%E9%BB%91.png?alt=media&token=ad0fe60b-a178-4820-9f6c-9711d9b6910c',
    alt: '星空下的靜夜'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  function renderGod(key) {
    const data = gods[key];
    if (!data) return;
    const html = `
      <div class="god-card">
        <div class="god-text">
          <h2>${escapeHtml(data.title)}</h2>
          <p>${data.desc}</p>
          <p><strong>領域：</strong>${escapeHtml(data.domains)}</p>
        </div>
        <div class="god-image">
          <img src="${escapeHtml(data.img)}" alt="${escapeHtml(data.alt)}">
        </div>
      </div>
    `;
    const host = document.getElementById('godContent');
    if (host) host.innerHTML = html;
  }
  window.renderGod = renderGod;

  const godSelector = document.getElementById('godSelector');
  if (godSelector) {
    godSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-god]');
      if (!btn) return;
      godSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGod(btn.dataset.god);
    });
    renderGod('astrion');
  }

  function renderReligion(godKey) {
    const g = religionData[godKey];
    const container = document.getElementById('religionContent');
    if (!g || !container) return;
    container.innerHTML = `
      <div class="religion-card">
        <div class="religion-text">
          <h2>${escapeHtml(g.title)}</h2>
          <p>${g.desc}</p>
          <p><strong>領域：</strong>${escapeHtml(g.domain)}</p>
        </div>
        <div class="religion-image">
          <img src="${escapeHtml(g.img)}" alt="${escapeHtml(g.alt)}">
        </div>
      </div>`;
  }
  window.renderReligion = renderReligion;

  const religionSelector = document.getElementById('religionSelector');
  if (religionSelector) {
    religionSelector.addEventListener('click', e => {
      const btn = e.target.closest('button[data-god]');
      if (!btn) return;
      religionSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderReligion(btn.dataset.god);
    });
    renderReligion('astrion');
  }
});

/* =========================================================
   種族資料 Races
   ========================================================= */
const racesData = {
  human: {
    title: '人類（Human）',
    desc: `人類被視為最具變化性的種族，既能墮落也能超越。他們擁有強烈的好奇心與適應力，文明遍布世界各地；不像精靈擁有永恆的壽命，也不像矮人擁有天生的力量。<br><br>
但正因如此，人類的生命如火般短促卻璀璨。人類歷史是一場場戰爭與重建的循環——建立王國、締結聯盟，也因權力與信仰而彼此爭戰。`,
    trait: '適應力、野心、多元文化',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A8%AE%E6%97%8F%2F%E4%BA%BA%E9%A1%9E.png?alt=media&token=7e9dc7a1-4448-4d8b-96d0-c3a5bac4bb08',
    alt: '人類城市'
  },
  elf: {
    title: '精靈（Elf）',
    desc: `精靈，乃星之後裔、光之子民。他們自遠古的「黎明之森」誕生，以優雅的容貌、長久的壽命與天賦魔力聞名於世。<br><br>
精靈之血被視為世界樹的延續，每一滴都流淌著自然與魔力的純粹共鳴。他們居於遠離凡塵的森域之都，以詩、魔法與禮制構築文明。精靈族群高度重視血統純淨與靈魂傳承。<br><br>
古代精靈語言：ᛖᛚᚨᚱ ᛋᛁᛚᚱᚨ ᚦᚨᛚᚨᚾᛁᚱ ᚹᚨᛖᛚ ᛗᛁᚱ ᛋᛁᚱᚨᛖ`,
    trait: '魔力親和、優雅、長壽',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A8%AE%E6%97%8F%2Felf.png?alt=media&token=0b5461dd-a519-4982-8db2-a0f94d934c27',
    alt: '精靈森林'
  },
  dwarf: {
    title: '矮人（Dwarf）',
    desc: `鑄造與堡壘的宗師，火與土的子嗣。他們是符文與鍛造的守護者，擁有無與倫比的耐性與工藝天賦。<br><br>
矮人誕生於大地最深處的火脈之中，城市建於山腹，符文刻滿石柱，烈焰終年不熄。他們以榮譽、家族與契約為生命根基。<br><br>
遠古矮人語：Dûrm khaldun grok thar.`,
    trait: '鍛造、韌性、工藝文明',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A8%AE%E6%97%8F%2F%E7%9F%AE%E4%BA%BA.png?alt=media&token=5d96c1dc-8df9-4474-8ad1-b238d0be7d5b',
    alt: '矮人堡壘'
  },
  orc: {
    title: '魔族（Demon）',
    desc: `黑暗意志、原初詛咒與混沌能量所凝聚的高等種族。他們並不以生命繁衍，而以靈魂吞噬、契印與腐化儀式延續血脈，每個魔族的軀體皆由魔能構成，可化為人形、獸形，或煙霧與影焰。<br><br>
每一位魔族皆以「真名（True Name）」為核心——真名即靈魂之印，失去它便形體崩解、意志消散。魔族的血脈並非由繁衍延續，而是經由契印與吞噬儀式，他們能以魔法奪取他者靈魂，將其本質融入自身，使力量代代積累並永無止境。<br><br>
遠古魔族語言：Azrak morduun ska’ra thu’kai.`,
    trait: '力量、血統、階級',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A8%AE%E6%97%8F%2Fdemo.png?alt=media&token=f1b30bd9-2738-41d4-8cf8-46c45a065759',
    alt: '半獸族部落'
  },
  beastkin: {
    title: '獸裔（Beastkin）',
    desc: `融合自然靈與獸之血的原生種。他們以強大的感知、本能與身體能力著稱，並擁有「原始魔法（Primal Magic）」的直覺天賦。傳說他們是自然之靈與遠古巨獸的後裔，血液中流淌著純粹的生命力與靈脈共鳴。<br><br>
對獸裔而言，世界並非冷漠的土地，而是一個會呼吸、會傾聽的整體。他們與自然共生，不崇拜神，而崇敬「原始意志（Primal Will）」——那股連結風、火、水、獸與生命的古老力量。<br><br>
古代獸裔語言：⟁ ⌖ ⌯ 𐌗 𐌚 𐌢 𐌋 ⌾ 𐌝`,
    trait: '敏捷、本能、自然共鳴',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E7%A8%AE%E6%97%8F%2F%E9%87%8E%E7%8D%B8.png?alt=media&token=d5aa99a5-3ccd-401d-8f62-94c2f07cbb98',
    alt: '獸裔領地'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  function renderRace(rKey) {
    const r = racesData[rKey];
    const container = document.getElementById('racesContent');
    if (!r || !container) return;
    container.innerHTML = `
      <div class="races-card">
        <div class="races-text">
          <h2>${escapeHtml(r.title)}</h2>
          <p>${r.desc}</p>
          <p><strong>特性：</strong>${escapeHtml(r.trait)}</p>
        </div>
        <div class="races-image">
          <img src="${escapeHtml(r.img)}" alt="${escapeHtml(r.alt)}">
        </div>
      </div>`;
  }
  window.renderRace = renderRace;

  const selector = document.getElementById('racesSelector');
  if (selector) {
    selector.addEventListener('click', e => {
      const btn = e.target.closest('button[data-race]');
      if (!btn) return;
      selector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRace(btn.dataset.race);
    });
    renderRace('elf');
  }
});

/* =========================================================
   惡魔資料 Demons
   ========================================================= */
const demonData = {
  sar: {
    title: '薩爾格洛斯 - 魔王',
    desc: '世界仍處於混沌之中，七大元素尚未平衡。此時，第一位魔王薩爾格洛斯誕生，他是黑暗與靈魂元素的化身，體內流淌著毀滅與重生的力量。<br><br>' +
      '薩爾格洛斯的誕生標誌著黑暗的覺醒，他能夠操控生死，主宰靈魂，並能賦予死亡詛咒，將活人徹底吞噬於無盡的黑暗。',
    trait: '無窮力量、權力至上、統治慾望',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E9%AD%94%E7%8E%8B.png?alt=media&token=d045a454-bb08-4221-b182-044212bad6b9',
    alt: '薩爾格洛斯 - 傲慢'
  },
  leviathan: {
    title: '利維坦 - 嫉妒之王',
    desc: '利維坦生於深海之淵，目睹世界因信仰而秩序，卻因嫉妒無法掌控信仰，便鑄造「罪契幣」，以罪與契約建立屬於魔族的法則，他以交易取代祈禱，創造了契約文明，魔族尊其為「深海仲裁者」。<br><br>' +
      '「深海為誓者作證，違約之魂，永墜深淵」',
    trait: '嫉妒、契約、靈魂',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E5%BF%8C%E5%A6%92.png?alt=media&token=37a563e2-a87d-4942-9056-7bcb85289f9d',
    alt: '利維坦 - 驕傲'
  },
  satan: {
    title: '撒旦 - 憤怒之王',
    desc: '撒旦誕生於地心的烈火脈中，那片永遠燃燒的深淵。從他的誕生之時起，便注定帶來毀滅與絕望。對他而言，正義從來不需要仁愛，只需無情的報復與血腥的勝利。<br><br>' +
      '他視世界為腐敗之地，所有神明和善良的存在皆為虛偽的假象，必須被摧毀。<br><br>' +
      '「烈焰可毀萬物，唯不義永存，焚之不盡。」',
    trait: '憤怒、復仇、毀滅',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E6%86%A4%E6%80%92.png?alt=media&token=aaaf7f6a-70a7-48e9-9f1d-f79ecaa9cde5',
    alt: '撒旦 - 憤怒'
  },
  celia: {
    title: '瑟莉雅 - 貪婪之王',
    desc: '誕生地獄深淵，那是一片永無止境的黑暗與火焰交織的地域。當地獄的深處，無數墮落靈魂的貪婪與渴望積聚成一股無形的力量時，瑟莉雅便在這股力量中誕生，成為貪婪的具象化。<br><br>' +
      '「吾無須殺人，貪欲會使凡心自沉深淵，無聲而亡。',
    trait: '欲望、執著、貪婪',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E8%B2%AA%E5%A9%AA.png?alt=media&token=928c5512-2a68-4c2c-ab9a-2eb5415057fd',
    alt: '瑟莉雅 - 貪婪'
  },
  ilanreige: {
    title: '伊蘭蕾潔 - 貪饕君主',
    desc: '無數墮落靈魂的飢餓與慾望積聚成一股強大的能量，這股能量凝結成伊蘭蕾潔的化身，成為貪欲與飢渴的具象化。<br><br>' +
      '她曾為魔王烹調「饕餮之宴」，以萬靈之魂為食，卻在嘗盡味道後陷入空虛。<br><br>' +
      '「越墮落，味越甜，欲與痛，永相隨。」',
    trait: '享樂、食慾、暴食',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E4%BC%8A%E8%98%AD.png?alt=media&token=c4525f36-e92b-42f3-925b-3f8b9f89c546',
    alt: '伊蘭蕾潔 - 貪饕'
  },
  belphegor: {
    title: '貝爾芬格 - 懶惰之王',
    desc: '誕生於地獄的深淵，那裡充滿了無盡的痛苦與無盡的爭鬥。與其他惡魔不同，貝爾芬格並不渴望力量、征服或報復。他見證了萬物的循環與變遷，並逐漸認識到一切奮鬥終將歸於虛無，無論是生死還是慾望，最終都會消散。<br><br>' +
      '「沉眠非為逃避，只為不再醒於破碎之世。」',
    trait: '懶惰、停滯、消極',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E6%87%B6%E6%83%B0.png?alt=media&token=ffd63836-0dee-4ddb-a5b1-ebb12b4ad296',
    alt: '貝爾芬格 - 懶惰'
  },
  asmodeus: {
    title: '阿斯莫德 - 慾之王',
    desc: '夢與幻象的織者，他創造美與愛，卻也揭露人心最深的偽裝。 他認為慾望是靈魂的真言，而抑制慾望，是對自我的背叛。<br><br>' +
      '「慾望不是罪，虛偽才是。」',
    trait: '誘惑、夢境、真實之鏡',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E6%85%BE%E6%9C%9B.png?alt=media&token=f0b31584-2084-4d4b-9a26-55b489369306',
    alt: '阿斯莫德 - 欲望'
  },
  lucifer: {
    title: '路西恩 - 傲慢之王',
    desc: '他對「自我」的傲慢不亞於任何存在。隨著對知識與真理的無盡追求，漸漸陷入了對「完美」的執念之中。他認為世界的每一個缺陷都該被修正，宇宙中的一切不完美之處必須被消除。<br><br>' +
      '「神束縛靈魂，惡魔引領權力。」',
    trait: '傲慢、自信、權力欲',
    img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E6%83%A1%E9%AD%94%2F%E8%B7%AF%E8%A5%BF%E6%B3%95.png?alt=media&token=5d826cf7-8887-427a-9561-a179e59d7cdd',
    alt: '路西恩 - 傲慢'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const demonSelector = document.getElementById('demonSelector');
  const demonContent = document.getElementById('demonContent');

  function renderDemon(demonKey) {
    const demon = demonData[demonKey];
    if (!demon || !demonContent) return;
    demonContent.innerHTML = `
      <div class="demon-card">
        <div class="demon-text">
          <h2>${escapeHtml(demon.title)}</h2>
          <p>${demon.desc}</p>
          <p><strong>特性：</strong>${escapeHtml(demon.trait)}</p>
        </div>
        <div class="demon-image">
          <img src="${escapeHtml(demon.img)}" alt="${escapeHtml(demon.alt)}">
        </div>
      </div>
    `;
  }
  window.renderDemon = renderDemon;

  if (demonSelector) {
    demonSelector.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-demon]');
      if (!btn) return;
      demonSelector.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDemon(btn.dataset.demon);
    });
    renderDemon('sar');
  }
});

/* =========================================================
   教職員資料 teacherData + 點擊顯示 + 篩選
   ========================================================= */
const teacherData = {
  professor: {
    seruphi: {
      name: '賽露菲',
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FSeruphi%202.png?alt=media&token=89a18b8a-bea3-443c-8d15-9b59401d771a',
      text: `
【角色】賽露菲（Seruphi）
【種族】精靈  
【年齡】外表約20~30歲左右（實際年齡未知）  
【個性】活潑、待人溫柔，臉上總是掛著淡淡的微笑， 卻隱約散發一絲悲傷。  
【能力】神聖魔法
【領域】艾斯瑞達大陸古文明  
【扮演者】小內
      `,
      twitch: 'https://www.twitch.tv/nerukozwz'
    },
    minasVeya: {
      name: '米納斯·薇婭',
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FMinas%20Veya.png?alt=media&token=b369e404-d63b-4abe-b0ea-c3681c20a083',
      text: `
【角色】米納斯·薇婭（Minas Veya）
【種族】精靈  
【年齡】外表約25歲上下  
【個性】溫柔理性，對學生總是語調平和、耐心十足，但絕不縱容欺騙行為。  
【能力】變形學、化獸術、高階守護魔法  
【扮演者】巴哥
        `,
      twitch: 'https://www.twitch.tv/pug_tw'
    },
    '大衛．羅曼': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FDavid.png?alt=media&token=75c76444-62a3-4e97-9940-beee7c7f3445',
      text: `
【角色】大衛．羅曼（David Roman）
【種族】人類  
【年齡】54歲
【個性】冷靜、嚴肅、孤僻、極具自制力。  
【能力】魔藥天賦  
【扮演者】早八都有到
        `,
      twitch: 'https://www.twitch.tv/jack385196'
    },
    '西追 普萊特': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FPlight.png?alt=media&token=1aceadba-6363-4149-ab63-cc4ad75f2980',
      text: `
【角色】西追 普萊特 
【種族】人類 
【年齡】30歲 
【個性】語氣柔和、待人謙遜，不喜歡爭辯，更不以權威壓人
【能力】武鬥學、魔法治療學、防禦變形術 
【扮演者】 緩而 
  `,
      twitch: 'https://www.twitch.tv/cheese_prime_ham'
    },
	
	 '瑟倫・莉菈': {
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E7%91%9F%E5%80%AB%E3%83%BB%E8%8E%89%E8%8F%88.png?alt=media&token=65c27096-e0d3-4eb2-bf32-4532f41a7488',
      text: `
【角色】瑟倫・莉菈（Seren Lyra）
【種族】半精靈 
【年齡】外表約30歲 （實際年齡約300多歲） 
【個性】喜歡與學生互動，會耐心解答問題，像朋友一樣聽學生訴說
【能力】閃電系魔法
【扮演者】 筱玥 
  `,
      twitch: 'https://www.twitch.tv/cheese_prime_ham'
    },
	
    '優莉安娜・貝娜': {
      name: '優莉安娜・貝娜',
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2F%E5%84%AA%E5%88%A9.png?alt=media&token=f961b4d8-cfe1-43f2-868a-32da5f64e8ff',
      text: `
【角色】優莉安娜・貝娜（Yuliana Bena）
【種族】四分之一薇拉血統的女巫  
【年齡】  
【個性】冷靜理智，內斂而溫柔，擅於觀察。  
【能力】水系魔法、魔藥學、占卜學  
【扮演者】-U-U-
  `,
      twitch: 'https://www.twitch.tv/loveuu_uu'
    }
  },

  mentor: {
    '社團老師': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FAiden%20Wesley.png?alt=media&token=cdaee84a-9e4a-4ca9-b3f0-462ef3e5535c',
      text: `
【角色】艾登·衛斯理（Aiden Wesley）
【種族】人類 （混血巫師 ）
【年齡】31歲  
【個性】溫柔且穩定、內向但堅定、高共感、低攻擊性、不爭主導權  
【能力】專精【魔法生物飼育學】與【防禦魔法實作】
【扮演者】櫻花

      `,
      twitch: 'https://www.twitch.tv/sakura_ryoshin'
    },
    '社團導師一': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FLumiah.png?alt=media&token=91bcdeef-563f-4be1-98dc-5fadb8bde2c5',
      text: `
【角色】露米婭・艾爾瑟芙（Lumiah Elserf）
【種族】半精靈
【年齡】26歲（實際年齡700-800歲左右）
【個性】甜美、活潑、開朗，喜歡照顧他人
【能力】魔法增幅、微光魔法
【扮演者】阿曼
    `,
      twitch: ''
    },
    '社團導師三': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FAsmode.png?alt=media&token=44bb6ef0-5ff8-4411-aea0-b8c58e8d8dc2',
      text: `
【角色】阿斯莫德（Asmode）
【種族】惡魔
【年齡】不詳(看起來40~50歲，喜歡喬裝人類)
【職位】宿管
【個性】溫柔，但極具操控慾與誘惑性，討厭戀愛，因為母胎單身。
【能力】黑魔法、心像魔法。
【扮演者】龍蝦
`,
      twitch: ''
    },
    '社團導師四': {
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2FMG%20T.png?alt=media&token=de39f27e-f9e7-4d41-9b6e-88861fd5655e',
      text: `
【角色】?
【種族】?
【年齡】?
【職位】?
【個性】?
【能力】?
【扮演者】?
`,
      twitch: ''
    },
	
	'社團導師五': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E6%8B%89%E5%88%A9.png?alt=media&token=447358ce-6de5-4506-b3b6-9ed903bde85b',
    text: `
      【角色】拉利・科爾斯
      【種族】鳥人族（特瑞拉支系）
      【年齡】?
      【個性】?
      【能力】高階風魔法、高階變形學、暗魔法、自我強化
      【扮演者】yayakai
    `,
    twitch: 'https://www.twitch.tv/yayakai'
  },
  
  '社團導師六': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E8%8C%89%E5%88%A9.png?alt=media&token=ea1bfb5a-87d5-4f85-9b14-23f2e199b676',
    text: `
      【角色】茉利・亞薩希
      【種族】鳥人族（特瑞拉支系）
      【年齡】不詳
      【個性】猶豫不決，言語犀利卻真誠，不擅掩飾心思
      【能力】高階變形學、高階神聖法、高級光環法
      【扮演者】六六
    `,
    twitch: 'https://www.twitch.tv/chainannie'
  },
  
  '社團導師七': {
    img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E9%9B%85%E9%81%94%E7%88%BE%E5%85%8B.png?alt=media&token=278e3744-ae88-4483-941c-82e4ebcbcc12',
    text: `
      【角色】雅達爾克。諾布里斯
      【種族】人類(但其實是龍族 希望可以保密)
      【年齡】不詳，(超過4000歲)看起來大約30-40歲
      【個性】喜歡金錢、收集各類藝術品
      【能力】?
      【扮演者】雅達諾 
    `,
    twitch: 'https://www.twitch.tv/adanono'
  },
    '社團導師二': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FFloa%20Fenrir.png?alt=media&token=02e749ce-73be-443f-b9b2-2dc6da344892',
      text: `
【角色】芙洛‧芬里爾(Floa Fenrir)
【種族】狼人
【年齡】28歲
【個性】表面沉靜、禮貌，真誠傾聽
【能力】魔藥學
【扮演者】七七

    `,
      twitch: 'https://www.twitch.tv/chichi5118'
    }
  },
  
  

  leader: {
    '校長': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2F%E6%A0%A1%E9%95%B7.png?alt=media&token=358e4d53-464b-4e16-9917-aab799439fe7',
      text: `
【角色】阿布斯．鄧不利朵
【種族】人類
【年齡】（未知年齡）
【職位】麥格華茲魔法學院 校長
【個性】嘮叨、熱情、老謀深算。
【能力】深不可測。
【扮演者】賈巴
`,
      twitch: ''
    },
    '副校長': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2F%E5%89%AF%E6%A0%A1%E9%95%B7.png?alt=media&token=e57eefb3-42e1-4a39-b284-171ac3088727',
      text: `
【角色】利維坦・艾爾瑟芙 (Leviathan Elserf)
【種族】惡魔
【年齡】外表約22左右（未知年齡）
【職位】麥格華茲魔法學院 副校長
【個性】傲慢毒舌、理智冷靜，嘴壞。
【能力】猩紅魔法、詛咒，魔力感知夜間異動。
【扮演者】Nokia	
`,
      twitch: ''
    },
    '教務長': {
      img: 'https://via.placeholder.com/320x200?text=%E6%95%99%E5%8B%99%E9%95%B7',
      text: '教務長負責協調各分院教授課程與學術研究方向，以嚴謹著稱，曾編撰《魔法教育綱要》。',
      twitch: 'https://www.twitch.tv/academichead'
    }
  },

  staff: {
    '餐廳姊姊': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FElanreje.png?alt=media&token=22f154fc-57fd-449b-b6cc-d2b03e142182',
      text: `
【角色】伊蘭蕾潔（Elanreje）
【種族】墮星惡魔
【年齡】不詳（傳聞時間尚未開始就已存在）
【職位】餐廳
【個性】傲嬌又認真，對料理與植物都極度講究，嘴硬但心軟。
【能力】詛咒的黑暗魔法。
【扮演者】咬耳朵
`,
      twitch: 'https://www.twitch.tv/medic'
    },
    '宿管': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FAsmode.png?alt=media&token=44bb6ef0-5ff8-4411-aea0-b8c58e8d8dc2',
      text: `
【角色】阿斯莫德（Asmode）
【種族】惡魔
【年齡】不詳(看起來40~50歲，喜歡喬裝人類)
【職位】宿管
【個性】溫柔，但極具操控慾與誘惑性，討厭戀愛，因為母胎單身。
【能力】黑魔法、心像魔法。
【扮演者】龍蝦
`,
      twitch: 'https://www.twitch.tv/hedfu'
    },
    '警衛': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FLissandra.png?alt=media&token=53de238c-6016-4c86-80cc-23e453b41389',
      text: `
【角色】美．麗珊卓（Lissandra）
【種族】獸人
【年齡】不詳
【職位】警衛
【個性】陰陽怪氣、熱心助人、心直口快。
【能力】黑魔法
【扮演者】撒旦先生
`,
      twitch: 'https://www.twitch.tv/mrsatan717'
    },
    '侍僕': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FIris%20Nova.png?alt=media&token=c8880541-8c45-41d4-82db-c4211999cab8',
      text: `
【角色】伊莉絲・諾瓦（Iris Nova）
【種族】獸人族
【年齡】貓齡2歲（相當於人類24歲）
【職位】侍僕
【個性】有點迷糊、喜歡碎碎念、愛偷懶
【能力】水魔法。
【扮演者】霏Fei
`,
      twitch: 'https://www.twitch.tv/hanfeicat'
    },
	
	 '嚮導': {
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E9%98%BF%E8%8C%B2%E9%BB%98%E7%89%B9.png?alt=media&token=aef7663c-03ec-4777-9b20-61d2276ee058',
      text: `
【角色】史萊姆王・阿茲默特（Azmert, the Eternal Ooze）
【種族】精靈惡魔混種
【年齡】10000歲（早已忘記自己的誕生日）
【職位】嚮導
【個性】健忘、活潑、健談、永遠保持着玩笑般的口吻
【能力】全屬性
【扮演者】鳥鳥兒
`,
      twitch: 'https://www.twitch.tv/mrbird2000'
    },
	
	 '學院守護獸': {
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E8%8C%B1%E9%BA%97%E8%91%89.png?alt=media&token=97142a89-f4fe-486a-b9cb-a538005ccdf1',
      text: `
【角色】茱麗葉・咕咕
【種族】獸族
【年齡】似乎只記得自己永遠一歲
【個性】勇敢、好奇、開朗
【能力】遇到危險或生命待盡時會化為一顆蛋重新誕生
【扮演者】工具人
`,
      twitch: ''
    },
	
    'Lily': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FLily.png?alt=media&token=7ff010c8-c262-469d-a376-a2cf3cca6c7b',
      text: `
【角色】 Lily
【種族】 犬
【年齡】 不詳 
【個性】 捉摸不定
【能力】 來無影去無蹤
`,
      twitch: ''
    }
  },

  director: {
    '米納斯·薇婭': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FMinas%20Veya.png?alt=media&token=b369e404-d63b-4abe-b0ea-c3681c20a083',
      text: `
【角色】米納斯·薇婭
【職位】霍爾芬多學院主任
【宗旨】我是霍爾芬多分院的主任。忠誠是力量，榮譽是信仰。守護不是義務，而是誓言為家園、為夥伴、為世界的安寧。我們如雄鷹展翼，守望天空，永不退卻。
【擅長】防禦與騎士魔法
【扮演者】巴哥
`,
      twitch: 'https://www.twitch.tv/pug_tw'
    },
    '大衛．羅曼': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FDavid.png?alt=media&token=75c76444-62a3-4e97-9940-beee7c7f3445',
      text: `
【角色】大衛．羅曼
【職位】坎普費爾班主任
【宗旨】我是坎普費爾分院的主任。力量，是意志與磨練的結晶。唯有讓身體與心靈都承受試煉，力量才會回應並臣服於你。正如我們的徽章青蛇，沉著、致命、無懼挑戰。我們不逃避痛苦，我們征服它。
【扮演者】早八都有到
`,
      twitch: ''
    },
    '瑟倫・莉菈': {
      img: 'https://firebasestorage.googleapis.com/v0/b/mg2222-95b15.firebasestorage.app/o/teacher%2F%E7%91%9F%E5%80%AB%E3%83%BB%E8%8E%89%E8%8F%88.png?alt=media&token=65c27096-e0d3-4eb2-bf32-4532f41a7488',
      text: `
【角色】瑟倫・莉菈
【職位】特威克羅學院主任
【宗旨】我是特威克羅分院的主任。我們以智慧為刃、以知識為燈，追尋深藏於世界背後的真理。世人畏懼未知，而我們選擇直視並解讀它。只要答案仍被遮蔽，我們的探索便不會停止。
【扮演者】筱玥
`,
      twitch: 'https://www.twitch.tv/miskopac9898'
    },
    '西追・普萊特': {
      img: 'https://firebasestorage.googleapis.com/v0/b/magic-academy-8374a.firebasestorage.app/o/%E8%80%81%E5%B8%AB%2FPlight.png?alt=media&token=1aceadba-6363-4149-ab63-cc4ad75f2980',
      text: `
【角色】西追・普萊特
【職位】赫文帕夫學院主任
【宗旨】我是赫文帕夫分院的主任。和諧是力量，平衡是道路。魔法能療癒世界，如蓮綻放，以溫柔止息混亂。
【扮演者】緩而

`,
      twitch: 'https://www.twitch.tv/cheese_prime_ham'
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const divisionDetail = document.getElementById('division-detail');
  const divisionImg = document.getElementById('division-img');
  const divisionText = document.getElementById('division-text');


  document.querySelectorAll('#teachers .teacher-card').forEach(card => {
    card.addEventListener('click', () => {
      const rawGroup = (card.getAttribute('data-group') || '').toLowerCase();
      const group = rawGroup === 'club' ? 'mentor' : rawGroup;
      const key = (card.getAttribute('data-teacher') || '').trim();
      const bucket = teacherData[group] || {};
      const detail = bucket[key];

      if (!detail) {
        const keys = Object.keys(bucket).join('、') || '(此群組目前沒有鍵)';
        alert(`找不到【${key}】的詳細資料。\n請確認：\n1) teacherData.${group} 是否有鍵：${key}\n2) 卡片 data-teacher 是否與鍵一致\n\n目前可用鍵：${keys}`);
        return;
      }

      if (divisionImg) {
        divisionImg.src = detail.img || '';
        divisionImg.alt = `${detail.name || key} 詳細圖片`;
      }
      if (divisionText) divisionText.innerHTML = detail.text || '';

      window.renderTwitchButton(detail.twitch);

      if (divisionDetail) {
        divisionDetail.style.display = 'block';
        divisionDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  (function () {
    const filterBar = document.querySelector('.teacher-filter');
    if (!filterBar) return;

    const buttons = Array.from(filterBar.querySelectorAll('.filter-btn'));
    const cards = Array.from(document.querySelectorAll('#teachers .teacher-card'));

    function applyFilter(filter) {
      buttons.forEach(btn => {
        const isActive = btn.dataset.filter === filter;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
        btn.tabIndex = isActive ? 0 : -1;
      });

      cards.forEach(card => {
        const raw = (card.dataset.group || '').toLowerCase().trim();
        const groups = raw.split(/[\s,]+/).filter(Boolean);
        const show = filter === 'all' ? true : groups.includes(filter.toLowerCase());
        card.classList.toggle('is-hidden', !show);
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    filterBar.addEventListener('keydown', (e) => {
      const currentIndex = buttons.findIndex(b => b.classList.contains('active'));
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const next = (currentIndex + dir + buttons.length) % buttons.length;
        buttons[next].focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const el = document.activeElement;
        if (el && el.classList.contains('filter-btn')) {
          applyFilter(el.dataset.filter);
        }
      }
    });


    const initial = (buttons.find(b => b.classList.contains('active')) || buttons[0])?.dataset.filter || 'leader';
    applyFilter(initial);


    const teacherSec = document.getElementById('teachers');
    if (teacherSec && !teacherSec.querySelector('.teacher-grid')) {
      const grid = document.createElement('div');
      grid.className = 'teacher-grid';
      teacherSec.querySelectorAll('.teacher-card').forEach(card => grid.appendChild(card));
      filterBar.insertAdjacentElement('afterend', grid);
    }
  })();
});

/* =========================================================
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const mainNav = document.getElementById('mainNav');
  const mainMenu = document.getElementById('mainMenu');
  const navToggle = mainNav?.querySelector('.nav-toggle');

  if (!mainNav || !mainMenu || !navToggle) return;

  const isMobile = () => window.matchMedia('(max-width: 800px)').matches;

  function closeAllSub(menu = mainMenu) {
    menu.querySelectorAll('.open').forEach(li => li.classList.remove('open'));
    menu.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
  }
  function openNav() {
    mainNav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
  }
  function closeNav() {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    closeAllSub();
  }

  // 漢堡
  navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (mainNav.classList.contains('open')) closeNav();
    else openNav();
  });


  mainMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.dropdown-toggle');
    if (!btn) return;
    if (!isMobile()) return;
    e.preventDefault();
    const li = btn.closest('li');
    const willOpen = !li.classList.contains('open');


    const parent = li.parentElement;
    parent.querySelectorAll(':scope > li.open').forEach(sib => sib.classList.remove('open'));
    parent.querySelectorAll(':scope > li .dropdown-toggle[aria-expanded="true"]').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });

    li.classList.toggle('open', willOpen);
    btn.setAttribute('aria-expanded', String(willOpen));
  });


  document.addEventListener('click', (e) => {
    if (!isMobile()) return;
    if (!mainNav.contains(e.target)) closeNav();
  });


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });


  let last = isMobile();
  window.addEventListener('resize', () => {
    const now = isMobile();
    if (now !== last) {
      closeNav();
      last = now;
    }
  });


  document.querySelectorAll('[data-section]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const sec = btn.dataset.section;
      if (typeof window.showSection === 'function') {
        window.showSection(sec);
      }
      if (isMobile()) {
        closeNav();
      }
    });
  });
});
const navLinks = document.querySelectorAll('[data-section]');
const sections = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');

    sections.forEach(section => {
      section.style.display = section.id === target ? 'block' : 'none';
    });
  });
});

const MAX_HOUSE_SCORE = 1000; 


function refreshAllProgressBarsFromDataset() {
  document.querySelectorAll(".house-score").forEach(houseEl => {
    const progressBar = houseEl.querySelector(".score-bar");
    const scoreSpan = houseEl.querySelector(".score-value");
    if (!progressBar || !scoreSpan) return;


    const raw = parseInt(houseEl.dataset.score || "0", 10);
    const score = Math.max(0, Math.min(raw, MAX_HOUSE_SCORE)); 
    const percent = score / MAX_HOUSE_SCORE;                   
    progressBar.style.height = percent * 100 + "%"; 
    scoreSpan.textContent = score;
  });
}


function setHouseScore(houseKey, newScore) {
  const houseEl = document.querySelector(`.house-score[data-house="${houseKey}"]`);
  if (!houseEl) return;

  const score = Math.max(0, Math.min(parseInt(newScore || 0, 10), MAX_HOUSE_SCORE));
  houseEl.dataset.score = score;              
  refreshAllProgressBarsFromDataset();          
}

document.addEventListener("DOMContentLoaded", function () {
  refreshAllProgressBarsFromDataset();
});

