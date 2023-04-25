// Topic: Implementing functionality with the impl keyword
//
// Requirements:
// * Print the characteristics of a shipping box
// * Must include dimensions, weight, and color
//
// Notes:
// * Use a struct to encapsulate the box characteristics
// * Use an enum for the box color
// * Implement functionality on the box struct to create a new box
// * Implement functionality on the box struct to print the characteristics

#[derive(Debug)]
enum Color {
    Red,
    Blue,
    Green,
}

struct Dimensions {
    width: i32,
    height: i32,
    depth: i32,
}

struct ShippingBox {
    dimensions: Dimensions,
    weight: f32,
    color: Color,
}

impl ShippingBox {
    fn new(dimensions: Dimensions, weight: f32, color: Color) -> Self {
        Self {
            dimensions,
            weight,
            color,
        }
    }
    fn print_box(&self) {
        println!(
            "dimension: width:{} height:{} depth:{}",
            self.dimensions.width, self.dimensions.height, self.dimensions.depth
        );
        println!("weight: {:?}, color: {:?}", self.weight, self.color);
    }
}

fn main() {
    let small_box = Dimensions {
        width: 23,
        height: 100,
        depth: 32,
    };

    let shipping_box = ShippingBox::new(small_box, 44.3, Color::Blue);

    shipping_box.print_box();
}
