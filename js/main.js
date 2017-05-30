var dog = {
  name: "",
  hunger: 7,
  bark: function(){
    alert(this.name + " says Bark BARK");
  },
  feed: function(){
    alert(this.name + " says yummm");
    this.hunger = 0;
  },
  poop: function(){
    alert(this.name + " pooped");
  }
};

var barkButton = document.getElementById('bark')
barkButton.addEventListener("click", function(){
  dog.bark();
})

var nameButton = document.getElementById("nameButton");
nameButton.addEventListener("click", function(){
  var name = document.getElementById("dogName").value;
  dog.name = name;
  console.log(dog)
});

var hungerMeter = document.getElementById("hunger");
var feedButton = document.getElementById("feed");
feedButton.addEventListener("click", function(){
  dog.feed();
  hungerMeter.innerText = dog.hunger;
})
hungerMeter.innerText = dog.hunger;

setInterval(
  function(){
    dog.poop();
  },
10000);

setInterval(
  function(){
    dog.hunger++;
    hungerMeter.innerText = dog.hunger;
  },
3000);