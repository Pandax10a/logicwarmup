let tickets_sold = 200;
let venue_capacity = 200;
let performer = "Oscar";
let is_sold_out = tickets_sold >= venue_capacity;
let is_member = true;
let user_points = 9;
let user_name = "alex";

if ((tickets_sold > venue_capacity) && (tickets_sold/tickets_sold == 1)) {
    console.log("system error");
} else if (is_sold_out === true) {
    console.log("all sold out");
}
 else if (tickets_sold/venue_capacity >= 0.9 ) {
    console.log("almost sold out");
} else if (tickets_sold/venue_capacity >= 0.5) {
    console.log("tickets selling fast");
} else {
    console.log("tickets on sale now");
}

if ((is_member === true) && (user_points >= 90)) {
    console.log("member and over 90");
} else if ((is_member === false) || (user_points < 10)) {
    console.log("either not member or less than 10 in value");
}
 else {
    console.log("could be not a member or 90");
}

if (user_name === "alex") {
    console.log("you're alex");
} else {
    console.log("you're not alex");
}