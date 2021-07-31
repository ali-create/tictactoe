// Dot ids

const winnerIdO = "OOO";
const winnerIdX = "XXX";
const winningIdO = winnerIdO[1];
const winningIdX = winnerIdX[1];

const mapFrameIds = {
  a1: document.querySelector(".a1"),
  a2: document.querySelector(".a2"),
  a3: document.querySelector(".a3"),
  b1: document.querySelector(".b1"),
  b2: document.querySelector(".b2"),
  b3: document.querySelector(".b3"),
  c1: document.querySelector(".c1"),
  c2: document.querySelector(".c2"),
  c3: document.querySelector(".c3"),
};

let winner = document.querySelector(".winner");

let currentPlayer = Math.trunc(Math.random() * 2);

// User Input
{
  mapFrameIds.a1.addEventListener("click", function () {
    if (map.a1 == "\u00b7") {
      setUnit("a1", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.a2.addEventListener("click", function () {
    if (map.a2 == "\u00b7") {
      setUnit("a2", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.a3.addEventListener("click", function () {
    if (map.a3 == "\u00b7") {
      setUnit("a3", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.b1.addEventListener("click", function () {
    if (map.b1 == "\u00b7") {
      setUnit("b1", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.b2.addEventListener("click", function () {
    if (map.b2 == "\u00b7") {
      setUnit("b2", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.b3.addEventListener("click", function () {
    if (map.b3 == "\u00b7") {
      setUnit("b3", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.c1.addEventListener("click", function () {
    if (map.c1 == "\u00b7") {
      setUnit("c1", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.c2.addEventListener("click", function () {
    if (map.c2 == "\u00b7") {
      setUnit("c2", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
  mapFrameIds.c3.addEventListener("click", function () {
    if (map.c3 == "\u00b7") {
      setUnit("c3", currentPlayer ? "O" : "X");
      currentPlayer = currentPlayer ? 0 : 1;
    }
  });
}

const log = function (message) {
  console.log(message);
};
let map = {};
const letters = ["a", "b", "c"];

let letter = letters[0];
for (ii = 0; ii < 3; ii++) {
  letter = letters[ii];
  for (i = 1; i < 4; i++) {
    map[`${letter}${i}`] = "\u00b7";
  }
}

const getValues = function (object) {
  return Object.values(object).toString().replaceAll(",", "");
};

const example = "A1";

const updateFrame = function () {
  mapFrameIds.a1.textContent = map.a1 + "";
  mapFrameIds.a2.textContent = map.a2 + "";
  mapFrameIds.a3.textContent = map.a3 + "";
  mapFrameIds.b1.textContent = map.b1 + "";
  mapFrameIds.b2.textContent = map.b2 + "";
  mapFrameIds.b3.textContent = map.b3 + "";
  mapFrameIds.c1.textContent = map.c1 + "";
  mapFrameIds.c2.textContent = map.c2 + "";
  mapFrameIds.c3.textContent = map.c3 + "";
};

const setLine = function (line, value) {
  for (let i = 1; i < 4; i++) {
    map[line + i] = value;
    updateFrame();
  }
};

updateFrame();

const setUnit = function (key, value, showUpdate = false) {
  const prevVal = map[key];
  map[key] = value;
  if (showUpdate) {
    log(`Set ${key} to ${value}. (${prevVal})`);
    log(printBoard());
  }
  const chunks = {
    topRow: getValues(map).slice(0, 3),
    midRow: getValues(map).slice(3, 6),
    lowRow: getValues(map).slice(6, 9),
  };

  if (showUpdate) log(chunks);
  if (
    chunks["midRow"].toString().replaceAll(",", "") == winnerIdO ||
    chunks["topRow"].toString().replaceAll(",", "") == winnerIdO ||
    chunks["lowRow"].toString().replaceAll(",", "") == winnerIdO
  ) {
    log(printBoard());
    winner.textContent = `${winningIdO} wins!`;
  }

  for (let i = 0; i < 3; i++) {
    if (chunks.topRow[i] + chunks.midRow[i] + chunks.lowRow[i] == winnerIdO) {
      winner.textContent = `${winningIdO} wins!`;
    }
  }
  if (getValues(map)[0] + getValues(map)[4] + getValues(map)[8] == winnerIdO) {
    winner.textContent = `${winningIdO} wins!`;
  }
  if (getValues(map)[2] + getValues(map)[4] + getValues(map)[6] == winnerIdO) {
    winner.textContent = `${winningIdO} wins!`;
  }
  // X line

  if (
    chunks["topRow"] == winnerIdX ||
    chunks["midRow"] == winnerIdX ||
    chunks["lowRow"] == winnerIdX
  ) {
    log(printBoard());
    winner.textContent = `${winningIdX} wins!`;
  }

  for (let i = 0; i < 3; i++) {
    if (chunks.topRow[i] + chunks.midRow[i] + chunks.lowRow[i] == winnerIdX) {
      winner.textContent = `${winningIdX} wins!`;
    }
  }
  if (getValues(map)[0] + getValues(map)[4] + getValues(map)[8] == winnerIdX) {
    winner.textContent = `${winningIdX} wins!`;
  }
  if (getValues(map)[2] + getValues(map)[4] + getValues(map)[6] == winnerIdX) {
    winner.textContent = `${winningIdX} wins!`;

    // tie
  }
  updateFrame();
  checkForTie();
};

function checkForTie() {
  if (!getValues(map).includes("\u00b7")) {
    winner.textContent = "Tie!";
  }
}

const printBoard = function () {
  return `${map.a1} | ${map.a2} | ${map.a3}\n  ______ \n \n${map.b1} | ${map.b2} | ${map.b3} \n  ______ \n \n${map.c1} | ${map.c2} | ${map.c3}`;
};
const printBoardRaw = function () {
  return `${map.a1} | ${map.a2} | ${map.a3} | ${map.b1} | ${map.b2} | ${map.b3} | ${map.c1} | ${map.c2} | ${map.c3}`;
};
