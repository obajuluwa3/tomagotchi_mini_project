var deadDog = true;
var j = 0
var ageInt = 1
var feedInt = 5
var weakenInt = 0

//load images into an array
var dogRunImages = [];
for (var i = 1; i <= 19; i++) {
  dogRunImages.push("images/dogRun" + i + ".gif")
}

var dogHearts = []
for (var i = 0; i <= 10; i++) {
  dogHearts.push($("#halfHeart" + i))
}

var dogRun = function() {
    if (dogRunImages[j] === 19) {
      clearInterval(int);
    } else {
      $('#dog').attr('src', dogRunImages[j]);
      j++;
    }
  }

$("#play").click(function() {
j = 0
  var int = setInterval("dogRun()", 200);
});

getName = function() {
    var txt = $("#dogName");
    var name = prompt("Please enter the name of your dog below:", "Dog Name");
    if (name == null || name == "") {
        txt.text("Joey");
    } else {
        txt.text(name);
    }
}

window.onload = function() {
  getName();
};

$("#bark").mousedown(function () {
  document.getElementById("barkingSound").play();
});

var dog = {
  name: "Joey",
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
  },
  grow: function(){
    if (deadDog = false) {
      clearInterval(growInt);
    } else {
      $('#dogAge').text(ageInt);
      ageInt++;
    }
  },
  weaken: function() {
    if (deadDog = false) {
      clearInterval(heartsInt);
    } else {
      $('#halfHeart' + weakenInt).css("display", "none");
      weakenInt++;
    }
  },

  hunger: function(){
    if (deadDog = false) {
      clearInterval(hungerInt);
    } else if (feedInt > 10) {
      feedInt = 10;
    } else {
      $('#howHungry').text(feedInt);
      if (feedInt >= 7) {
        $('#howHungry').css("color", "red");
      } else {
        $('#howHungry').css("color", "black");
      }
      feedInt++;
    }
  }
};

var growInt = setInterval(
  function(){
    dog.grow();
  },
10000);

var hungerInt = setInterval(
  function(){
    dog.hunger();
  },
5000);

var heartsInt = setInterval(
    function(){
      if (feedInt > 7) {
        console.log("Dog is getting weaker!")
        dog.weaken();
      }
  },
5000);

$("#feedBtn").click(function() {
  if (feedInt > 0 && feedInt < 7) {
    $('#howHungry').text(feedInt);
    $('#howHungry').css("color", "black");
    if (feedInt > 3) {
      $('#halfHeart' + (weakenInt)).css("display", "inline");
      weakenInt--
    } else {}
    feedInt--;
  } else if (feedInt >= 7) {
    $('#howHungry').text(feedInt);
    $('#howHungry').css("color", "red");
    feedInt--;
  } else {
    console.log("hunger is less than 0!")
    return;
  } 
});

/* if (feedInt >= 7) {
  $('#howHungry').css("color", "red");
} else {
  $('#howHungry').css("color", "black");
}
 var barkButton = document.getElementById('barkButton')
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
3000); */