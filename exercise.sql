-- create DATABASE
-- create table
-- CREATE DATABASE IF NOT EXISTS online_shop;
CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    --9.99
    description TEXT NOT NULL,
    amount_in_stock INT,
    --SMALLINT better
    image_path VARCHAR(100) NOT NULL
);
INSERT INTO products (
        product_name,
        price,
        description,
        amount_in_stock,
        image
    )
VALUES ("pen", 10, "black pen", 50, "/image/pen"),
    (
        "pencil",
        5.5,
        "white pencil",
        100,
        "/image/pencil"
    );
ALTER TABLE products
MODIFY COLUMN amount_in_stock INT CHECK (amount_in_stock > 0);