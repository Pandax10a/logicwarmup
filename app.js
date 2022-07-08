let tickets_sold = 200;
let venue_capacity = 200000;
let performer = "oscar";
let is_sold_out = tickets_sold > (venue_capacity -1);
let is_member = true;
let user_points = 9;
let user_name = "alex";
let is_repeat_show = false;

let special_performer_1 = "someone";
let special_performer_2 = "Alex Bymoen";
let special_performer_3 = "somewhat";
let special_performer_4 = "1972 Miami dolphins";
let special_performer_5 = "somehow";

if (is_sold_out === true) {
    console.log("all sold out");
} else {
    console.log("Tickets still available");
}

if (( tickets_sold/venue_capacity >= 0.9) && (is_sold_out === false)) {
    console.log("almost sold out")
} else if ((tickets_sold/venue_capacity >= 0.5) && (is_sold_out === false)) {
    console.log("tickets selling fast");
} else if (is_sold_out === false){
    console.log("tickets on sale now");
}

if (tickets_sold > venue_capacity) {
    console.log("system error 1");
} else if ((tickets_sold === venue_capacity) && (is_sold_out === false)) {
    console.log("sytems error 2")
} else if ((performer === "Alex Bymoen") && (is_sold_out === false)) {
    console.log("system error 3");
} else {
    console.log("all good");
}

if (((tickets_sold/venue_capacity >= 0.9) || (venue_capacity >= 60000)) && ((tickets_sold/venue_capacity >= 0.7) || (venue_capacity >= 90000))) {
    console.log("special case");    
} else if ((is_sold_out === true) && (is_repeat_show === true)) {
    console.log("special case 2");
} else {
    console.log("normal case");
}

if ((special_performer_1 === "Alex Bymoen") || (special_performer_1 === "Shrek") || (special_performer_1 ==="1972 Miami dolphins")) {
    console.log("Lucky You!");
} else if ((special_performer_2 === "Alex Bymoen") || (special_performer_2 === "Shrek") || (special_performer_2 ==="1972 Miami dolphins")) {
    console.log("Lucky You!");
} else if ((special_performer_3 === "Alex Bymoen") || (special_performer_3 === "Shrek") || (special_performer_3 ==="1972 Miami dolphins")) {
    console.log("Lucky You!");
} else if ((special_performer_4 === "Alex Bymoen") || (special_performer_4 === "Shrek") || (special_performer_4 ==="1972 Miami dolphins")) {
    console.log("Lucky You!");
} else if ((special_performer_5 === "Alex Bymoen") || (special_performer_5 === "Shrek") || (special_performer_5 ==="1972 Miami dolphins")) {
    console.log("Lucky You!");
} else {
    console.log("too bad")
}