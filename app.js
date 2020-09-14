var devC = {
    cache: {
      devs:[
        {username:'frontenddude', picture: 'https://pbs.twimg.com/profile_images/1260536812419809285/Kj2L2S4v_400x400.jpg'},
        {username:'anniebombanie_', picture: 'https://pbs.twimg.com/profile_images/1298373022169141249/M_ulMgzm_400x400.jpg'},
        {username:'dan_spratling', picture: 'https://pbs.twimg.com/profile_images/1265215811209302019/1xz9p0te_400x400.jpg'},
        {username:'jackdomleo7', picture: 'https://pbs.twimg.com/profile_images/1272653971807711236/6D1ogJo7_400x400.jpg'},
        {username:'catalinmpit', picture: 'https://pbs.twimg.com/profile_images/1302916135151718401/b1UZEHlq_400x400.jpg'},
        {username:'madsbrodt', picture: 'https://pbs.twimg.com/profile_images/1083255447744843776/Gbr1qaRw_400x400.jpg'},
        {username:'NehemiahKiv', picture: 'https://pbs.twimg.com/profile_images/1280723238696431617/j8CestDH_400x400.jpg'},
        {username:'SimonHoiberg', picture: 'https://pbs.twimg.com/profile_images/1082926208516530176/TsBWPhaf_400x400.jpg'},
        {username:'rothecoder', picture: 'https://pbs.twimg.com/profile_images/1282662055896592385/ZF_pHJIM_400x400.jpg'},
        {username:'KassandraSanch', picture: 'https://pbs.twimg.com/profile_images/1262134687729942529/QrYlZu35_400x400.jpg'},
        {username:'DThompsonDev', picture: 'https://pbs.twimg.com/profile_images/1222136283339853833/dr25E9Lk_400x400.jpg'},
        {username:'sarah_bean', picture: 'https://pbs.twimg.com/profile_images/1276195257424637952/I0Yc3NCp_400x400.jpg'},
        {username:'themarcba', picture: 'https://pbs.twimg.com/profile_images/1264809105572724738/L5In8y7l_400x400.jpg'},
        {username:'AnnaJMcDougall', picture: 'https://pbs.twimg.com/profile_images/1266289667550244864/21tqeJlJ_400x400.jpg'},
        {username:'rafrasenberg', picture: 'https://pbs.twimg.com/profile_images/1263763108302139393/XNllStIX_400x400.jpg'},
        {username:'RiaCorpeno', picture: 'https://pbs.twimg.com/profile_images/1304568532785664001/1JTyXdtL_400x400.jpg'},
        {username:'devinDford', picture: 'https://pbs.twimg.com/profile_images/1274250807475666946/iEyHtqfr_400x400.jpg'},
        {username:'ania_kubow', picture: 'https://pbs.twimg.com/profile_images/1253272214176256006/lIrqCUI7_400x400.jpg'},
        {username:'florinpop1705', picture: 'https://pbs.twimg.com/profile_images/595659104384905218/bOtXKmdP_400x400.jpg'},
        {username:'dannysteenman', picture: 'https://pbs.twimg.com/profile_images/1302692919833432066/aLCbCelH_400x400.jpg'},
        {username:'BlakieCodes', picture: 'https://pbs.twimg.com/profile_images/1286083264541728768/M9LCwzMk_400x400.jpg'},
        {username:'flaviocopes', picture: 'https://pbs.twimg.com/profile_images/1084880084090146819/uFLTp7C1_400x400.jpg'},
        {username:'study_web_dev', picture: 'https://pbs.twimg.com/profile_images/1263482479429763072/zl-Sqbop_400x400.jpg'},
        {username:'FrancescoCiull4', picture: 'https://pbs.twimg.com/profile_images/1281842798933823488/b27a8aRm_400x400.jpg'},
        {username:'sudo_overflow', picture: 'https://pbs.twimg.com/profile_images/1272109308826681344/t4XNLk9c_400x400.jpg'},
        {username:'adrian_twarog', picture: 'https://pbs.twimg.com/profile_images/1268445996192632834/Ufosoga3_400x400.jpg'},
        {username:'tucker_dev', picture: 'https://pbs.twimg.com/profile_images/1288973259870998529/Ra3tpR_g_400x400.jpg'},
        {username:'ilonacodes', picture: 'https://pbs.twimg.com/profile_images/1262391748128575488/FV4CfZCn_400x400.jpg'},
        {username:'StasKlymenko', picture: 'https://pbs.twimg.com/profile_images/1084880084090146819/uFLTp7C1_400x400.jpg'},
        {username:'chrisdixon161', picture: 'https://pbs.twimg.com/profile_images/1084880084090146819/uFLTp7C1_400x400.jpg'},
        {username:'PrasoonPratham', picture: 'https://pbs.twimg.com/profile_images/1300840758795141120/diDmYQsO_400x400.jpg'},
        {username:'jamesqquick', picture: 'https://pbs.twimg.com/profile_images/1228449356426219521/jIN5Ci7H_400x400.jpg'},
        {username:'tlakomy', picture: 'https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg'},
        {username:'chrisoncode', picture: 'https://pbs.twimg.com/profile_images/1273771527293538304/gytymTwZ_400x400.jpg'},
        {username:'towernter', picture: 'https://pbs.twimg.com/profile_images/1259743282655105024/SgPjh0Dg_400x400.jpg'},
        {username:'adamwathan', picture: 'https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg'},

  
  ],
      devArea: document.getElementById('devArea'),
    },
    init: function () {
      devC.shuffle(devC.cache.devs)
      devC.applyDevs();
    },
    shuffle: function(array) {
    array.sort(() => Math.random() - 0.5);
  },
    applyDevs: function(){
      devC.cache.devs.forEach(function(item){
        var template = `<div class=" w-full lg:w-1/6  mr-1 mb-1 border-2 border-gray-400 border-solid rounded-md p-3">
        <div class="flex">
        <img src="${item.picture}" class="rounded-lg w-20"alt="">
        <p class="ml-4 font-bold">@${item.username}</p>
          </div>
        <a href="https://twitter.com/${item.username}" target="_blank">
        <button class="mt-4 text-lg w-full rounded-md bg-gray-400 text-gray-300 hover:bg-gray-500 text-gray-600
        font-semibold">Follow</button>
        </a>
      </div>`
        devC.cache.devArea.innerHTML += template;
      })
    }
  };
  
  devC.init();