let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreateDate.toLocaleDateString());
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-30-2024");
// console.log(myCreateDate.toLocaleString());

//
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// `${newDate.getDay()} and the time`;

// newDate.toLocaleString("default", {
//   weekday: "long",
//   //timeZone:''
// });

//Date interlization-->Intl

// const formatter = new Intl.DateTimeFormat("en-US");
// console.log(formatter.format(new Date()));

// const formatter = new Intl.DateTimeFormat("es", {
//   //year: "2-digit",
//   dateStyle: "long",
// });
// console.log(formatter.format(new Date()));

// const formatter = new Intl.RelativeTimeFormat("en", { numeric: "always" });
// console.log(formatter.format(1, "day"));

// const formatter = new Intl.NumberFormat(undefined, {
//   currency: "INR",
//   style: "currency",
// });
// console.log(formatter.format(321456));

// const formatter = new Intl.NumberFormat(undefined, {
//   style: "unit",
//   unit: "liter",
//unitDisplay:"long"
// });
// console.log(formatter.format(35620));

//Social media view code
// const formatter = new Intl.NumberFormat(undefined, {
//   notation: "compact",
// });
// console.log(formatter.format(14541587896));

const formatter = new Intl.PluralRules(undefined);

console.log(formatter.select(1));
