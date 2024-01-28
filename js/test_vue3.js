const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

const idols = [
  {
    name: "IU",
    ig_url: "https://www.instagram.com/dlwlrma/",
    img: "./imgs/IU.jpg",
    birthday: "1993/05/16",
  },
  {
    name: "Taeyeon",
    ig_url: "https://www.instagram.com/taeyeon_ss/",
    img: "./imgs/Taeyeon.png",
    birthday: "1989/03/09",
  },
  {
    name: "CL",
    ig_url: "https://www.instagram.com/chaelincl/",
    img: "./imgs/CL.png",
    birthday: "1991/02/26",
  },
];

const get_idol = () => {
  return idols[Math.floor(Math.random() * idols.length)];
};

const lessons = [
  {
    idx: "CH1",
    desc: "Vue.js 基礎入門",
    items: [
      {
        idx: "1-1",
        desc: "Vue.js 簡介",
        items: [{ idx: "1-1-1", desc: "Vue.js 資料雙向綁定與監聽" }],
      },
      {
        idx: "1-2",
        desc: "Vue.js 的核心：實體",
        items: [
          { idx: "1-2-1", desc: "自定義模板語法" },
          { idx: "1-2-2", desc: "掛載後更新資料" },
          { idx: "1-2-3", desc: "template 模板屬性" },
          { idx: "1-2-4", desc: "component 自訂元件模板" },
        ],
      },
      {
        idx: "1-3",
        desc: "資料加工與邏輯整合",
        items: [
          { idx: "1-3-1", desc: "methods 方法" },
          { idx: "1-3-2", desc: "computed 計算屬性" },
          { idx: "1-3-3", desc: "computed / methods 的使用時機比較" },
        ],
      },
      {
        idx: "1-4",
        desc: "Vue.js 的黑魔法：指令",
        items: [
          { idx: "1-4-1", desc: "屬性綁定 v-bind" },
          {
            idx: "1-4-2",
            desc: "表單綁定 v-model",
            items: [
              { idx: "1-4-2-1", desc: "input 文字框" },
              { idx: "1-4-2-2", desc: "textarea 文字方塊" },
              { idx: "1-4-2-3", desc: "radio / checkbox 選擇框" },
              { idx: "1-4-2-4", desc: "select 下拉列表選單" },
            ],
          },
          {
            idx: "1-4-3",
            desc: "v-model 與修飾子",
            items: [
              { idx: "1-4-3-1", desc: ".lazy" },
              { idx: "1-4-3-2", desc: ".number" },
              { idx: "1-4-3-3", desc: ".trim" },
            ],
          },
          {
            idx: "1-4-4",
            desc: "模板綁定",
            items: [
              { idx: "1-4-4-1", desc: "v-text" },
              { idx: "1-4-4-2", desc: "v-html" },
              { idx: "1-4-4-3", desc: "v-once" },
              { idx: "1-4-4-4", desc: "v-pre" },
            ],
          },
          { idx: "1-4-5", desc: "樣式綁定" },
        ],
      },
      {
        idx: "1-5",
        desc: "事件處理",
        items: [
          { idx: "1-5-1", desc: "事件綁定 v-on" },
          { idx: "1-5-2", desc: "v-on 與 event 物件" },
          {
            idx: "1-5-3",
            desc: "v-on 與修飾子",
            items: [
              { idx: "1-5-3-1", desc: ".stop" },
              { idx: "1-5-3-2", desc: ".prevent" },
              { idx: "1-5-3-3", desc: ".capture" },
              { idx: "1-5-3-4", desc: ".self" },
              { idx: "1-5-3-5", desc: ".once" },
              { idx: "1-5-3-6", desc: ".passive" },
            ],
          },
          {
            idx: "1-5-4",
            desc: "鍵盤修飾子",
            items: [
              { idx: "1-5-4-1", desc: "經常使用" },
              { idx: "1-5-4-2", desc: ".exact 精準判斷" },
            ],
          },
          { idx: "1-5-5", desc: "滑鼠修飾子" },
        ],
      },
      {
        idx: "1-6",
        desc: "條件判斷的列表渲染",
        items: [
          {
            idx: "1-6-1",
            desc: "判斷條件 v-if / v-show",
            items: [
              { idx: "1-6-1-1", desc: "v-if" },
              { idx: "1-6-1-2", desc: "v-show" },
            ],
          },
          {
            idx: "1-6-2",
            desc: "v-for 列表渲染",
            items: [
              { idx: "1-6-2-1", desc: "陣列 Array" },
              { idx: "1-6-2-2", desc: "物件 Object" },
              { idx: "1-6-2-3", desc: "範圍" },
              { idx: "1-6-2-4", desc: "&lt;template&gt;" },
              { idx: "1-6-2-5", desc: "列表的排序與過濾" },
            ],
          },
        ],
      },
      {
        idx: "1-7",
        desc: "元件的生命週期與更新機制",
        items: [
          { idx: "1-7-1", desc: "生命週期與 Hooks Function" },
          { idx: "1-7-2", desc: "Vue 實體的建立" },
          { idx: "1-7-3", desc: "狀態更新與畫面同步" },
        ],
      },
    ],
  },
  {
    idx: "CH2",
    desc: "Vue.js 的元件系統",
    items: [
      { idx: "2-1", desc: "元件系統的特性" },
      { idx: "2-2", desc: "元件之間的溝通傳遞" },
      { idx: "2-3", desc: "動態元件管理" },
      { idx: "2-4", desc: "編譯作用域與 Slot 插槽" },
      { idx: "2-5", desc: "&lt;transition&gt; 漸變與動畫" },
    ],
  },
  {
    idx: "CH3",
    desc: "Vue 單一元件檔與 Vue CLI",
    items: [
      { idx: "3-1", desc: "Vue CLI 介紹" },
      { idx: "3-2", desc: "Vue SFC 單一元件檔" },
      { idx: "3-3", desc: "Vue CLI 環境設定與打包部屬" },
    ],
  },
  {
    idx: "CH4",
    desc: "Vue Router 與前端路由管理",
    items: [
      { idx: "4-1", desc: "Vue Router 與前後端路由" },
      { idx: "4-2", desc: "Vue.js 的核心：實體" },
      { idx: "4-3", desc: "資料加工與邏輯整合" },
      { idx: "4-4", desc: "Vue.js 的黑魔法：指令" },
    ],
  },
];

let newHtml = `<ul class="list-group">`,
  newHtml2 = "",
  arr = new Array();
