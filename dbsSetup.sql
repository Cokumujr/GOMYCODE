-- Create the PRODUCT table
CREATE TABLE PRODUCT (
    Product_ID VARCHAR2(20) PRIMARY KEY,
    Product_Name VARCHAR2(50) NOT NULL,
    Price NUMBER CHECK(PRICE > 0)
);


-- Create the CUSTOMER table
CREATE TABLE CUSTOMER (
    Customer_ID VARCHAR2(20)PRIMARY KEY,
    Customer_Name VARCHAR2(20) NOT NULL,
    Customer_Tel NUMBER
);


-- Create the ORDERS table
CREATE TABLE ORDERS (
    Customer_ID VARCHAR2(20) FOREIGN KEY,
    Product_ID VARCHAR2(20) FOREIGN KEY,
    Quantity NUMBER,
    FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID),
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID)
);




-- Add Category column to PRODUCT table
ALTER TABLE PRODUCT
ADD Category VARCHAR2(20);

-- Add OrderDate column to ORDERS table with default value
ALTER TABLE ORDERS
ADD OrderDate DATE DEFAULT SYSDATE;
