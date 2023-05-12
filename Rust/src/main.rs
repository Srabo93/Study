// Project 1: Interactive bill manager
//
// User stories:
// * L1: I want to add bills, including the name and amount owed.
// * L1: I want to view existing bills.
// * L2: I want to remove bills.
// * L3: I want to edit existing bills.
// * L3: I want to go back if I change my mind.
//
// Tips:
// * Use the loop keyword to create an interactive menu.
// * Each menu choice should be it's own function, so you can work on the
//   the functionality for that menu in isolation.
// * A vector is the easiest way to store the bills at level 1, but a
//   hashmap will be easier to work with at levels 2 and 3.
// * Create a function just for retrieving user input, and reuse it
//   throughout your program.
// * Create your program starting at level 1. Once finished, advance to the
//   next level.
//

use std::{collections::HashMap, io};

#[derive(Debug)]
struct Bill {
    name: String,
    amount: f64,
}

#[derive(Debug)]
struct Bills {
    list: HashMap<String, Bill>,
}
impl Bills {
    fn new() -> Self {
        Self {
            list: HashMap::new(),
        }
    }
    fn add_bill(&mut self, bill: Bill) {
        self.list.insert(bill.name.clone(), bill);
    }
    fn view_bill(&self) -> Vec<&Bill> {
        let mut bills = vec![];

        for bill in self.list.values() {
            bills.push(bill)
        }

        return bills;
    }
}

struct Menu;
impl Menu {
    fn show_menu() {
        println!("");
        println!("== Manage Bills ==");
        println!("1. Add bill");
        println!("2. View bills");
        println!("3. Remove bill");
        println!("4. Update bill");
        println!("5. Bill total");
        println!("");
        println!("Enter selection:");
    }
    fn add_bill_menu(bills: &mut Bills) {
        println!("Bill name:");
        let name = match get_input() {
            Some(input) => input,
            None => return,
        };

        let amount = match get_bill_amount() {
            Some(amount) => amount,
            None => return,
        };

        let bill = Bill { name, amount };
        bills.add_bill(bill);
        println!("Bill added")
    }
    fn view_bill_menu(bills: &Bills) {
        for bill in bills.view_bill() {
            println!("{:?}", bill);
        }
    }
}

fn get_bill_amount() -> Option<f64> {
    println!("Amount:");
    loop {
        let input = match get_input() {
            Some(input) => input,
            None => return None,
        };

        if &input == "" {
            return None;
        }

        let parsed_input: Result<f64, _> = input.parse();
        match parsed_input {
            Ok(amount) => return Some(amount),
            Err(_) => println!("Please enter a number"),
        }
    }
}
fn get_input() -> Option<String> {
    let mut buffer = String::new();
    while io::stdin().read_line(&mut buffer).is_err() {
        println!("Please enter your data again")
    }
    let input = buffer.trim().to_owned();
    if &input == "" {
        None
    } else {
        Some(input)
    }
}
fn main_menu() {
    let mut bills = Bills::new();

    loop {
        Menu::show_menu();

        let input = match get_input() {
            Some(input) => input,
            None => return,
        };

        match input.as_str() {
            "1" => Menu::add_bill_menu(&mut bills),
            "2" => Menu::view_bill_menu(&bills),
            _ => break,
        }
    }
}

fn main() {
    main_menu();
}