lessons.forEach((e) => {
  newHtml2 += `<div class="m-3"><h1 id="${e.idx}">${e.desc}</h1>`;

  newHtml +=
    `<li class="list-group-item">` +
    `<a href="#${e.idx}">${e.desc}</a>` +
    `<ul class="list-group">`;
  if (e.items) {
    e.items.forEach((e2) => {
      newHtml2 += `<div class="m-3"><h3 id="h3-${e2.idx}">${e2.idx} ${e2.desc}</h3>`;

      newHtml +=
        `<li class="list-group-item">` +
        `<a href="#h3-${e2.idx}">${e2.idx} ${e2.desc}</a>`;
      if (e2.items) {
        newHtml += `<ul class="list-group">`;
        e2.items.forEach((e3) => {
          newHtml2 +=
            `<div class="m-3">` +
            `<h5 id="h5-${e3.idx}"> ${e3.idx} ${e3.desc}</h5>`;

          newHtml +=
            `<li class="list-group-item">` +
            `<a href="#h5-${e3.idx}">${e3.idx} ${e3.desc}</a>`;
          if (e3.items) {
            newHtml += `<ul class="list-group">`;
            e3.items.forEach((e4) => {
              newHtml2 +=
                `<p id="p-${e4.idx}">${e4.desc}</p>` +
                `<div class="m-3 d-flex w-100 jc-around" style="height: 50rem;">` +
                `<pre id="pre-${e4.idx}" class="w-50 p-3"></pre>` +
                `<div id="div-${e4.idx}" class="w-50 p-3 overflow-auto mb-3"></div>` +
                `</div><hr class="dash-hr">`;

              newHtml +=
                `<li class="list-group-item">` +
                `<a href="#p-${e4.idx}">${e4.desc}</a>` +
                `</li>`;
            });
            newHtml2 = newHtml2.substring(0, newHtml2.length - 20);
            newHtml += `</ul>`;
          } else {
            newHtml2 +=
              `<div class="m-3 d-flex w-100 jc-around" style="height: 50rem;">` +
              `<pre id="pre-${e3.idx}" class="w-50 p-3"></pre>` +
              `<div id="div-${e3.idx}" class="w-50 p-3 overflow-auto mb-3"></div>` +
              `</div>`;
          }
          newHtml2 += `</div><hr class="dotted-hr">`;
          newHtml += `</li>`;
        });
        newHtml2 = newHtml2.substring(0, newHtml2.length - 22);
        newHtml += `</ul>`;
      } else {
        newHtml2 +=
          `<div class="m-3 d-flex w-100 jc-around" style="height: 50rem;">` +
          `<pre id="pre-${e2.idx}" class="w-50 p-3"></pre>` +
          `<div id="div-${e2.idx}" class="w-50 p-3 overflow-auto mb-3"></div>` +
          `</div>`;
      }
      newHtml2 += `</div><hr>`;
      newHtml += `</li>`;
    });
    newHtml2 =
      newHtml2.substring(0, newHtml2.length - 4) +
      `</div><hr class="double-hr">`;
    newHtml += "</ul></li>";
  } else {
    newHtml2 +=
      `<div class="m-3 d-flex w-100 jc-around" style="height: 50rem;">` +
      `<h3 id="h3-${e.idx}">${e.desc}</h3>` +
      `<pre id="pre-${e.idx}" class="w-50 p-3"></pre>` +
      `<div id="div-${e.idx}" class="w-50 p-3 overflow-auto mb-3"></div>` +
      `</div><hr class="dash-hr">`;
  }
});
newHtml2 = newHtml2.substring(0, newHtml2.length - 22) + `</div>`;
newHtml += "</ul>";
$("aside").html(newHtml);
$("main").html(newHtml2);

// **************************************************

newHtml = `
  <input v-model="name">
  <div class="mt-3">
    <pre>
      Hello {{ name }}!
      {{ name }}
      {{ name }}
      {{ str }}    
    </pre>
    <img :src="img">
  </div>
`;
$("#pre-1-1-1").text(`
  ${newHtml}

  const { createApp, ref } = Vue;
  let idol = get_idol(),
    app = createApp({
      data() {
        return {
          name: idol.name,
          str: "新舊值變化",
          img: idol.img,
        };
      },
      watch: {
        name(new_val, old_val) {
          this.str = \`舊值為 "\${old_val}", 新值為 "\${new_val}".\`;
        },
      },
    }).mount("#div-1-1-1");
`);
$("#div-1-1-1").html(newHtml);

const { createApp, ref } = Vue;
let idol = get_idol(),
  app = createApp({
    data() {
      return {
        name: idol.name,
        str: "新舊值變化",
        img: idol.img,
      };
    },
    watch: {
      name(new_val, old_val) {
        this.str = `舊值為 "${old_val}", 新值為 "${new_val}".`;
      },
    },
  }).mount("#div-1-1-1");

// **************************************************

newHtml = `
  <pre class="overflow-auto">
    為避免與後端模板引擎衝突，可以使用 delimiters 來重新定義模板語法

    Hello %{ name }%!
  <pre>
  <img :src="img">
`;
$("#pre-1-2-1").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    // 為避免與後端模板引擎衝突，可以使用 delimiters 來重新定義模板語法
    delimiters: ["%{", "}%"],
    data() {
      return {
        name: idol.name,
        img: idol.img,
      };
    },
  }).mount("#div-1-2-1");
`);
$("#div-1-2-1").html(newHtml);

idol = get_idol();
app = createApp({
  // 為避免與後端模板引擎衝突，可以使用 delimiters 來重新定義模板語法
  delimiters: ["%{", "}%"],
  data() {
    return {
      name: idol.name,
      img: idol.img,
    };
  },
}).mount("#div-1-2-1");

// **************************************************

newHtml = `
  <div id="before-1-2-2"></div>
  <div id="after-1-2-2" class="mt-3"></div>
`;

$("#pre-1-2-2").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        name: idol.name,
        img: idol.img,
      };
    },
  }).mount("#test-1-2-2");

  // before
  $("#before-1-2-2").html(\`
    before
    <pre>Hello \${app.$data.name}!</pre>
    <img src="\${app.$data.img}">
  \`);

  // 可不加入 $data
  while (idol.name == this.name) idol = get_idol();
  app.$data.name = idol.name;
  app.img = idol.img;

  //after
  $("#after-1-2-2").html(\`
    after
    <pre>Hello \${app.$data.name}!</pre>
    <img src="\${app.$data.img}">
  \`);
`);
$("#div-1-2-2").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
    };
  },
}).mount("#div-1-2-2");

// before
$("#before-1-2-2").html(`
  before
  <pre>Hello ${app.$data.name}!</pre>
  <img src="${app.$data.img}">
`);

// 可不加入 $data
while (idol.name == this.name) idol = get_idol();
app.$data.name = idol.name;
app.img = idol.img;

//after
$("#after-1-2-2").html(`
  after
  <pre>Hello ${app.$data.name}!</pre>
  <img src="${app.$data.img}">
`);

// **************************************************

$("#pre-1-2-3").text(`
  idol = get_idol();
  app = createApp({
    data() {
      return {
        name: idol.name,
        img: idol.img,
      };
    },
    template: \`
      <pre>Hello {{ name }}!</pre>
      <img :src="img">
    \`
  }).mount("#test-1-2-3");
`);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
    };
  },
  template: `
    <pre>Hello {{ name }}!</pre>
    <img :src="img">
  `,
}).mount("#div-1-2-3");

// **************************************************

$("#pre-1-2-4").text(`
  <iu></iu>

  $("#test-1-2-4").html(\`<iu></iu>\`);
  idol = get_idol();
  app = createApp({
    data() {
      return {
        name: idol.name,
        img: idol.img,
      };
    },
    components: {
      iu: { template: \`<div>這段文字是使用自訂標籤元件來顯示</div>\` },
    },
  }).mount("#div-1-2-4");
`);
$("#div-1-2-4").html(`<iu></iu>`);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
    };
  },
  components: {
    iu: { template: `<div>這段文字是使用自訂標籤元件來顯示</div>` },
  },
}).mount("#div-1-2-4");

// **************************************************

newHtml = `
  <button @click="click_event">CLICK</button>
  <p class="mt-3">{{ ret_str() }}</p>
`;
$("#pre-1-3-1").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        name: idol.name,
        img: idol.img,
        birthday: idol.birthday,
      };
    },
    methods: {
      click_event() {
        while (idol.name == this.name) idol = get_idol();
        this.name = idol.name;
        this.img = idol.img;
        this.birthday = idol.birthday;
      },
      ret_str() {
        return this.name + " Born In " + this.birthday;
      },
    },
  }).mount("#div-1-3-1");
`);
$("#div-1-3-1").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
      birthday: idol.birthday,
    };
  },
  methods: {
    click_event() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
      this.img = idol.img;
      this.birthday = idol.birthday;
    },
    ret_str() {
      return this.name + " Born In " + this.birthday;
    },
  },
}).mount("#div-1-3-1");

// **************************************************

arr = [
  { key: "NAME", val: "name" },
  { key: "PRICE", val: "price" },
  { key: "QUANTITY", val: "qty" },
  { key: "SUBTOTAL", val: "subtotal" },
];
newHtml = ``;
arr.forEach((e) => {
  newHtml += `<div>${e.key} : {{ ${e.val} }}</div>\n  `;
});
$("#pre-1-3-2").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        price: 516,
        qty: 520
      };
    },
    computed: {
      subtotal() {
        return this.price * this.qty;
      }
    }
  }).mount("#div-1-3-2");
`);
$("#div-1-3-2").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      price: parseInt(idol.birthday.replaceAll("/", "").substring(4)),
      qty: 520,
    };
  },
  computed: {
    subtotal() {
      return this.price * this.qty;
    },
  },
}).mount("#div-1-3-2");

