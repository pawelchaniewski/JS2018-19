/* *******************

Game Of Life - Paweł Chaniewski grupa I

Komentarze w kodzie jedynie ze względu na to,
że nie mogę osobiście o nim opowiedzieć.

Program składa się z głównej funkcji (main(grid))
która odpowiada za całą logikę.
Przyjmuje w parametrze tablicę 2D w której zdefiniowane
jest pole gry i początkowy stan komórek.
Stan komórki to 1 (żywa) lub 0 (martwa).
Rozmiar tabeli może być dowolny.

Program na obecną chwilę działa w konsoli:
$ node game.js

TODO: Wykorzystać kod w HTML

Dalej w kodzie komentarze z wyjaśnieniami.

******************* */

"use strict";

// Plansza gry ze zdefioniowanymi komórkami (tutaj glider)
let grid = [
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// Główna funkcja
function main(grid) {
  // Przebieg gry wyświetlany jest w konsoli
  // Przed wyświeleniem nowego stanu planszy
  // Output konsoli jest czyszczony (pseudo animacja)
  console.clear();
  console.table(grid);

  // Plansza za każdym razem jest generowana na nowo
  let newGrid = [];

  // Iteruje po każdym wierszu tabeli
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    let newRow = [];

    // Iteruje po każdej kolumnie w danym wierszu
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const columnLenght = grid.length;
      const cell = grid[rowIndex][columnIndex];

      // Definiuje stany które będą aktualizowane
      // na podstawie warunków gry
      // Początkowy stan to martwa komórka bez sąsiadów
      let neighbours = 0;
      let newCell = 0;

      // Czy nad komórką jest komórka,
      // jeżeli tak to czy jest żywa
      // jeżeli żywa => zwiększ ilość sąsiadów
      if (rowIndex - 1 >= 0) {
        if (grid[rowIndex - 1][columnIndex] === 1) {
          neighbours++;
        }
      }

      // on the bottom
      if (rowIndex + 1 < columnLenght) {
        if (grid[rowIndex + 1][columnIndex] === 1) {
          neighbours++;
        }
      }

      // on the left
      if (columnIndex - 1 >= 0) {
        if (grid[rowIndex][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the right
      if (columnIndex + 1 < row.length) {
        if (grid[rowIndex][columnIndex + 1] === 1) {
          neighbours++;
        }
      }

      // on the top left
      if (rowIndex - 1 >= 0 && columnIndex - 1 >= 0) {
        if (grid[rowIndex - 1][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the bottom left
      if (rowIndex + 1 < columnLenght && columnIndex - 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the top right
      if (rowIndex - 1 >= 0 && columnIndex + 1 < row.length) {
        if (grid[rowIndex - 1][columnIndex + 1] === 1) {
          neighbours++;
        }
      }

      // on the bottom right
      if (rowIndex + 1 < columnLenght && columnIndex + 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex + 1] === 1) {
          neighbours++;
        }
      }

      // W zależności od wyniku poprzednich warunków
      // Czyli od ilości wykrytych żywych komórek
      // sąsiadujących z obecnie obsługiwaną,
      // wybierz czy ma być martwa czy żywa
      // (zgodnie z zasadami gry w życie)
      if (neighbours < 2) {
        newCell = 0;
      } else if (neighbours === 2 && cell === 1) {
        newCell = 1;
      } else if (neighbours === 2 && cell === 0) {
        newCell = 0;
      } else if (neighbours === 3) {
        newCell = 1;
      } else if (neighbours > 3) {
        newCell = 0;
      }

      // Buduje nową tabelę - dodaj zaktualizowaną komórkę do wiersza
      newRow.push(newCell);
    }

    // Buduje nową tabelę - dodaj zaktualizowany wiersz do tabeli
    newGrid.push(newRow);
  }
  return newGrid;
}

// Funkcja pomocnicza - zwykły timeout, aby
// można było zauważyć poszczególne kroki gry
function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Funkcja która obsługuje przebieg wyświetlania gry
// pętla for określa maksymalną liczbę kroków
// które zostaną wykonane w trakcie jednej gry
// Fukcja sleep daje możliwość ustalenia częstotliwości
// odświeżania wyników wyświetlanych w konsoli.
async function run() {
  for (let i = 0; i < 50; ++i) {
    grid = main(grid);
    await sleep(100);
  }
}

// Wywołanie gry
run();
