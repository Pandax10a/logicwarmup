let tickets_sold = 11;
let venue_capacity = 200;
let performer = "Oscar";
let is_sold_out = tickets_sold >= venue_capacity;

if (is_sold_out == true) {
    console.log("all sold out");
} else if (tickets_sold/venue_capacity >= 0.9 ); {
    console.log("almost sold out");
} else if (tickets_sold/venue_capacity >= 0.5); {
    console.log("tickets selling fast");
}
 else {
    console.log("tickets on sale now");
}