// **************************************************

arr = [
  {
    type: "methods",
    descs: [
      "適合定義方法，用於處理使用者互動、事件處理等功能性操作",
      "在模板語法中透過 Vue 實體調用",
      "主要用於執行特定的功能性邏輯",
    ],
  },
  {
    type: "conputed",
    descs: [
      "適合宣告計算屬性，用於計算衍生的狀態",
      "計算屬性依賴於 Vue 實體的響應式資料，會依據資料變化動態更新",
      "用於回傳計算的值，可被暫存，當綁定的數據發生變化時會自動重新計算",
      "適用於回傳值可能在多個地方使用且依賴資料變化時需要更新的情況",
    ],
  },
];

newHtml = `<ul>`;
arr.forEach((e) => {
  newHtml += `\n    <li>${e.type}</li>\n    <ul>`;
  e.descs.forEach((e2) => {
    newHtml += `\n      <li>${e2}</li>`;
  });
  newHtml += `\n    </ul>`;
});
newHtml +=
  `\n  </ul>\n` +
  `\n\n  <div class="mt-3">methods<div>` +
  `\n  <div> 台幣 <input type="text" v-model="twd_m" @input="twd2krw()"><div>` +
  `\n  <div class="mt-3"> 韓圜 <input type="text" v-model="krw_m" @input="krw2twd()"><div>` +
  `\n\n  <div class="mt-3">computed<div>` +
  `\n  <div> 台幣 <input type="text" v-model="twd_c"><div>` +
  `\n  <div class="mt-3"> 韓圜 <input type="text" v-model="krw_c"><div>`;

$("#pre-1-3-3").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        twd_m: 1,
        krw_m: 39.10833,
        twd_c: 1,
        ex_rates: 39.10833,
      };
    },
    methods: {
      twd2krw() {
        this.krw_m = this.format_num(Number(this.twd_m) * this.ex_rates);
      },
      krw2twd() {
        this.twd_m = this.format_num(Number(this.krw_m) / this.ex_rates);
      },
      format_num(val) {
        return Number.parseFloat(val).toFixed(3);
      },
    },
    computed: {
      krw_c: {
        get() {
          return this.format_num(Number(this.twd_c) * this.ex_rates);
        },
        set(val) {
          this.twd_c = this.format_num(Number(val) / this.ex_rates);
        },
      },
    },
  }).mount("#div-1-3-3");
`);
$("#div-1-3-3").html(newHtml);

app = createApp({
  data() {
    return {
      twd_m: 1,
      krw_m: 39.10833,
      twd_c: 1,
      ex_rates: 39.10833,
    };
  },
  methods: {
    twd2krw() {
      this.krw_m = this.format_num(Number(this.twd_m) * this.ex_rates);
    },
    krw2twd() {
      this.twd_m = this.format_num(Number(this.krw_m) / this.ex_rates);
    },
    format_num(val) {
      return Number.parseFloat(val).toFixed(3);
    },
  },
  computed: {
    krw_c: {
      get() {
        return this.format_num(Number(this.twd_c) * this.ex_rates);
      },
      set(val) {
        this.twd_c = this.format_num(Number(val) / this.ex_rates);
      },
    },
  },
}).mount("#div-1-3-3");

// **************************************************

newHtml =
  `<label for="chkbox">啟用按鈕</label>` +
  `\n  <input type="checkbox" id="chkbox" v-model="exe_btn">` +
  `\n  <button class="ms-3"  @click="getNewData()" :disabled="!exe_btn">刷新資料</button>` +
  `\n\n  <div :id="name">{{ name }}</div>` +
  `\n  <img :src="img">`;

$("#pre-1-4-1").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        exe_btn: true,
        name: idol.name,
        img: idol.img,
      };
    },
    methods: {
      getNewData() {
        while (idol.name == this.name) idol = get_idol();
        this.name = idol.name;
        this.img = idol.img;
      },
    },
  }).mount("#div-1-4-1");
`);
$("#div-1-4-1").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      exe_btn: true,
      name: idol.name,
      img: idol.img,
    };
  },
  methods: {
    getNewData() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
      this.img = idol.img;
    },
  },
}).mount("#div-1-4-1");

// **************************************************

newHtml = `
  <input type="text" v-model="name" :placeholder="placeholder">
  <p>Her Name Is {{ name }}.</p>
  <img :src="img">
`;
$("#pre-1-4-2-1").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        name: idol.name,
        img: idol.img,
        placeholder: "This is placeholder.",
      };
    },
    watch: {
      name(new_val) {
        idols.forEach((e) => {
          if (new_val.toUpperCase() == e.name.toUpperCase()) {
            this.img = e.img;
          }
        });
      },
    },
  }).mount("#div-1-4-2-1");
`);
$("#div-1-4-2-1").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
      placeholder: "This is placeholder.",
    };
  },
  watch: {
    name(new_val) {
      idols.forEach((e) => {
        if (new_val.toUpperCase() == e.name.toUpperCase()) {
          this.img = e.img;
        }
      });
    },
  },
}).mount("#div-1-4-2-1");

// **************************************************

newHtml = `
  <textarea v-model="msg" :placeholder="placeholder1"></textarea>
  <textarea :placeholder="placeholder2">{{ msg }}</textarea>
  <button @click="clear_textarea()">清除資料</button>
`;
$("#pre-1-4-2-2").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        msg: "",
        placeholder1: "數據雙向綁定.",
        placeholder2: "只會顯示不會更新.",
      };
    },
    methods: {
      clear_textarea() {
        this.msg = "";
      },
    },
  }).mount("#div-1-4-2-2");
`);
$("#div-1-4-2-2").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      msg: "",
      placeholder1: "數據雙向綁定.",
      placeholder2: "只會顯示不會更新.",
    };
  },
  methods: {
    clear_textarea() {
      this.msg = "";
    },
  },
}).mount("#div-1-4-2-2");

// **************************************************

newHtml =
  `<div id="radio">` +
  `\n    <div v-for="idol in arr">` +
  `\n      <input type="radio" :id="idol.name + 1" class="me-1" name="idols" :value="idol.name" v-model="picked">` +
  `\n      <label :for="idol.name + 1" class="me-3">{{ idol.name }}</label>` +
  `\n    </div>` +
  `\n  </div>` +
  `\n  <div><img :src="img"></div>` +
  `\n\n  <div id="checkbox" class="mt-3">` +
  `\n    <div v-for="idol in arr">` +
  `\n      <input type="checkbox" :id="idol.name + 2" class="me-1" :value="idol.name" v-model="checked">` +
  `\n      <label :for="idol.name + 2" class="me-3">{{ idol.name }}</label>` +
  `\n    </div>` +
  `\n  </div>` +
  `\n  <p class="mt-3">{{ checked }}</p>` +
  `\n  <div id="imgs_check" class="d-flex jc-around ai-center"></div>`;
