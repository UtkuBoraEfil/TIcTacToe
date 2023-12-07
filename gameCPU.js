window.addEventListener("load", game);

function game() {
  const checkbox = document.querySelectorAll(".box");
  const turnbar = document.querySelector(".turnbar");
  const reload_button = document.querySelector(".reloadbtn button");
  const box_1 = document.querySelector("#box1");
  const box_2 = document.querySelector("#box2");
  const box_3 = document.querySelector("#box3");
  const box_4 = document.querySelector("#box4");
  const box_5 = document.querySelector("#box5");
  const box_6 = document.querySelector("#box6");
  const box_7 = document.querySelector("#box7");
  const box_8 = document.querySelector("#box8");
  const box_9 = document.querySelector("#box9");
  const background = document.querySelector(".backsection");
  const over_screen = document.querySelector("#bottom");
  const player1 = document.querySelector("#p1");
  const player2 = document.querySelector("#p2");
  const tie = document.querySelector("#tie");
  const btn_quit = document.querySelector("#btn_quit");
  const next_round = document.querySelector("#next_round");

  let p1wins = 0;
  let p2wins = 0;
  let ties = 0;
  let turn = "x";
  let clicked = 0;
  let clickedo = 0;

  checkbox.forEach((box) => {
    box.addEventListener("mouseover", () => {
      console.log(box.id, "over", turn);
      let selected = document.getElementById(box.id);
      if (!selected.classList.contains("active")) {
        if (turn == "x") {
          childDivX = selected.getElementsByTagName("img")[2];
          childDivX.classList.remove("hover-x");
        } else if (turn == "o") {
          childDivO = selected.getElementsByTagName("img")[0];
          childDivO.classList.remove("hover-o");
        }
      }
    });
  });

  checkbox.forEach((box) => {
    box.addEventListener("mouseout", () => {
      console.log(box.id, "out x");
      let selected = document.getElementById(box.id);
      if (!selected.classList.contains("active")) {
        if (turn == "x") {
          childDivX = selected.getElementsByTagName("img")[2];
          childDivX.classList.add("hover-x");
        } else if (turn == "o") {
          childDivO = selected.getElementsByTagName("img")[0];
          childDivO.classList.add("hover-o");rr
        }
      }
    });
  });

  //click
  checkbox.forEach((box) => {
    box.addEventListener("click", () => {
      console.log(box.id, "clicked");
      let selected = document.getElementById(box.id);
      console.log(selected);
      console.log("test", selected.classList.contains("active"));
      if (!selected.classList.contains("active")) {
        selected.classList.add("active");
        if (turn == "x") {
          selected.classList.add("active-x");
          childDiv = selected.getElementsByTagName("img")[1];
          childDiv.classList.remove("x");
          childDiv = selected.getElementsByTagName("img")[2];
          childDiv.classList.add("hover-x");
          clicked++;
          if (isOver(turn) !== "game over") {
            turn = "o";
            //random
            let cpu;
            do {
              var n = Math.random();
              n = n * 9;
              n = Math.floor(n) + 1;
              if (n == 1) {
                cpu = box_1;
              } else if (n == 2) {
                cpu = box_2;
              } else if (n == 3) {
                cpu = box_3;
              } else if (n == 4) {
                cpu = box_4;
              } else if (n == 5) {
                cpu = box_5;
              } else if (n == 6) {
                cpu = box_6;
              } else if (n == 7) {
                cpu = box_7;
              } else if (n == 8) {
                cpu = box_8;
              } else if (n == 9) {
                cpu = box_9;
              }
            } while (cpu.classList.contains("active") && clicked < 8);
            if (!cpu.classList.contains("active") && clicked < 8) {
              isOver(turn);
              cpu.classList.add("active");
              cpu.classList.add("active-o");
              childDiv = cpu.getElementsByTagName("img")[3];
              childDiv.classList.remove("o");
              childDiv = cpu.getElementsByTagName("img")[0];
              childDiv.classList.add("hover-o");
              clicked++;
              clickedo++;
              console.log("console from cpu while", isOver(turn));
              turn = "x";
            }
          }
        }
      }
    });
  });
  //IS OVER?
  function isOver(turn) {
    let clas;
    if (turn == "x") {
      clas = "active-x";
    } else {
      clas = "active-o";
    }
    if (
      box_1.classList.contains(clas) &&
      box_2.classList.contains(clas) &&
      box_3.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_4.classList.contains(clas) &&
      box_5.classList.contains(clas) &&
      box_6.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_7.classList.contains(clas) &&
      box_8.classList.contains(clas) &&
      box_9.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_1.classList.contains(clas) &&
      box_5.classList.contains(clas) &&
      box_9.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_3.classList.contains(clas) &&
      box_5.classList.contains(clas) &&
      box_7.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_1.classList.contains(clas) &&
      box_4.classList.contains(clas) &&
      box_7.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_2.classList.contains(clas) &&
      box_5.classList.contains(clas) &&
      box_8.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (
      box_3.classList.contains(clas) &&
      box_6.classList.contains(clas) &&
      box_9.classList.contains(clas)
    ) {
      game_over(turn);
      return "game over";
    } else if (clicked == 9) {
      game_over_tie();
    } else {
      if (turn == "x") {
        turnbar.getElementsByTagName("img")[0].classList.toggle("hidden");
        turnbar.getElementsByTagName("img")[1].classList.toggle("hidden");
      } else if (turn == "o") {
        turnbar.getElementsByTagName("img")[0].classList.toggle("hidden");
        turnbar.getElementsByTagName("img")[1].classList.toggle("hidden");
      }
    }
  }

  function game_over_tie() {
    over_screen.classList.remove("hidden");
    over_screen.classList.add("grid");
    console.log("tie");
    ties++;
    //brightness i dusur
  }

  function game_over(turn) {
    over_screen.classList.remove("hidden");
    over_screen.classList.add("grid");
    over_screen.querySelector("#who_wins").textContent = "TAKES THE ROUND";
    if (turn == "x") {
      over_screen.querySelector("p").textContent = "PLAYER 1 WINS";
      over_screen.getElementsByTagName("img")[0].classList.remove("hidden");
      over_screen.querySelector("#who_wins").classList.add("text-blues-dark");
      p1wins++;
      //player1.textContent(p1wins);
    } else if (turn == "o") {
      over_screen.querySelector("p").textContent = "PLAYER 2 WINS";
      over_screen.getElementsByTagName("img")[1].classList.remove("hidden");
      over_screen.querySelector("#who_wins").classList.add("text-oranges-dark");
      p2wins++;
      //player2.textContent(p2wins);
    }
  }

  //RELOAD
  reload_button.addEventListener("click", () => {
    clicked = 0;
    turn = "x";
    console.log("HI", turn);
    console.log("next round add event listener working");
    over_screen.classList.add("hidden");
    over_screen.getElementsByTagName("img")[0].classList.add("hidden");
    over_screen.getElementsByTagName("img")[1].classList.add("hidden");
    over_screen.querySelector("p").textContent = "";
    over_screen.querySelector("#who_wins").textContent = "ROUND TIED";
    over_screen
      .querySelector("#who_wins")
      .classList.remove("text-oranges-dark");
    over_screen.querySelector("#who_wins").classList.remove("text-blues-dark");
    turnbar.getElementsByTagName("img")[0].classList.remove("hidden");
    turnbar.getElementsByTagName("img")[1].classList.add("hidden");
    p1wins = 0;
    p2wins = 0;
    ties = 0;
    player1.textContent = p1wins;
    player2.textContent = p2wins;
    tie.textContent = ties;

    [].forEach.call(checkbox, function (el) {
      el.classList.remove("active");
      el.classList.remove("active-x");
      el.classList.remove("active-o");
    });
    checkbox.forEach((box) => {
      let selected = document.getElementById(box.id);
      let mx = selected.getElementsByTagName("img")[1];
      let mx1 = selected.getElementsByTagName("img")[3];
      mx.classList.add("x");
      mx1.classList.add("o");
    });
  });

  //buttons
  next_round.addEventListener("click", () => {
    clicked = 0;
    turn = "x";
    console.log(turn);
    console.log("next round add event listener working");
    over_screen.classList.add("hidden");
    over_screen.getElementsByTagName("img")[0].classList.add("hidden");
    over_screen.getElementsByTagName("img")[1].classList.add("hidden");
    over_screen.querySelector("p").textContent = "";
    over_screen.querySelector("#who_wins").textContent = "ROUND TIED";
    over_screen
      .querySelector("#who_wins")
      .classList.remove("text-oranges-dark");
    over_screen.querySelector("#who_wins").classList.remove("text-blues-dark");
    turnbar.getElementsByTagName("img")[0].classList.remove("hidden");
    turnbar.getElementsByTagName("img")[1].classList.add("hidden");
    player1.textContent = p1wins;
    player2.textContent = p2wins;
    tie.textContent = ties;

    [].forEach.call(checkbox, function (el) {
      el.classList.remove("active");
      el.classList.remove("active-x");
      el.classList.remove("active-o");
    });

    checkbox.forEach((box) => {
      let selected = document.getElementById(box.id);
      let mx = selected.getElementsByTagName("img")[1];
      let mx1 = selected.getElementsByTagName("img")[3];
      mx.classList.add("x");
      mx1.classList.add("o");
    });
  });
}
