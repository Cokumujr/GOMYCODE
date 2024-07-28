-- Create the PRODUCT table
CREATE TABLE PRODUCT (
    Product_ID VARCHAR2(20) PRIMARY KEY,
    Product_Name VARCHAR2(50) NOT NULL,
    Category VARCHAR2(50) NOT NULL,
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
    Order_Date DATE DEFAULT CURRENT_DATE,
    Quantity NUMBER CHECK (Quantity > 0),
    Total_amount NUMBER CHECK(Total_amount > 0),
    FOREIGN KEY (Customer_ID) REFERENCES CUSTOMER(Customer_ID),
    FOREIGN KEY (Product_ID) REFERENCES PRODUCT(Product_ID)
);

-- Insert sample data into the tables
--first batch into product table
INSERT INTO PRODUCT (Product_ID, Product_Name, Category, Price) 
VALUES ('P01', 'SAMSUNG GALAXY S200', 'SMARTPHONE', 3299);

--second batch into product table
INSERT INTO PRODUCT (Product_ID, Product_Name, Category, Price) 
VALUES ('P02', 'ASUS NOTEBOOK', 'PC', 4599);

--first batch into customer table
INSERT INTO CUSTOMER VALUES ('CO1', 'ALI', 71321009);

--second batch into customer table
INSERT INTO CUSTOMER VALUES ('CO2', 'ASMA', 77345823);

--first batch into orders table
INSERT INTO ORDERS VALUES ('CO2', 'P01', '28/05/2020', '1', 3299);

--second batch into orders table
INSERT INTO ORDERS(Customer_ID,Product_ID, Quantity, Total_amount) VALUES ('CO1','PO2','2', 9198);