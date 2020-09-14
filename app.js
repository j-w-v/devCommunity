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
        var template = `<div class="w-1/6 mr-1 mb-1 border-2 border-gray-400 border-solid rounded-md p-3">
        <div class="flex">
        <img src="${item.picture}" class="rounded-lg w-20"alt="">
        <p class="ml-4 font-bold">@${item.username}</p>
          </div>
        <a href="https://twitter.com/${item.username}" target="_blank"><button class="mt-4 text-lg w-full rounded-md bg-gray-400 text-gray-300 hover:bg-gray-500 text-gray-800">Follow</button></a>
      </div>`
        devC.cache.devArea.innerHTML += template;
      })
    }
  };
  
  devC.init();