$("#pre-1-4-2-3").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        picked: "",
        checked: [],
        img: "",
      };
    },
    watch: {
      picked(new_val) {
        idols.forEach((e) => {
          if (new_val == e.name) this.img = e.img;
        });
      },
      checked(new_val) {
        let imgs = "";
        new_val.forEach((e) => {
          idols.forEach((e2) => {
            if (e2.name == e) imgs += \`<img src="\${e2.img}">\`;
          });
        });
        $("#imgs_check").html(imgs);
      },
    },
  }).mount("#div-1-4-2-3");
`);
$("#div-1-4-2-3").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      picked: "",
      checked: [],
      arr: idols,
      img: "",
    };
  },
  watch: {
    picked(new_val) {
      idols.forEach((e) => {
        if (new_val == e.name) this.img = e.img;
      });
    },
    checked(new_val) {
      let imgs = "";
      new_val.forEach((e) => {
        idols.forEach((e2) => {
          if (e2.name == e) imgs += `<img src="${e2.img}">`;
        });
      });
      $("#imgs_check").html(imgs);
    },
  },
}).mount("#div-1-4-2-3");

// **************************************************

newHtml =
  `<select v-model="selected">` +
  `\n    <option value="" disabled>請選擇</option>` +
  `\n    <option v-for="idol in arr" :value="idol.name">{{ idol.name }}</option>` +
  `\n  </select>` +
  `\n  <p class="mt-3">{{ selected }}</p>` +
  `\n  <div id="imgs_select" class="d-flex jc-around ai-center"></div>`;
$("#pre-1-4-2-4").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { selected: "", arr: idols };
    },
    watch: {
      selected(new_val) {
        let img = "";
        idols.forEach((e) => {
          if (!new_val) img = "";
          if (e.name == new_val) img = \`<img src="\${e.img}">\`;
        });
        $("#imgs_select").html(img);
      },
    },
  }).mount("#div-1-4-2-4");
`);
$("#div-1-4-2-4").html(newHtml);

app = createApp({
  data() {
    return { selected: "", arr: idols };
  },
  watch: {
    selected(new_val) {
      let img = "";
      idols.forEach((e) => {
        if (!new_val) img = "";
        if (e.name == new_val) img = `<img src="${e.img}">`;
      });
      $("#imgs_select").html(img);
    },
  },
}).mount("#div-1-4-2-4");

// **************************************************

newHtml =
  `<div>v-model = oninput</div>` +
  `\n  <div>v-model.lazy = onchange</div>` +
  `\n  <input class="mt-3" v-model.lazy="val">` +
  `\n  <p class="mt-3">{{ val }}</p>`;
$("#pre-1-4-3-1").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { val: "" };
    },
  }).mount("#div-1-4-3-1");
`);
$("#div-1-4-3-1").html(newHtml);

app = createApp({
  data() {
    return { val: "" };
  },
}).mount("#div-1-4-3-1");

// **************************************************

newHtml =
  `<div>未加上 .number 會被視為字串</div>` +
  `\n  <input class="mt-3 me-3" v-model="num1">` +
  `\n  <input class="mt-3" v-model="num2">` +
  `\n  <p class="mt-3">Sumary : {{ sum }}</p>` +
  `\n\n  <div>加上 .number 將字串轉換為整數後回傳</div>` +
  `\n  <input class="mt-3 me-3" v-model.number="num3">` +
  `\n  <input class="mt-3" v-model.number="num4">` +
  `\n  <p class="mt-3">Sumary : {{ sum2 }}</p>` +
  `\n\n  <div>將 input 設定 type 為 number 可避免使用者輸入非數字</div>` +
  `\n  <input type="number" class="mt-3 me-3" v-model.number="num5">` +
  `\n  <input type="number" class="mt-3" v-model.number="num6">` +
  `\n  <p class="mt-3">Sumary : {{ sum3 }}</p>`;
$("#pre-1-4-3-2").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0,
        num6: 0,
      };
    },
    computed: {
      sum() {
        return this.num1 + this.num2;
      },
      sum2() {
        return this.num3 + this.num4;
      },
      sum3() {
        return this.num5 + this.num6;
      },
    },
  }).mount("#div-1-4-3-2");
`);
$("#div-1-4-3-2").html(newHtml);

app = createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
    };
  },
  computed: {
    sum() {
      return this.num1 + this.num2;
    },
    sum2() {
      return this.num3 + this.num4;
    },
    sum3() {
      return this.num5 + this.num6;
    },
  },
}).mount("#div-1-4-3-2");

// **************************************************

newHtml =
  `<div>未使用 .trim</div>` +
  `\n  <input type="text" placeholder="Edit This" v-model="msg">` +
  `\n  <p class="mt-3">見 Console : {{ msg }}</p>` +
  `\n\n  <div>使用 .trim 過濾 value 頭尾空格</div>` +
  `\n  <input type="text" placeholder="Edit This" v-model.trim="msg2">` +
  `\n  <p class="mt-3">見 Console : {{ msg2 }}</p>`;
$("#pre-1-4-3-3").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { msg: "", msg2: "" };
    },
    watch: {
      msg(new_val) {
        console.log(new_val);
      },
      msg2(new_val) {
        console.log(new_val);
      },
    },
  }).mount("#div-1-4-3-3");
`);
$("#div-1-4-3-3").html(newHtml);

app = createApp({
  data() {
    return { msg: "", msg2: "" };
  },
  watch: {
    msg(new_val) {
      console.log(new_val);
    },
    msg2(new_val) {
      console.log(new_val);
    },
  },
}).mount("#div-1-4-3-3");

// **************************************************

newHtml =
  `<div>v-text 會把原有內容覆蓋</div>` +
  `\n  <p class="mt-3 me-3" v-text="name">Hello</p>` +
  `\n\n  <div>模板則可以被當成字串組合</div>` +
  `\n  <p class="mt-3 me-3">Hello {{ name }}</p>` +
  `\n\n  <button @click="refresh()">Refresh</button>`;
$("#pre-1-4-4-1").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return { name: idol.name };
    },
    methods: {
      refresh() {
        while (idol.name == this.name) idol = get_idol();
        this.name = idol.name;
      },
    },
  }).mount("#div-1-4-4-1");
`);
$("#div-1-4-4-1").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return { name: idol.name };
  },
  methods: {
    refresh() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
    },
  },
}).mount("#div-1-4-4-1");

// **************************************************

newHtml =
  `<div>使用 v-text = innerText</div>` +
  `\n  <div class="mb-3" v-text="msg"></div>` +
  `\n\n  <div>使用 v-html = innerHTML</div>` +
  `\n  <div v-html="msg"></div>` +
  `\n  <button @click="refresh()">Refresh</button>` +
  `\n  <div class="mt-3"><img :src="img"></div>`;
$("#pre-1-4-4-2").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    return {
      name: idol.name,
      msg: \`<p>\${idol.name}</p>\`,
      img: idol.img,
    };
    methods: {
      refresh() {
        while (idol.name == this.name) idol = get_idol();
        this.msg = \`<p>\${idol.name}</p>\`;
      },
    },
  }).mount("#div-1-4-4-2");
`);
$("#div-1-4-4-2").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      msg: `<p>${idol.name}</p>`,
      img: idol.img,
    };
  },
  methods: {
    refresh() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
      this.msg = `<p>${idol.name}</p>`;
      this.img = idol.img;
    },
  },
}).mount("#div-1-4-4-2");

// **************************************************

newHtml =
  `<div>v-once 只會更新一次資料</div>` +
  `\n  <p v-once>{{ name }}</p>` +
  `\n\n  <div>未使用 v-once</div>` +
  `\n  <p>{{ name }}</p>` +
  `\n  <button @click="refresh()">Refresh</button>` +
  `\n  <div class="mt-3"><img :src="img"></div>`;
$("#pre-1-4-4-3").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    return {
      name: idol.name,
      img: idol.img,
    };
    methods: {
      refresh() {
        while (idol.name == this.name) idol = get_idol();
        this.name = idol.name;
        this.img = idol.img;
      },
    },
  }).mount("#div-1-4-4-3");
