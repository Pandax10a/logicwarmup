let tickets_sold = 150;
let venue_capacity = 200;
let performer = "oscar";
let is_sold_out = tickets_sold >= venue_capacity;
let is_member = true;
let user_points = 9;
let user_name = "alex";

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