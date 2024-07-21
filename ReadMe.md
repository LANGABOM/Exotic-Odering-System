# Exotic Ordering System

This is a system that simplifies taking orders from customers and it must automatically show the chefs which orders are pending. Once the chefs are done with the order, they can change the state of the order to 'ready.' The system will also be able to calculate the orders and give estimated totals.

## Table of Contents

1. [Introduction](#introduction)
2. [Problem Statement](#problem-statement)
3. [Requirements](#requirements)
4. [Features](#features)
5. [Dev Tools](#Dev_Tools)
6. [Installation](#installation)
7. [User Stories](#user-stories)

## Introduction

This documentation is intended for developers and users of the system to give them a guide on how to use the platform and also to contribute to it. The Exotic Ordering System is meant to be used by entrepreneurs who are selling products regularly. It's a system used to track orders, stock, products, and sales of products. The system should help in the efficiency and productivity of the business.

## Problem Statement

As an entrepreneur who sells food as a vendor at events, I always face challenges in taking orders from customers and managing those orders in time. Sometimes I misplace the orders or confuse them. The chef always complains that I don't communicate the orders properly, leading to confusion. The chefs also sometimes put the wrong ingredients in the order.

Another challenge is that managing revenues and sales is difficult. Sometimes I don't see the profit or commissions made after selling at the end of the event. It's very difficult to identify key areas where I can improve financially.

I also need a visual representation of profit margins and commissions over different periods.

## Requirements

This section will break down the project and provide business solutions to the problem statement.

1. [Requirements Gathering](#requirements-gathering)
2. [User Stories](#user-stories)
3. [Use Case Diagrams](#use-case-diagrams)
4. [Models/Tables/Class Diagrams](#models)
5. [Activity Diagrams](#activity-diagrams)

### Requirements Gathering

###### Purpose of the Application
- This application is meant to be used for taking orders from customers and it must send the request to the kitchen. The chef should approve the order and once they are done, they must update the system to indicate that the food is ready.

###### Target Audience
- Food Vendors

###### Features and Functionality
- User Registration (Authentication)
- View Menu List
- Order List
- Change Status of the Order
- View Inventory Details

## User Stories

#### User Registration and Authentication
1. **As a user, I want to be able to create an account so that I can log in to the system and use its features.**
2. **As a user, I want to log in and log out securely so that my account and data are protected.**

#### Viewing and Managing Menu
3. **As a user, I want to view the list of available menu items so that I can place an order.**
4. **As an admin, I want to add, update, or remove menu items so that the menu stays current.**

#### Placing and Managing Orders
5. **As a customer, I want to place an order for one or more items from the menu so that I can get the food I want.**
6. **As a customer, I want to receive a confirmation of my order so that I know it has been received.**
7. **As a chef, I want to view all pending orders so that I know what needs to be prepared.**
8. **As a chef, I want to update the status of an order to 'ready' once it is prepared so that the customer is notified.**

#### Inventory Management
9. **As an admin, I want to view the inventory details so that I can keep track of stock levels.**
10. **As an admin, I want to update inventory levels when new stock is received or used so that the inventory data is accurate.**

#### Order Tracking and Notification
11. **As a user, I want to receive notifications about the status of my order so that I know when it is ready.**
12. **As a chef, I want to receive notifications about new orders so that I can start preparing them promptly.**

#### Financial Management
13. **As an admin, I want to calculate the total amount of all orders so that I can track sales revenue.**
14. **As an admin, I want to view reports on profits and commissions over different periods so that I can analyze the financial performance.**

#### User Interface and Experience
15. **As a user, I want an intuitive and user-friendly interface so that I can navigate the system easily.**
16. **As an admin, I want a dashboard that provides a visual representation of key metrics (like order status, inventory levels, and financial performance) so that I can quickly assess the state of the business.**

## Features

- User Registration and Authentication
- Viewing and Managing Menu
- Placing and Managing Orders
- Inventory Management
- Order Tracking and Notification
- Financial Management
- User Interface and Experience

## Development Tools
#### Backend Tools

- Node js
- Typescript
- Nodemoon
- Prisma
- PrismaClient
- Prisma Studio
- postgress
- Docker

 ### Frontend Tools
 - React Native
 - FireBase
   

## Installation

Instructions on how to install and set up your project.

```bash
# Clone this repository
git clone https://github.com/your_username/project_name.git

# Go into the repository
cd project_name

# Install dependencies
npm install
