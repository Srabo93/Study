// Topic: Advanced match
//
// Requirements:
// * Print out a list of tickets and their information for an event
// * Tickets can be Backstage, Vip, and Standard
// * Backstage and Vip tickets include the ticket holder's name
// * All tickets include the price
//
// Notes:
// * Use an enum for the tickets with data associated with each variant
// * Create one of each ticket and place into a vector
// * Use a match expression while iterating the vector to print the ticket info

enum Ticket {
    Backstage(i32, String),
    Vip(i32, String),
    Standard(i32),
}
fn main() {
    let tickets = vec![
        Ticket::Backstage(39, String::from("Hugo Shmoss")),
        Ticket::Vip(349, String::from("GucciMan")),
        Ticket::Standard(30),
    ];

    for ticket in tickets {
        match ticket {
            Ticket::Backstage(price, name) => println!("name:{}, price: {}", name, price),
            Ticket::Standard(price) => println!("price: {}", price),
            Ticket::Vip(price, name) => println!("price: {}, name: {}", price, name),
        }
    }
}
