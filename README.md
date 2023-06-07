# JS Framework

College: Noroff - Frondend developer
Date: 04.2022

![portofoli-ecom-js-framework](https://github.com/Gonlonge/ecom-store-react/assets/89197537/d2326edf-c925-4a58-8daf-0d7405ea7566)


## Brief
Using API

You are tasked with build out the following pages for an eCom store:

Homepage
Individual product page
Cart page
Checkout success page


## Built With

- React
- styled-components

## Designed With

- Adobe XD

## Project planning

- Trello Board

## User Stories
The client has specified the following requirements in the form of User Stories:

A user may view a list of Venues
A user may search for a specific Venue
A user may view a specific Venue page by id
A user may view a calendar with available dates for a Venue
A user with a stud.noroff.no email may register as a customer
A registered customer may create a booking at a Venue
A registered customer may view their upcoming bookings
A user with a stud.noroff.no email may register as a Venue manager
A registered Venue manager may create a Venue
A registered Venue manager may update a Venue they manage
A registered Venue manager may delete a Venue they manage
A registered Venue manager may view bookings for a Venue they manage
A registered user may login
A registered user may update their avatar
A registered user may logout

## The Homepage should have a list of all the products. There should be a look-ahead search bar that filters products when typing in a product name. Clicking on a product should take a user to an individual product page.

You pages should use a <Layout> component that contains a header and footer. The header should contain a nav bar as well as a Cart icon component that acts as a button as well as displays the current number of items in the cart.

The individual product page should display data for a single product. There should be an Add to cart button which, upon clicking, adds the product to the cart. The product page should display the title of the product, the description and the image. There should also be reviews listed for the product, if there are any. You should use the discountedPrice property to display the price of the product. If there is a difference between the discountedPrice and price properties then that means there is a discount for that product. Calculate what this discount is and display it on the page.

Clicking on the Cart icon will load the Cart page, which will list all of the products as well as a total. The Cart page will have a Checkout button. Clicking this Checkout button then goes to a Checkout success page.

The Checkout success page will display a message to the user notifying them that their order was successful. There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.

There will be a contact page which will contain a contact form with the following fields. There must be form validation:

Full name (Minimum number of characters is 3, required)
Subject (Minimum number of characters is 3, required)
Email (Must be a valid email address, required)
Body (Minimum number of characters is 3, required)
You will be using React Router to switch between pages.

Your design should be responsive. You are welcome to use a CSS Framework, however, you’re encouraged to design from scratch and use styled-components or CSS Modules.


## Pictures

- Free pictures
- Private pictures


## Netlify


