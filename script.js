function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + ":" + session;
  document.getElementById("MyClock").innerHTML = time;
  document.getElementById("MyClock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

// Date

function showDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var date = day + "/" + month + "/" + year;
  document.getElementById("MyDate").innerHTML = date;
  document.getElementById("MyDate").textContent = date;
}

showDate();

// World Clock

function showWorldClock() {
  fetch("location.json")
    .then((response) => response.json())
    .then((data) => {
      //    add into select option

      var select = document.getElementById("list-timezone");

      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);

        var opt = document.createElement("option");
        opt.value = data[i];
        opt.innerHTML = data[i];
        select.appendChild(opt);

        // get timezone

        var timezone = data[i];

        var date = new Date();

        var options = {
          timeZone: timezone,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        };

        var time = date.toLocaleString("en-US", options);

        var div = document.createElement("div");
        div.innerHTML = time;
        document.getElementById("world-clock").appendChild(div);
      }

      // get timezone
    });
}

showWorldClock();
