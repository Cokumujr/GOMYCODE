/* You decide to join a very large known gym chain. When you arrive, you go to the reception. You find the owner arguing with a member who wants to attend a session he has not registered for. Your turn finally arrives, the owner apologizes for letting you wait so long. He explains that his employee, in charge of registrations, made a mistake in choosing the member's session.

You are surprised that such a recognized gymnasium still uses the cards to manage its large number of clients. So you're talking to the owner to  fix this problem. Interested in your knowledge, he asks you to find him a solution, in return he will offer you a free 3-months inscription.  

The owner informs you that:

 he has several gymnasiums which are distinguished by their names, addresses and telephone number. 
Members can register at one of these gymnasiums, so they must provide the following information: unique identifier, last name, first name, address, date of birth and gender. 
Each session is characterized by a type of sport and a schedule and can accommodate a maximum of 20 members. 
The sessions are led by a maximum of two coaches who have a last name, first name, age and specialty.

Instructions

Given the above mentioned text, try to create the according Entity relationship model.*/

Implementation 

# Entity-Relationship Model

## Entities

### Gymnasium
- **Attributes**:
  - `GymnasiumID` (Primary Key)
  - `Name`
  - `Address`
  - `Phone Number`

### Member
- **Attributes**:
  - `MemberID` (Primary Key)
  - `Last Name`
  - `First Name`
  - `Address`
  - `Date of Birth`
  - `Gender`
  - **Foreign Key**: `GymnasiumID` (references `Gymnasium`)

### Session
- **Attributes**:
  - `SessionID` (Primary Key)
  - `Sport Type`
  - `Schedule`
  - `Max Members` (constant value of 20)

### Coach
- **Attributes**:
  - `CoachID` (Primary Key)
  - `Last Name`
  - `First Name`
  - `Age`
  - `Specialty`

### Registration
- **Attributes**:
  - `RegistrationID` (Primary Key)
  - **Foreign Key**: `MemberID` (references `Member`)
  - **Foreign Key**: `SessionID` (references `Session`)

### Session_Coach
- **Attributes**:
  - **Foreign Key**: `SessionID` (references `Session`)
  - **Foreign Key**: `CoachID` (references `Coach`)

## Relationships
- **Gymnasium - Member**: One-to-Many
- **Member - Registration - Session**: Many-to-Many
- **Session - Coach**: Many-to-Many
