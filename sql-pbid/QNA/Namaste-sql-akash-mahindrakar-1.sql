-- Creating a new table with variable type and constraint
-- CREATE TABLE products(
-- 	product_id int8 PRIMARY KEY,
-- 	product_cat varchar(50) NOT NULL,
-- 	product_price int
-- );

--Insert Data in to table
-- DELETE FROM products
-- INSERT INTO products(product_id, product_cat, product_price)
-- VALUES
-- (1, 'Product_A', 50),
-- (2,'Product_B', 150),
-- (3,'Product_C',550),
-- (4,'Product_D', 300),
-- (5,'Product_E', 75),
-- (6,'Product_F', 620),
-- (7,'Product_G', 420),
-- (8,'Product_H', 230),
-- (9,'Product_I', 90),
-- (10,'Product_J', 510);

-- SELECT * FROM products;

-- ALTER TABLE products 
-- RENAME product_cat TO product_name;
-- SELECT * FROM products;
SELECT * FROM products;
WITH cte AS(
	SELECT *, 
	CASE
		WHEN product_price < 100 THEN 'Low Price'
		WHEN product_price >=100 AND product_price <=500 THEN 'Medium Price'
		ELSE 'High Price'
	END AS category
	FROM products
)
-- SELECT * FROM cte;

SELECT category, COUNT(*) AS no_of_products
FROM cte 
GROUP BY category
ORDER BY no_of_products;

