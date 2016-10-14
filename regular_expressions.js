"use strict"

function has_ktp(string) {
  if(/\d{3}-\d{2}-\d{4}/g.test(string)){
    return true
  }else{
    return false
  }
}
console.log("Has_KTP");
console.log(has_ktp("please don't share this: 234-60-1422")== true)
console.log(has_ktp("please confirm your identity: XXX-XX-1422")==false)
console.log("==========================");
function grab_ktp(string) {
  return string.match(/\d{3}-\d{2}-\d{4}/g)
}
console.log("grab_ktp")
console.log(grab_ktp("please don't share this: 234-60-1422") == "234-60-1422")
console.log(grab_ktp("please confirm your identity: XXX-XX-1422") == null)
console.log("==========================");

function grab_all_nomor_ktp(string) {
  var hasil = string.match(/\d{3}[-]\d{2}[-]\d{4}/g)
  if (string.match(/\d{3}[-]\d{2}[-]\d{4}/g)) {
    return hasil
  }else {
    return [];
  }
}
console.log("grab_all_nomor_ktp")
console.log(grab_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"));
console.log(grab_all_nomor_ktp("please confirm your identity: XXX-XX-1422"));
console.log("==========================");

function hide_all_nomor_ktp(string) {
  return string.replace(/\d{3}-\d{2}/g,"XXX-XX");
}

console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)
console.log(hide_all_nomor_ktp(string) !== string)
console.log("==========================");
// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
function format_nomor(string) {
  var proses = /(\d{3})[.]?(\d{2})[.]?(\d{4})/g
  if(proses.test(string) === true) {
    return string.replace(proses, "$1-$2-$3");
  } else {
    return string;
  }
}

console.log("format_nomor finds and reformat any nomor KTP in the string")
console.log(format_nomor("234601422, 350.80.0744, 013-60-8762") == "234-60-1422, 350-80-0744, 013-60-8762")

console.log("format_nomor does not alter a string without nomor KTP in it")
string = "please confirm your identity: 44211422"
console.log(format_nomor(string) == string)
