export const stats = cases =>
  cases < 1000
    ? 1
    : cases < 5000
    ? 2
    : cases < 10000
    ? 3
    : cases < 50000
    ? 4
    : cases < 100000
    ? 5
    : cases < 500000
    ? 6
    : cases < 1000000
    ? 7
    : cases < 5000000
    ? 8
    : 9

export const style = {
  1: {height: 14 + 'px', width: 14 + 'px', backgroundColor: '#ffffcc'},
  2: {height: 16 + 'px', width: 16 + 'px', backgroundColor: '#ffeda0'},
  3: {height: 18 + 'px', width: 18 + 'px', backgroundColor: '#fed976'},
  4: {height: 20 + 'px', width: 20 + 'px', backgroundColor: '#feb24c'},
  5: {height: 22 + 'px', width: 22 + 'px', backgroundColor: '#fd8d3c'},
  6: {height: 26 + 'px', width: 26 + 'px', backgroundColor: '#fc4e2a'},
  7: {height: 30 + 'px', width: 30 + 'px', backgroundColor: '#e31a1c'},
  8: {height: 36 + 'px', width: 36 + 'px', backgroundColor: '#bd0026'},
  9: {height: 50 + 'px', width: 50 + 'px', backgroundColor: '#800026'},
}