`);
$("#div-1-4-4-3").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
    };
  },
  methods: {
    refresh() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
      this.img = idol.img;
    },
  },
}).mount("#div-1-4-4-3");

// **************************************************

newHtml =
  `<div>v-pre 不會解析模板內容</div>` +
  `\n  <p v-pre>{{ name }}</p>` +
  `\n\n  <div>解析模板語法</div>` +
  `\n  <p>{{ name }}</p>` +
  `\n\n  <button @click="refresh()">Refresh</button>` +
  `\n  <div class="mt-3"><img :src="img"></div>`;
$("#pre-1-4-4-4").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        name: idol.name,
        img: idol.img,
      };
    },
    methods: {
      refresh() {
        while (idol.name == this.name) idol = get_idol();
        this.name = idol.name;
      },
    },
  }).mount("#div-1-4-4-4");
`);
$("#div-1-4-4-4").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      name: idol.name,
      img: idol.img,
    };
  },
  methods: {
    refresh() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
      this.img = idol.img;
    },
  },
}).mount("#div-1-4-4-4");

// **************************************************

newHtml =
  `<p>綁定格式化 class</p>` +
  `\n  <input type="text" v-model.trim="msg" :class="{ 'text-danger': msg.length > 10 }">` +
  `\n\n  <p class="mt-3">class 綁定</p>` +
  `\n  <input type="text" v-model.trim="msg2" :class="classes">` +
  `\n  <button class="ms-3" @click="flag = !flag">Change</button>` +
  `\n\n  <p class="mt-3">style 綁定</p>` +
  `\n  <input type="text" v-model.trim="msg2" :style="styles">`;
$("#pre-1-4-5").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { msg: "", msg2: "", flag: false };
    },
    computed: {
      classes() {
        return {
          "text-strong": this.flag,
          "text-danger": this.flag,
        };
      },
      styles() {
        return {
          "font-weight": "bold",
          color: "#99FFFF",
        };
      },
    },
  }).mount("#div-1-4-5");
`);
$("#div-1-4-5").html(newHtml);

app = createApp({
  data() {
    return { msg: "", msg2: "", flag: false };
  },
  computed: {
    classes() {
      return {
        "text-strong": this.flag,
        "text-danger": this.flag,
      };
    },
    styles() {
      return {
        "font-weight": "bold",
        color: "#99FFFF",
      };
    },
  },
}).mount("#div-1-4-5");

// **************************************************

newHtml =
  `<div>將 function 寫在標籤中</div>` +
  `\n  <p class="mt-3 me-3">{{ cnt }}</p>` +
  `\n  <button @click="cnt++">Plus 1</button>` +
  `\n\n  <div class="mt-3">將 function 寫在 methods 中</div>` +
  `\n  <p class="mt-3 me-3">{{ cnt2 }}</p>` +
  `\n  <button @click="plus()">Plus 2</button>`;
$("#pre-1-5-1").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { cnt: 0, cnt2: 0 };
    },
    methods: {
      plus() {
        this.cnt2++;
      },
    },
  }).mount("#div-1-5-1");
`);
$("#div-1-5-1").html(newHtml);

app = createApp({
  data() {
    return { cnt: 0, cnt2: 0 };
  },
  methods: {
    plus() {
      this.cnt2++;
    },
  },
}).mount("#div-1-5-1");

// **************************************************

newHtml =
  `<div>未設定參數時，預設帶入 event</div>` +
  `\n  <button class="mt-3" @click="btn1">Click</button>` +
  `\n  <p class="mt-3">{{ msg }}  {{ cnt }}</p>` +
  `\n\n  <div>若要帶入 event 參數時，需使用 $event</div>` +
  `\n  <button class="mt-3" @click="btn2(cnt2, $event)">Click 2</button>` +
  `\n  <p class="mt-3">{{ msg2 }}  {{ cnt2 }}</p>`;
$("#pre-1-5-2").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { msg: "", cnt: 0, msg2: "", cnt2: 0 };
    },
    methods: {
      btn1(event) {
        this.msg = event.type;
        this.cnt++;
      },
      btn2(cnt, e) {
        this.msg2 = e.type;
        cnt++;
        this.cnt2 = cnt;
      },
    },
  }).mount("#div-1-5-2");
`);
$("#div-1-5-2").html(newHtml);

app = createApp({
  data() {
    return { msg: "", cnt: 0, msg2: "", cnt2: 0 };
  },
  methods: {
    btn1(event) {
      this.msg = event.type;
      this.cnt++;
    },
    btn2(cnt, e) {
      this.msg2 = e.type;
      cnt++;
      this.cnt2 = cnt;
    },
  },
}).mount("#div-1-5-2");

// **************************************************

newHtml =
  `<div>當子元素和父元素重疊時，如果觸發了子元素的事件且未阻止冒泡，則父元素的事件也會被觸發。</div>` +
  `\n  <div class="mt-3">.stop > event.stopPropadation() 阻擋事件冒泡</div>` +
  `\n  <div :class="outer" @click="section('outer')">` +
  `\n    <span class="me-3">Outer</span>` +
  `\n    <div :class="inner" @click.stop="section('inner')">Inner</div>` +
  `\n  </div>` +
  `\n  <div>{{ msg }}</div>` +
  `\n\n  <div class="mt-3">未阻止冒泡事件</div>` +
  `\n  <div :class="outer" @click="section2('outer2')">` +
  `\n    <span class="me-3">Outer2</span>` +
  `\n    <div :class="inner" @click="section2('inner2')">Inner2</div>` +
  `\n  </div>` +
  `\n  <div>{{ msg2 }}</div>`;
$("#pre-1-5-3-1").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        msg: "section",
        msg2: "section2",
        classes: "square flex-center cursor-pointer",
      };
    },
    methods: {
      section(val) {
        this.msg = val;
      },
      section2(val) {
        this.msg2 = val;
      },
    },
    computed: {
      outer() {
        return this.classes + " bg-pink mt-3";
      },
      inner() {
        return this.classes + " w-50 h-50 bg-aquablue";
      },
    },
  }).mount("#div-1-5-3-1");
`);
$("#div-1-5-3-1").html(newHtml);

app = createApp({
  data() {
    return {
      msg: "section",
      msg2: "section2",
      classes: "square flex-center cursor-pointer",
    };
  },
  methods: {
    section(val) {
      this.msg = val;
    },
    section2(val) {
      this.msg2 = val;
    },
  },
  computed: {
    outer() {
      return this.classes + " bg-pink mt-3";
    },
    inner() {
      return this.classes + " w-50 h-50 bg-aquablue";
    },
  },
}).mount("#div-1-5-3-1");

// **************************************************

idol = get_idol();
newHtml =
  `<div>.prevent > event.preventDefault() 阻止元素預設行為</div>` +
  `\n  <a href="${idol.ig_url}" class="btn mt-3" @click.prevent="clicked()">Click</a>` +
  `\n  <div>{{ name }}</div>`;
$("#pre-1-5-3-2").text(`
  ${newHtml}

  $("#div-1-5-3-2").html(newHtml);

  app = createApp({
    data() {
      return { name: "" };
    },
    methods: {
      clicked() {
        this.name = idol.name;
      },
    },
  }).mount("#div-1-5-3-2");
`);
$("#div-1-5-3-2").html(newHtml);

app = createApp({
  data() {
    return { name: "" };
  },
  methods: {
    clicked() {
      this.name = idol.name;
    },
  },
}).mount("#div-1-5-3-2");

// **************************************************

newHtml =
  `<div>事件傳遞從 DOM 逐層向下直到達到觸發事件的元素，先觸發父元素事件再觸發子元素事件</div>` +
  `\n  <div :class="outer" @click.capture="section('outer')">Outer` +
  `\n    <div :class="inner" @click="section('inner')">Inner</div>` +
  `\n  </div>` +
  `\n  <div>{{ msg }}</div>`;
$("#pre-1-5-3-3").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        msg: "section",
        classes: "square flex-center cursor-pointer",
      };
    },
    computed: {
      outer() {
        return this.classes + " bg-pink mt-3";
      },
      inner() {
        return this.classes + " w-50 h-50 bg-aquablue";
      },
    },
    methods: {
      section(val) {
        this.msg = val;
      },
      section2(val) {
        this.msg2 = val;
      },
    },
  }).mount("#div-1-5-3-3");
