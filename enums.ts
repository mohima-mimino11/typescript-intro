enum Month{
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}
console.log(Month);

function isItSummer(month: Month){
  let isSummer : boolean;
  switch(month){
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Month.Jul));
console.log(isItSummer(Month.May));
console.log(isItSummer(6)); // true
// Let’s check the generated Javascript code of the Month enum:
// var Month;
// (function (Month) {
//     Month[Month["Jan"] = 0] = "Jan";
//     Month[Month["Feb"] = 1] = "Feb";
//     Month[Month["Mar"] = 2] = "Mar";
//     Month[Month["Apr"] = 3] = "Apr";
//     Month[Month["May"] = 4] = "May";
//     Month[Month["Jun"] = 5] = "Jun";
//     Month[Month["Jul"] = 6] = "Jul";
//     Month[Month["Aug"] = 7] = "Aug";
//     Month[Month["Sep"] = 8] = "Sep";
//     Month[Month["Oct"] = 9] = "Oct";
//     Month[Month["Nov"] = 10] = "Nov";
//     Month[Month["Dec"] = 11] = "Dec";
// })(Month || (Month = {}));

