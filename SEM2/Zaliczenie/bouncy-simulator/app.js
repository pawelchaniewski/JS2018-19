/// <reference path="./lib/p5.d/p5.global-mode.d.ts" />

/* *******************

Bouncy Simulator - Paweł Chaniewski grupa I

Komentarze w kodzie jedynie ze względu na to,
że nie mogę osobiście o nim opowiedzieć.

Pierwsza linijka jedynie dla wygody pisania
(dodaje do IDE podpowiadanie dla biblioteki p5)

Program korzysta z biblioteki p5 do rysowania.
Plansze są definiowane jako tablica 2D, gdzie:
 * X - statyczny blok
 * 0 - blok bezkolizji (tło)
 * 1 - aktor (niezaimplementowane)

Plansze mogą być dowolnego rozmiaru.
Całość dynamicznie oblicza na starcie rozmiary bloków,
aby uwzględniając rozmiar okna,
wyświelić na nim w całości planszę.

Problemy:
- Nie udało mi się rozbić skryptu na kilka plików
  (problem przy imporcie do HTML)
- Wykrywanie kolizji kant <-> kant nie działa
  (problem z zaokrąglaniem pierwiastka z 2)

TODO:
- Zaimplementować blok zmieniający wektor aktora na losowy
  przy kolizji (blok Y)
- Wskazywanie pozycji startowej (obecnie zawsze w lewym górym rogu)

Program działa w przeglądarce:
 - index.html

Dalej w kodzie komentarze z wyjaśnieniami.

******************* */

// Predefiniowane plansze
const board0 = [
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X"]
];

const board1 = [
  ["X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "X", "0", "0", "0", "X"],
  ["X", "0", "0", "X", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "x", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X"]
];

const board2 = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
];

const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "1", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "0", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
];

// Obiekt reprezentujący klocek
// Posiada właściwości:
// * pozycja (x, y)
// * rozmiar (w ,h)
// * czy ma wykrywać kolizję (collision)
class Block {
  constructor(x, y, w, h, collision = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collision = collision;
    this.touched = false;
    this.color = this.collision ? 255 : 64;
  }

  // Przy kolizji - przyciemnij kolor
  touch() {
    this.touched = true;
    this.color -= 30;
  }

  show() {
    // stroke, fill i rect to funkcje p5
    stroke(64);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);

    fill(50);
    // text(`${this.x} ${this.y}`, this.x, this.y);
  }

  // Funkcja sprawdzająca czy ten obiekt przecina się z innym (kolizja)
  intersects(other) {
    const distance = dist(this.x, this.y, other.x, other.y);
    if (
      distance <= other.w / 2 + this.w / 2 ||
      distance <= other.h / 2 + this.h / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}

// Aktor to piłka która będzie poruszać się po planszy
class Actor {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // Na starcie ustalony jest wektor dół-prawo
    this.vx = 1;
    this.vy = 1;
  }

  show() {
    stroke(255);
    rect(this.x, this.y, this.w, this.h);

    fill(50);
    // text(`${this.x} ${this.y}`, this.x, this.y);
  }

  // Funkcja która porusza aktora
  // dodaje do jego pozycji jego długość/szerokość
  // pomnożoną przez werktor ruchu
  move() {
    this.x += this.w * this.vx;
    this.y += this.h * this.vy;
  }

  // Funkcja zmieniająca wektor na przeciwny
  // (w przypadku kolizji - zawsze porusza się po skosie)
  reverseVector() {
    this.vx *= -1;
    this.vy *= -1;
  }
}

// Funkcja przetwarzająca planszę z postaci tablicy 2D
function boardParser(arrBoard, block_width, block_height) {
  let boardCollection = [];
  arrBoard.map(function(rowValue, rowIndex) {
    const y = rowIndex;
    rowValue.map(function(value, index) {
      const x = index;
      let collision = false;
      if (String(value).toLowerCase() === "x") {
        collision = true;
      } else {
        collision = false;
      }

      boardCollection.push(
        new Block(
          x * block_width + block_width / 2,
          y * block_height + block_height / 2,
          block_width,
          block_height,
          collision
        )
      );
    });
  });

  return boardCollection;
}

let boardParsed;
let actor;

// Funkcja przygotowuje planszę i rozmieszcza na niej bloki
function setup() {
  const BLOCK_HEIGHT = Math.floor(windowHeight / board.length);
  const BLOCK_WIDTH = BLOCK_HEIGHT;
  const ACTOR_START_POS_X = BLOCK_HEIGHT + BLOCK_HEIGHT / 2;
  const ACTOR_START_POS_Y = BLOCK_WIDTH + BLOCK_WIDTH / 2;

  // Ilość klatek na sekundę
  // im więcej tym animacja będzie szybsza
  frameRate(5);
  rectMode(CENTER);

  boardParsed = boardParser(board, BLOCK_WIDTH, BLOCK_HEIGHT);
  createCanvas(windowWidth, windowHeight);

  actor = new Actor(
    ACTOR_START_POS_X,
    ACTOR_START_POS_Y,
    BLOCK_WIDTH,
    BLOCK_HEIGHT
  );
}

// Główna funkcja, odpowiada za renderowanie planszy w widoku
// oraz wykrywanie kolizji między obiektami
function draw() {
  background(0);
  // Na początku rozmieść i pokaż obiekty
  for (let i = 0; i < boardParsed.length; i++) {
    const obj = boardParsed[i];
    obj.show();
  }

  // Najpierw pokaż aktora
  // poźniej zaktualizuj jego nową pozycję
  // (w tej kolejności by nigdy nie był wyświetlony aktor
  // na innym obiekcie z którym powinien kolidować)
  actor.show();
  actor.move();

  // Sprawdzanie kolizji
  // Iteruje po wszystkich blokach na planszy
  // badając czy nie koliduje on z aktorem
  let objTouched = [];
  for (let i = 0; i < boardParsed.length; i++) {
    const obj = boardParsed[i];
    if (obj.collision && obj.intersects(actor)) {
      print("Objects collide!");
      objTouched.push(obj);
      obj.touch();
    }
  }

  // Jeżeli nastąpiła kolizja
  // zbadaj w który bok aktora był dotknięty
  // na tej podstawie zmień wektor dla kolejnego ruchu.
  // Kolizja może nastapić z jednym lub wieloma obiektami
  // (np. kąt planszy - wtedy niech wraca)
  if (objTouched.length === 1) {
    const obj = objTouched[0];
    if (obj.y === actor.y) {
      actor.vx *= -1;
    } else if (obj.x === actor.x) {
      actor.vy *= -1;
    }
  } else if (objTouched.length > 1) {
    actor.vx *= -1;
    actor.vy *= -1;
  }
}