`);
$("#div-1-5-3-3").html(newHtml);

app = createApp({
  data() {
    return {
      msg: "section",
      classes: "square flex-center cursor-pointer",
    };
  },
  computed: {
    outer() {
      return this.classes + " bg-pink mt-3";
    },
    inner() {
      return this.classes + " w-50 h-50 bg-aquablue";
    },
  },
  methods: {
    section(val) {
      this.msg = val;
    },
    section2(val) {
      this.msg2 = val;
    },
  },
}).mount("#div-1-5-3-3");

// **************************************************

idol = get_idol();
newHtml =
  `<div>若沒有 .self ，在點擊 inner 時 function 也會被觸發</div>` +
  `\n  <button class="mt-3" @click="flag = !flag">Click</button>` +
  `\n  <div :class="outer" @click="flag = !flag">Outer` +
  `\n    <div :class="inner" v-show="flag">Inner</div>` +
  `\n  </div>` +
  `\n\n  <div class="mt-3">加上 .self</div>` +
  `\n  <button class="mt-3" @click="flag2 = !flag2">Click</button>` +
  `\n  <div :class="outer" @click.self="flag2 = !flag2">Outer` +
  `\n    <div :class="inner" v-show="flag2">Inner</div>` +
  `\n  </div>`;
$("#pre-1-5-3-4").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        flag: false,
        flag2: false,
        classes: "square flex-center",
        img: idol.img,
      };
    },
    computed: {
      outer() {
        return this.classes + " bg-pink mt-3 cursor-pointer";
      },
      inner() {
        return this.classes + " w-50 h-50 bg-aquablue";
      },
    },
  }).mount("#div-1-5-3-4");
`);
$("#div-1-5-3-4").html(newHtml);

app = createApp({
  data() {
    return {
      flag: false,
      flag2: false,
      classes: "square flex-center",
      img: idol.img,
    };
  },
  computed: {
    outer() {
      return this.classes + " bg-pink mt-3 cursor-pointer";
    },
    inner() {
      return this.classes + " w-50 h-50 bg-aquablue";
    },
  },
}).mount("#div-1-5-3-4");

// **************************************************

newHtml =
  `<div>.once 使事件只能被觸發一次</div>` +
  `\n  <button class="mt-3" @click.once="btn1()">Refresh1</button>` +
  `\n  <span class="ms-3">觸發 {{ cnt }} 次</span>` +
  `\n\n  <div class="mt-3">未使用 .once</div>` +
  `\n  <button class="mt-3" @click="btn2()">Refresh2</button>` +
  `\n  <span class="ms-3">觸發 {{ cnt2 }} 次</span>` +
  `\n\n  <div class="mt-3">{{ name }}</div>` +
  `\n  <div><img :src="img"></div>`;
$("#pre-1-5-3-5").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return {
        cnt: 0,
        cnt2: 0,
        name: idol.name,
        img: idol.img,
      };
    },
    methods: {
      refresh() {
        while (idol.name == this.name) idol = get_idol();
        this.name = idol.name;
        this.img = idol.img;
      },
      btn1() {
        this.refresh();
        this.cnt++;
      },
      btn2() {
        this.refresh();
        this.cnt2++;
      },
    },
  }).mount("#div-1-5-3-5");
`);
$("#div-1-5-3-5").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return {
      cnt: 0,
      cnt2: 0,
      name: idol.name,
      img: idol.img,
    };
  },
  methods: {
    refresh() {
      while (idol.name == this.name) idol = get_idol();
      this.name = idol.name;
      this.img = idol.img;
    },
    btn1() {
      this.refresh();
      this.cnt++;
    },
    btn2() {
      this.refresh();
      this.cnt2++;
    },
  },
}).mount("#div-1-5-3-5");

// **************************************************

const a_passive = $("a[href='#p-1-5-3-6']");
a_passive.css("color", "#FFFFFF");
a_passive.parents()[0].style["background-color"] = "RED";
newHtml =
  `<h1 class="text-danger">看不懂</h1>` +
  `\n  <div>.passive 等同於 addEventListener 的 passive 屬性</div>` +
  `\n  <div class="square flex-center" @wheel.passive="scroll($event)">scroll</div>`;
$("#pre-1-5-3-6").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {};
    },
    methods: {
      scroll(val) {
        console.log(val);
      },
    },
  }).mount("#div-1-5-3-6");
`);
$("#div-1-5-3-6").html(newHtml);

app = createApp({
  data() {
    return {};
  },
  methods: {
    scroll(val) {
      console.log(val);
    },
  },
}).mount("#div-1-5-3-6");

// **************************************************

arr = new Array(
  "enter",
  "tab",
  "delete (包含 del 與 backspace 鍵)",
  "esc",
  "space",
  "up",
  "down",
  "left",
  "right",
  "ctrl",
  "alt",
  "shift",
  "meta"
);
newHtml =
  `<ul><li v-for="e in arr">.{{ e }}</li></ul>` +
  `\n\n  <div>以 .enter 示範</div>` +
  `\n  <div><input type="text" class="mt-3" v-model.trim="msg" @keydown.enter="refresh()"></div>` +
  `\n  <div><textarea class="mt-3">{{ msgs }}</textarea></div>`;
$("#pre-1-5-4-1").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { msg: "", msgs: "", arr: arr };
    },
    methods: {
      refresh() {
        this.msgs += (this.msgs ? ", " : "") + this.msg;
        this.msg = "";
      },
    },
  }).mount("#div-1-5-4-1");
`);
$("#div-1-5-4-1").html(newHtml);

app = createApp({
  data() {
    return { msg: "", msgs: "", arr: arr };
  },
  methods: {
    refresh() {
      this.msgs += (this.msgs ? ", " : "") + this.msg;
      this.msg = "";
    },
  },
}).mount("#div-1-5-4-1");

// **************************************************

newHtml =
  `<div>在未使用 .exact 精準判斷修飾符的情況下，只要按下主要設置的按鍵，就會觸發事件，即使同時按下其他按鍵</div>` +
  `\n  <div class="mt-3">未使用 .exact</div>` +
  `\n  <input type="text" v-model.trim="msg" @keydown.enter="refresh()">` +
  `\n  <div>{{ msgs }}</div>` +
  `\n\n  <div class="mt-3">使用 .exact</div>` +
  `\n  <input type="text" v-model.trim="msg2" @keydown.enter.exact="refresh(2)">` +
  `\n  <div>{{ msgs2 }}</div>`;
$("#pre-1-5-4-2").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { msg: "", msgs: "", msg2: "", msgs2: "" };
    },
    methods: {
      refresh(type) {
        if (!type) type = "";
        const msgs_type = \`msgs\${type}\`,
          msg_type = \`msg\${type}\`;
        this[msgs_type] += (this[msgs_type] ? ", " : "") + this[msg_type];
        this[msg_type] = "";
      },
    },
  }).mount("#div-1-5-4-2");
`);
$("#div-1-5-4-2").html(newHtml);

app = createApp({
  data() {
    return { msg: "", msgs: "", msg2: "", msgs2: "" };
  },
  methods: {
    refresh(type) {
      if (!type) type = "";
      const msgs_type = `msgs${type}`,
        msg_type = `msg${type}`;
      this[msgs_type] += (this[msgs_type] ? ", " : "") + this[msg_type];
      this[msg_type] = "";
    },
  },
}).mount("#div-1-5-4-2");

// **************************************************

arr = new Array("left", "right", "middle");
newHtml =
  `<ul><li v-for="e in arr">{{ e }}</li></ul>` + `\n\n  <div :class="classes"`;
