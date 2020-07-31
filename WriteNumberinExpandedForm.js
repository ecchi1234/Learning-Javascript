/* Đề bài:
function expandedForm(num) {
  var digits = num.toString().split('').reverse().map(function(e, index){
    return (parseInt(e)*Math.pow(10, index)).toString();
  }).filter(function(e){
    return (e !== '0');
  }).reverse().join(" + ");
  
  console.log(digits);
  
  return digits;
  
}
*/
