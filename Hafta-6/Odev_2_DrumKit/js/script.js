document.addEventListener("DOMContentLoaded", function () {
  let buttons = [
    {
      id: "button1",
      key: "a",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/boom.wav",
    },
    {
      id: "button2",
      key: "s",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/clap.wav",
    },
    {
      id: "button3",
      key: "d",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/clap.wav",
    },
    {
      id: "button4",
      key: "f",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/kick.wav",
    },
    {
      id: "button5",
      key: "g",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/openhat.wav",
    },
    {
      id: "button6",
      key: "h",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/ride.wav",
    },
    {
      id: "button7",
      key: "j",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/snare.wav",
    },
    {
      id: "button8",
      key: "k",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/tink.wav",
    },
    {
      id: "button9",
      key: "l",
      audio: "/Hafta-6/Odev_2_DrumKit/assests/sound/tom.wav",
    },
  ];

  //mouse ile tılandığında tetiklenecek döngü
  buttons.forEach(function (button) {
  
    let adm = document.getElementById(button.id);
    let audio = new Audio(button.audio);

    // Butona tıklanma olayını ekle
    adm.addEventListener("click", function () {
      playSound(audio);
    });
  });

  //klavye tuşuna tıklanma olayını ekle
  document.addEventListener("keydown", function (event) {
    let keys = event.key.toLowerCase(); 
    let button = buttons.find(function (b) { //ilk öğeyi bul
      return b.key === keys;
    });
    if (button) {
      let audio = new Audio(button.audio);
      playSound(audio);
    }
   
  });

  // Ses dosyasını çalan fonksiyon
  function playSound(audio) {
    audio.currentTime = 0; 
    audio.play(); 
  }

});