arr.forEach((e) => {
  newHtml += `\n     @click.${e}.prevent.exact="refresh('${e}')"`;
});
newHtml += `>\n  {{ msg }}</div>`;
$("#pre-1-5-5").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        msg: "",
        arr: arr,
        classes: "square bg-pink flex-center",
      };
    },
    methods: {
      refresh(val) {
        const obj = { right: "右鍵", left: "左鍵", middle: "滾輪" };
        this.msg = \`你按下滑鼠 \${obj[val]}\`;
      },
    },
  }).mount("#div-1-5-5");
`);
$("#div-1-5-5").html(newHtml);

app = createApp({
  data() {
    return {
      msg: "",
      arr: arr,
      classes: "square bg-pink flex-center",
    };
  },
  methods: {
    refresh(val) {
      const obj = { right: "右鍵", left: "左鍵", middle: "滾輪" };
      this.msg = `你按下滑鼠 ${obj[val]}`;
    },
  },
}).mount("#div-1-5-5");

// **************************************************

newHtml =
  `<div>為提高網頁渲染效率，在預設情況下會選擇重複利用已存在的元素而不是重新渲染</div>` +
  `\n  <input class="mt-3" type="text" v-model="name">`;
idols.forEach((e) => {
  newHtml +=
    `\n  <div class="mt-3" v-if="name.toUpperCase() == '${e.name.toUpperCase()}'">` +
    `\n    <img src="${e.img}">\n  </div>`;
});
$("#pre-1-6-1-1").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return { name: idol.name, img: idol.img };
    },
    methods: {
      refresh() {},
    },
  }).mount("#div-1-6-1-1");
`);
$("#div-1-6-1-1").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return { name: idol.name, img: idol.img };
  },
  methods: {
    refresh() {},
  },
}).mount("#div-1-6-1-1");

// **************************************************

newHtml =
  `<div>v-show 是透過修改 css 屬性來顯示或隱藏元素</div>` +
  `\n  <button class="mt-3" @click.left.prevent.exact="flag = !flag">Show</button>` +
  `\n  <div class="mt-3"><img :src="img" v-show="flag"></div>`;

$("#pre-1-6-1-2").text(`
  ${newHtml}

  idol = get_idol();
  app = createApp({
    data() {
      return { flag: false, img: idol.img };
    },
  }).mount("#div-1-6-1-2");
`);
$("#div-1-6-1-2").html(newHtml);

idol = get_idol();
app = createApp({
  data() {
    return { flag: false, img: idol.img };
  },
}).mount("#div-1-6-1-2");

// **************************************************

arr = new Array();
idols.forEach((e) => {
  arr.push(e.name);
});
newHtml =
  `<div>v-for 指令會以 item in items 的形式來使用</div>` +
  `\n  <ul><li v-for="name in arr">{{ name }}</li></ul>`;
$("#pre-1-6-2-1").text(`
  ${newHtml}

  app = createApp({
    data() {
      return {
        arr : idol_arr
      };
    },
  }).mount("#div-1-6-2-1");
`);
$("#div-1-6-2-1").html(newHtml);

app = createApp({
  data() {
    return {
      arr: arr,
    };
  },
}).mount("#div-1-6-2-1");

// **************************************************

newHtml =
  `<button @click="refresh()">Refresh</button>` +
  `\n  <div class="mt-3" v-for="(val, key, idx) in arr">` +
  `\n    {{ idx }}. {{ key }}："{{ val }}"` +
  `\n  </div>`;
$("#pre-1-6-2-2").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { arr: get_idol() };
    },
  }).mount("#div-1-6-2-2");
`);
$("#div-1-6-2-2").html(newHtml);

app = createApp({
  data() {
    return { arr: get_idol() };
  },
  methods: {
    refresh() {
      let arr = get_idol();
      while (this.arr.name == arr.name) arr = get_idol();
      this.arr = arr;
    },
  },
}).mount("#div-1-6-2-2");

// **************************************************

newHtml =
  `<nav aria-label="Page navigation">` +
  `\n    <ul class="pagination">` +
  `\n      <li class="page-item"><a class="page-link">&lt;</a></li>` +
  `\n      <li class="page-item" v-for="i in 10"><a class="page-link">{{ i }}</a></li>` +
  `\n      <li class="page-item"><a class="page-link">&gt;</a></li>` +
  `\n    </ul>` +
  `\n  </nav>`;
$("#pre-1-6-2-3").text(`
  ${newHtml}

  app = createApp({}).mount("#div-1-6-2-3");
`);
$("#div-1-6-2-3").html(newHtml);

app = createApp({}).mount("#div-1-6-2-3");

// **************************************************

newHtml =
  `<div class="btn-group">` +
  `\n    <button class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Click</button>` +
  `\n    <ul class="dropdown-menu">` +
  `\n      <template v-for="e in arr">` +
  `\n        <li><a class="dropdown-item" target="_blank" :href="e.ig_url">{{ e.name }}</a></li>` +
  `\n        <li><hr class="dropdown-divider"></li>` +
  `\n      </template>` +
  `\n    </ul>` +
  `\n  </div>`;
$("#pre-1-6-2-4").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { arr: idols };
    },
  }).mount("#div-1-6-2-4");
`);
$("#div-1-6-2-4").html(newHtml);

app = createApp({
  data() {
    return { arr: idols };
  },
}).mount("#div-1-6-2-4");

// **************************************************

arr = new Array();
for (let i = 1; i < 11; i++) arr.push(i);
newHtml =
  `<p>原始資料：{{ nums }}</p>` +
  `\n  <p>排序：{{ reversed }}</p>` +
  `\n  <p>篩選：{{ filtered }}</p>`;
$("#pre-1-6-2-5").text(`
  ${newHtml}

  app = createApp({
    data() {
      return { nums: arr };
    },
    computed: {
      reversed() {
        return [...this.nums].reverse();
      },
      filtered() {
        return [...this.nums].filter((e) => e % 2 == 0);
      },
    },
  }).mount("#div-1-6-2-5");
