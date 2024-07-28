# Database Design for Hotel Management System

## Entities and Attributes

### Hotel
- **hotelId**: Primary Key
- **hotelName**

### Type
- **typeId**: Primary Key
- **typeName**
- **hotelId**: Foreign Key (References `hotelId` in `Hotel`)

### Room
- **roomId**: Primary Key
- **floor**
- **hotelId**: Foreign Key (References `hotelId` in `Hotel`)

### Category
- **categoryId**: Primary Key
- **categoryName**
- **price**
- **bedsNumbers**
- **hotelId**: Foreign Key (References `hotelId` in `Hotel`)

### Employee
- **employeeId**: Primary Key
- **employeeName**
- **employeeSpeciality**
- **hotelId**: Foreign Key (References `hotelId` in `Hotel`)
- **leadId**: Foreign Key (References `employeeId` in the same `Employee` table for leads relationship)

## Relationships

1. **Hotel - Type** (One-to-Many)
   - A `Hotel` can have multiple `Types`.
   - Each `Type` belongs to one `Hotel`.
   - Foreign Key in `Type`: `hotelId`

2. **Hotel - Room** (One-to-Many)
   - A `Hotel` can have multiple `Rooms`.
   - Each `Room` belongs to one `Hotel`.
   - Foreign Key in `Room`: `hotelId`

3. **Hotel - Category** (One-to-Many)
   - A `Hotel` can have multiple `Categories`.
   - Each `Category` belongs to one `Hotel`.
   - Foreign Key in `Category`: `hotelId`

4. **Hotel - Employee** (One-to-Many)
   - A `Hotel` can have multiple `Employees`.
   - Each `Employee` works for one `Hotel`.
   - Foreign Key in `Employee`: `hotelId`

5. **Employee - Employee (Leads)** (One-to-Many Recursive)
   - An `Employee` can lead multiple other `Employees`.
   - Each `Employee` can have one leader.
   - Foreign Key in `Employee`: `leadId` (References `employeeId`)

## Relational Schema

