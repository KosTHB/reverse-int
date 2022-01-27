module.exports = function reverse (n) {
  n = Math.abs(n)
  let arr = n.toString(10).replace(/\D/g, '0').split('').map(Number);
  n = arr.reverse();
  var res = (Number(n.join().replace(/,/g, '')))
  return res;
}
