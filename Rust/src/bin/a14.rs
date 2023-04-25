// Topic: Strings
//
// Requirements:
// * Print out the name and favorite colors of people aged 10 and under
//
// Notes:
// * Use a struct for a persons age, name, and favorite color
// * The color and name should be stored as a String
// * Create and store at least 3 people in a vector
// * Iterate through the vector using a for..in loop
// * Use an if expression to determine which person's info should be printed
// * The name and colors should be printed using a function

struct Person {
    age: i32,
    name: String,
    favorite_color: String,
}

fn main() {
    let persons = vec![
        Person {
            age: 1,
            name: String::from("bobo"),
            favorite_color: String::from("red"),
        },
        Person {
            age: 10,
            name: String::from("dodo"),
            favorite_color: String::from("blue"),
        },
        Person {
            age: 23,
            name: String::from("ddudu"),
            favorite_color: String::from("green"),
        },
    ];

    for person in persons {
        if person.age <= 10 {
            println!("{},{},{}", person.name, person.favorite_color, person.age)
        } else {
            println!("rest stuff");
        }
    }
}
