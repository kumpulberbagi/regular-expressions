"use strict"
// Determine whether a string contains a nomor KTP
function has_ktp(string) {

    // console.log(string.match(/\d{3}-\d{2}-\d{4}/));
    // console.log(string.match(/\d/g).length);

    if(string.match(/\d/g).length == 9) {
        return true;
    }
    else {
        return false;
    }

    // console.log(/:[0-9]{3}/.mar(string));
    // return /\d{3}-\d{2}-\d{4}/.exec(string);

}

console.log("has_ktp returns true if it has what looks like a nomor KTP")
console.log(has_ktp("please don't share this: 234-60-1422") == true)

console.log("has_ktp returns false if it doesn't have a nomor KTP")
console.log(has_ktp("please confirm your identity: XXX-XX-1422") == false)

// Return the Social Security number from a string.
function grab_ktp(string) {
    // console.log(string.match(/\d{3}-\d{2}-\d{4}/));
    return string.match(/\d{3}-\d{2}-\d{4}/);
}

console.log("grab_ktp returns an nomor KTP if the string has an nomor KTP")
console.log(grab_ktp("please don't share this: 234-60-1422") == "234-60-1422")

console.log("grab_ssn returns nil if it doesn't have a nomor KTP")
console.log(grab_ktp("please confirm your identity: XXX-XX-1422") == null)

// Return all of the Social Security numbers from a string.
function grab_all_nomor_ktp(string) {

    var str = string.split(", ");

    for(var i=0;i<str.length;i++) {
        var cek = new RegExp(/\d{3}-\d{2}-\d{4}/).test(string);
        if(cek == false) {
            return [];
        }
    }

    return str;

    // var cek = new RegExp(/\d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}/).test(string);
    //
    // if(cek == true) {
    //     var str = String(string.match(/\d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}/)).split(",");
    //     return str;
    // }
    // else {
    //     return [];
    // }


}

console.log("grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP")
console.log(grab_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp("please confirm your identity: XXX-XX-1422"))
  // return []


// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
function hide_all_nomor_ktp(string) {

    var str = string.split(", ");

    for(var i=0;i<str.length;i++) {
        var cek = new RegExp(/\d{3}-\d{2}-\d{4}/).test(string);
        if(cek == false) {
            return string;
        }
        else {
            str[i] = str[i].replace(str[i].match(/\d{3}-\d{2}/), "XXX-XX");
            //         // console.log(str[i]);
        }
    }

    return str;


    // var cek = new RegExp(/\d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}/).test(string);
    //
    // if(cek == true) {
    //     var str = String(string.match(/\d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}, \d{3}-\d{2}-\d{4}/)).split(", ");
    //
    //     for(var  i=0;i<str.length;i++) {
    //         str[i] = str[i].replace(str[i].match(/\d{3}-\d{2}/), "XXX-XX");
    //         // console.log(str[i]);
    //     }
    //
    //     return str;
    // }
    // else {
    //     // console.log(string);
    //     return string;
    // }

}

console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)


// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
function format_nomor(string) {
    var str = string.split(", ");
    var hasil=[];

    for(var i=0;i<str.length;i++) {
        var cek = new RegExp(/\d{9}/).test(string);
        if(cek == false) {
            return string;
        }
        else {
            // str[i] = str[i].replace(str[i].match(/\d{3}\d{2}\d{4}/),"");
            if(str[i].match(/\d{3}\d{2}\d{4}/)) {
                str[i] = str[i].slice(0,3) + "-" + str[i].slice(3,5) + "-" + str[i].slice(5,9);
            }
            else if(str[i].match(/\d{3}-\d{2}-\d{4}/)) {
                str[i] = str[i];
            }
            else {
                str[i] = str[i].slice(0,3) + "-" + str[i].slice(4,6) + "-" + str[i].slice(7,11);
                // str[i] = "a";
            }

            // console.log(str[i]);
        }
    }
    // console.log(str.join(", "));
    return str.join(", ");
}

console.log("format_nomor finds and reformat any nomor KTP in the string")
console.log(format_nomor("234601422, 350.80.0744, 013-60-8762") == "234-60-1422, 350-80-0744, 013-60-8762")

console.log("format_nomor does not alter a string without nomor KTP in it")
string = "please confirm your identity: 44211422"
console.log(format_nomor(string) == string)