`);
$("#div-1-6-2-5").html(newHtml);

app = createApp({
  data() {
    return { nums: arr };
  },
  computed: {
    reversed() {
      return [...this.nums].reverse();
    },
    filtered() {
      return [...this.nums].filter((e) => e % 2 == 0);
    },
  },
}).mount("#div-1-6-2-5");

// **************************************************

arr = [
  [
    "beforeCreate（創建前）",
    "setup()",
    [
      "在 Vue 實體創建前調用",
      "Vue 實體選項（data、methods、computed 等）還未初始化",
    ],
  ],
  [
    "created（創建後）",
    "setup()",
    [
      "Vue 實體創建後調用",
      "Vue 實體的選項已初始化，但元素 app.$el（&lt;template&gt;） 尚未被加入 DOM",
    ],
  ],
  [
    "beforeMount（掛載前）",
    "onBeforeMount",
    [
      "Vue 實體被掛載到 DOM 調用",
      "Vue 實體的模板語法已被編譯為 render 函數，但尚未加入 DOM",
    ],
  ],
  [
    "mounted（掛載後）",
    "onMounted",
    [
      "Vue 實體被掛載到 DOM 後調用",
      "el 的目標 DOM 被 $el（&lt;template&gt;） 所替換 (可以視作 jQuery 的 Ready)",
    ],
  ],
  [
    "beforeUpdate（更新前）",
    "onBeforeUpdate",
    ["當資料有變化且在 DOM 重新渲染前調用"],
  ],
  ["updated（更新後）", "onUpdated", ["當資料有變化且在 DOM 重新渲染後調用"]],
  ["beforeUnmounted（卸載前）", "onBeforeUnmounted", ["Vue 實體被卸載前調用"]],
  [
    "unmounted（卸載後）",
    "onUnmounted",
    ["Vue 實體被卸載後調用", "Vue 實體所有事件監聽與子組件皆被卸載"],
  ],
  ["errorCaptured（錯誤捕獲）", "onErrorCaptured", ["子孫組件拋出錯誤時調用"]],
  ["activated（啟用）", "--", ["組件被啟用時調用"]],
  ["deactivated（停用）", "--", ["組件被停用時調用"]],
];
let tbody = ``;
arr.forEach((e) => {
  const is_rowspan = e[2].length > 1,
    rowspan_str = is_rowspan ? ` rowspan="${e[2].length}"` : "";
  tbody +=
    `<tr>` +
    `<td${rowspan_str}>${e[0]}</td>` +
    `<td${rowspan_str}>${e[1]}</td>` +
    `<td>${e[2][0]}</td>` +
    (is_rowspan ? `</tr><tr><td>${e[2][1]}</td></tr>` : `</tr>`);
});
newHtml =
  `<div class="table-responsive">` +
  `\n  <table class="table table-bordered align-middle">` +
  `\n      <thead class="">` +
  `\n        <tr>` +
  `\n          <th>Hooks 名稱</th>` +
  `\n          <th>Hooks 名稱 (對應 Vue 3.0 Composition API)</th>` +
  `\n          <th>說明</th>` +
  `\n        </tr>` +
  `\n      </thead>` +
  `\n      <tbody>` +
  `\n        ${tbody}` +
  `\n      </tbody>` +
  `\n    </table>` +
  `\n  </div>`;
$("#div-1-7-1").parents()[1].innerHTML += newHtml;

newHtml = `
  <p>修改內容來觀察 Vue 實體的生命週期</p>
  <hr>
  <ul>
    <li>@update 定義於子組件中的 this.$emit("update", "test");</li>
    <li>透過 @update="push_msg" 將 this.$emit("update", "test"); 中的 "test"作為參數傳入至 push_msg(msg) 中</li>
  </ul>
  <div class="container">
    <div class="inspector">
      <div class="inspector-msg" v-for="(m, idx) in msg" :class="{ 'bg-aquablue' : m.is_highlight }">{{ m.msg }}</div>
    </div>

    <div class="mt-3 overflow-auto">
      <demo-app v-if="is_active" @update="push_msg" />
    </div>
  </div>

  <hr>
  <div class="d-flex jc-around ai-center">
    <button @click="toggle">{{ (!is_active) ? 'Mount' : 'Unmount' }}</button>
    <button @click="msg = []">清除紀錄</button>
  </div>
`;
$("#pre-1-7-1").text(`
  ${newHtml}

  idol = get_idol();
app = Vue.createApp({
  data() {
    return {
      msg: [],
      is_active: false,
      name: idol.name,
    };
  },
  methods: {
    toggle() {
      if (!this.is_active) this.msg = [];
      this.is_active = !this.is_active;
      while (this.name == idol.name && this.is_active) idol = get_idol();
      this.name = idol.name;
    },
    push_msg(msg) {
      console.log(msg);
      this.msg.push({
        is_highlight: msg.includes("==="),
        msg: msg,
      });

      this.$nextTick(() => {
        const inspector = document.querySelector(".inspector");
        inspector.scrollTop = inspector.scrollHeight;
      });
    },
  },
});

app.component("demo-app", {
  template: \`
    <p>{{ msg }}</p>
    <div class="d-flex jc-around ai-start">
      <input v-model="msg">
      <img :src="img">
    </div>
  \`,
  data() {
    return {
      msg: \`Hello \${idol.name}!\`,
      img: idol.img,
    };
  },
  beforeCreate() {
    this.$emit("update", "=== beforeCreate! ===");
    this.$emit("update", \`this.msg: \${this.msg}\`);
    this.$emit("update", \`this.$el: \${this.$el}\`);
  },
  created() {
    this.$emit("update", "=== created! ===");
    this.$emit("update", \`this.msg: \${this.msg}\`);
    this.$emit("update", \`this.$el: \${this.$el}\`);
  },
  beforeMount() {
    this.$emit("update", "=== beforeMount! ===");
    this.$emit("update", \`this.msg: \${this.msg}\`);
    this.$emit("update", \`this.$el: \${this.$el}\`);
  },
  mounted() {
    this.$emit("update", "=== mounted! ===");
    this.$emit("update", \`this.msg: \${this.msg}\`);
    this.$emit("update", \`this.$el: \${this.$el}\`);
  },
  beforeUpdate() {
    this.$emit("update", "=== beforeUpdate! ===");
    this.$emit(
      "update",
      \`msg in view: \${this.$el.querySelector("h3").innerText}\`
    );
    this.$emit("update", \`this.msg: \${this.msg}\`);
  },
  updated() {
    this.$emit("update", "=== updated! ===");
    this.$emit(
      "update",
      \`msg in view: \${this.$el.querySelector("h3").innerText}\`
    );
    this.$emit("update", \`this.msg: \${this.msg}\`);
  },
  beforeUnmount() {
    this.$emit("update", \`=== beforeUnmount! ===\`);
  },
  unmounted() {
    this.$emit("update", \`=== unmount! ===\`);
  },
  errorCapture() {
    this.$emit("update", \`=== errorCapture! ===\`);
  },
  activated() {
    this.$emit("update", \`=== activated! ===\`);
  },
  errorCapture() {
    this.$emit("update", \`=== deactivated! ===\`);
  },
});

app.mount("#div-1-7-1");
`);
$("#div-1-7-1").html(newHtml);

idol = get_idol();
app = Vue.createApp({
  data() {
    return {
      msg: [],
      is_active: false,
      name: idol.name,
    };
  },
  methods: {
    toggle() {
      if (!this.is_active) this.msg = [];
      this.is_active = !this.is_active;
      while (this.name == idol.name && this.is_active) idol = get_idol();
      this.name = idol.name;
    },
    push_msg(msg) {
      console.log(msg);
      this.msg.push({
        is_highlight: msg.includes("==="),
        msg: msg,
      });

      this.$nextTick(() => {
        const inspector = document.querySelector(".inspector");
        inspector.scrollTop = inspector.scrollHeight;
      });
    },
  },
});

app.component("demo-app", {
  template: `
    <p>{{ msg }}</p>
    <div class="d-flex jc-around ai-start">
      <input v-model="msg">
      <img :src="img">
    </div>
  `,
  data() {
    return {
      msg: `Hello ${idol.name}!`,
      img: idol.img,
    };
  },
  beforeCreate() {
    this.$emit("update", "=== beforeCreate! ===");
    this.$emit("update", `this.msg: ${this.msg}`);
    this.$emit("update", `this.$el: ${this.$el}`);
  },
  created() {
    this.$emit("update", "=== created! ===");
    this.$emit("update", `this.msg: ${this.msg}`);
    this.$emit("update", `this.$el: ${this.$el}`);
  },
  beforeMount() {
    this.$emit("update", "=== beforeMount! ===");
    this.$emit("update", `this.msg: ${this.msg}`);
    this.$emit("update", `this.$el: ${this.$el}`);
  },
  mounted() {
    this.$emit("update", "=== mounted! ===");
    this.$emit("update", `this.msg: ${this.msg}`);
    this.$emit("update", `this.$el: ${this.$el}`);
  },
  beforeUpdate() {
    this.$emit("update", "=== beforeUpdate! ===");
    this.$emit(
      "update",
      `msg in view: ${this.$el.querySelector("h3").innerText}`
    );
    this.$emit("update", `this.msg: ${this.msg}`);
  },
  updated() {
    this.$emit("update", "=== updated! ===");
    this.$emit(
      "update",
      `msg in view: ${this.$el.querySelector("h3").innerText}`
    );
    this.$emit("update", `this.msg: ${this.msg}`);
  },
  beforeUnmount() {
    this.$emit("update", `=== beforeUnmount! ===`);
  },
  unmounted() {
    this.$emit("update", `=== unmount! ===`);
  },
  errorCapture() {
    this.$emit("update", `=== errorCapture! ===`);
  },
  activated() {
    this.$emit("update", `=== activated! ===`);
  },
  errorCapture() {
    this.$emit("update", `=== deactivated! ===`);
  },
});

app.mount("#div-1-7-1");
