\c recipes_dev

INSERT INTO 
recipes(name, photo, type, cuisine,  is_vegan, difficulty, ingredients, description)
VALUES
('Peanut butter & jelly sandwich','https://images.unsplash.com/photo-1557275357-072087771588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80','Snack', 'American', TRUE, 'easy','peanut butter, jelly, bread', 'americas favorite snack'),
('Chorizo tacos','https://unsplash.com/photos/meQnwalVPyc','Lunch','Mexican', FALSE, 'moderate','Chorizo sausage link(casing removed and meat crumbled), chipole peppers, corn tortillas, chopped onions, chopped cilantro','These chorizo tacos use just 5 ingredients and taste amazing.'),
('Lumpia ','https://unsplash.com/photos/UkudQyyeovs','Snack', 'Filipino',  FALSE, 'moderate','vegetable oil, lumpia wrappers, ground pork, chopped onions, crushed garlic, minced carrots, chopped green onions, sliced cabbage, cilantro, salt, black pepper, garlic powder, soy sauce,','Lumpia are fried spring rolls that are found in Filipino and Indonesian cuisines'),
('Apple Strawberry Banana Smoothie','https://unsplash.com/photos/09v10GvEPr8', 'breakfast','N/A',  TRUE, 'easy','Almond Milk, Apple, Strawberry, Bananas, Greek Yogurt','Start your day off right with this quick and nutritious apple smoothie, ready in minutes. This breakfast smoothie has a nice combination of fruit and is slightly sweet, creamy, and satisfying.'),
('Lasagna','https://unsplash.com/photos/fF2o9WpkGhU','dinner', 'Italian',  FALSE, 'moderate', 'Sweet Italian Sausage, Lean Ground Beef, Minced Onions, Crushed Garlic, Canned Crushed Tomatoes, Canned Tomato Sauce, Canned Tomato Paste, Water, White Sugar, Fresh Parsley, Dried Basil, Italian Season, Salt, Black Pepper, Fennel Seeds, Lasagna Noodles, Egg, Ricotta Cheese, Mozzarella Cheese, Parmesan Cheese','This lasagna recipe takes a little work, but it is so satisfying and filling that its worth it!'),
('Chicken Noodle Soup', 'https://unsplash.com/photos/vwnRw_r4kh4',  'Soup', 'American',  FALSE, 'Easy', 'Butter, Onion, Celery, Carrot, Can Chicken Broth, Can Vegetable Broth, Cooked Chicken, Egg Noodles, Dried Basil, Dried Oregano, Salt, Pepper','A chicken noodle soup recipe that is a very easy, very good substitute for when you dont have time to make your soup totally from scratch'),
('Fried Oreos', 'https://unsplash.com/photos/fcrx_cPicIs','Dessert','American', TRUE,'Easy', 'Oreos, Pancake mix, Water, Powdered Sugar','Deep-fried Oreos are a carnival favorite. Oreos get dipped into pancake batter and fried — yummy!'),
('Roasted Potatoes','https://unsplash.com/photos/37oYY2wHu0Q', 'Side Dish', 'N/A',  TRUE, 'Easy','Gold Potatoes(Quartered), Olive Oil, Salt, Pepper, Rosemary','Roasted potatoes at their best — plain and simple!'),
('Buttermilk Pancakes','https://unsplash.com/photos/TkzdkVn1AyA','Breakfast','American',  TRUE,'Moderate', 'Flour, Baking soda, Baking Powder, Salt, Sugar, Melted Butter, Eggs, Buttermillk', 'A very light and fluffy pancake recipe that requires fresh buttermilk, but it is the best I ever made!'),
('Risotto','https://unsplash.com/photos/C--7A7yqx9U','Side Dish','Italian',  FALSE, 'Challenging', 'Arborio Rice, Butter, Shallots, Garlic, White Wine, Chicken Stock, Salt, Parmesan Cheese, Parsley','This Parmesan risotto is a wonderful side dish to pair with Italian seasoned meatloaf, add some steamed green beans to round out a weeknight meal.'),
('Mint Julep','https://unsplash.com/photos/3j2MJ3eOLcs','Beverage','Mediterranean',  TRUE, 'Moderate', 'Bourbon, Simple Syrup, Mint','Whether you’re hosting a Kentucky Derby party or you’re just craving a refreshing bourbon cocktail, this mint julep recipe is sure to hit the spot.'),
('Pho', 'https://unsplash.com/photos/fixhu0dngTQ', 'Soup','Vietenamese', FALSE, 'Challenging','Beef Bones, Onion, Ginger, Star Anise, Cloves, Cinnamon Sticks, Black Cardamom Pods, Fennel Seeds, Coriander Seeds, Fish Sauce, Water, Dried Rice Noodles, Thinly Sliced Beef Sirloin, Fresh Cilantro, Green Onions, Thai Basil, Bean Sprouts, Lime, Palm Sugar, Salt','Vietnamese pho soup is all about the broth! Beef bones, fish sauce, star anise, and ginger simmer for at least 6 hours, creating a complex, aromatic broth that may not be quick, but it is certainly delicious.'),
('Jerk Chicken', 'https://unsplash.com/photos/oUij9IifyaA','Dinner', 'Caribbean', FALSE, 'Moderate', 'Chicken, Jerk Seasoning, Garlic Powder, Onion Powder, Thyme, Green Onion, Garlic, Scotch Bonnets, Ginger, Soy Sauce, Brown Sugar, Allspice, Cinnamon, Nutmeg, Water','This well-seasoned grilled chicken with Jamaican jerk marinade has the perfect balance of heat and sweetness.'),
('Baba Ganoush','https://unsplash.com/photos/SnsV0T5dWOk','Snack','Middle Eastern', TRUE, 'Moderate','Eggplant, Lemon Juice, Tahini, Garlic, Cumin, Smoked Paprika, Extra Virgin Olive Oil, Chopped Parsley','This dip is creamy, delicious, and tastes great on bread, naan, or with pita! '),
('Pina Colada','https://unsplash.com/photos/lD1Yqc0b3kc', 'Beverage','Latin America',  TRUE, 'Easy','Pineapple Juice, Cream of Coconut, Light Rum, Ice','The pina colada is a blended drink that originated in Puerto Rico. The mixture of pineapple, coconut, and rum is a taste of the tropics.'),
('Chocolate Croissants','https://unsplash.com/photos/Qz2oUAhXMiY','Dessert','French',  FALSE, 'Challenging','Warm water, active dry yeast, Sugar, Bread Flour, Salt, Butter, Egg, Sea Salt','Also known as Pain au Chocolat this french pastry may take some time but, there’s absolutely nothing on earth better than a warm chocolate croissant that was proudly handmade in your own kitchen.');

INSERT INTO 
    reviews (recipes_id, reviewer, title, content, rating )
VALUES
('1','George','Why is there a recipe for a peanut butter sandwich','Best sandwich ', 3),
('2','Suzette', 'Worlds Blandest Tacos','There tacos were a gross muddy mess, and a waste of good chorizo', 2 ),
('2', 'Courtney', 'Love This Recipe','My go-to taco recipe, I add avocado and sour cream, yum!', 4),
('3', 'Marasol', 'Great snack for Parties', 'Not the traditional, but this recipe is delicious and easy to make', 4),
('3', 'Jon', 'Rolls Fall apart in fryer', 'Not sure if I am making this right', 1),
('5', 'Alicia', 'Best Lasagna Ever', 'I made this recipe 5 times already, my family loves it.', 5),
('6','Roger', 'Soup was too salty','added 2 extra cups of water and still way too salty', 2),
('9', 'Kyle', 'Delicious Pancakes','made this recipe this morning for my family and it was a hit', 5),
('10', 'Sergi', 'Soggy Rice', 'Followed this recipe and ended up with rice soup', 1),
('13', 'Beatrice', 'Love this dip', 'Love baba ganoush, and this recipe did not disappoint', 4),
('12','Chloe','Not Authentic', 'The had a nice Flavor but was not Authentic', 3 ),
('11','Hugo','Absolutely Worth it', 'This recipe was time consuming, but worth every second', 5);

INSERT INTO
    nutrition(recipes_id, calories, fat, protein, carbohydrates, sugar)
    VALUES
    ('1', 378, 18, 12, 46, 18),
    ('2', 360, 26, 18, 14, 1.4),
    ('3', 561, 3, 6, 13, 80), 
    ('4', 550, 8, 25, 25, 1),
    ('5', 602, 21, 44, 35, 9),
    ('6', 168, 6, 10, 24, 4),
    ('7', 123, 7.8, 1.5, 12, 7),
    ('8', 180, 8.6, 2.7, 23, 4),
    ('9', 250, 8, 8, 37, 7),
    ('10', 249, 8, 5, 35, 0),
    ('11', 199, 0, 0, 6.6, 6.3),
    ('12', 509, 11, 35, 66, 9),
    ('13', 253, 16, 17, 11, 6),
    ('14', 246, 22.8, 3.3, 11.9, 5.6),
    ('15', 656, 7.1, 1.6, 85, 84),
    ('16', 297, 16, 5.7, 33, 12);



