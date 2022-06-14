# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?
    - Your answer:
      > A hash in Ruby is a list or array like object that is indexed by a key/value pair. I've used hashes to assist with accessing data that I wanted associated with a named key. I recently stored a color pallette that had primary color as a key and an array of shades as a value.

    - Researched answer:
      > Hashes are also used in initializing objects, storing your instance variables in a new object. Hashes are created many ways, the most common way I create them is to assign a variable to a code block consisting of curled braces and key/value pairs, they keys typically are made up of symbols, the values can consist of almost any object.

2. What is a gem?
    - Your answer:
      > A gem in Ruby is a bundle of code modules that are available to be added to your software/application to implement additional functionality depending on the gem installed. In past projects I have used the colorize gem to allow me to change the color of my terminal text for a text based game, by just appending a dot then a color name to the end of the print statement. Gems are similar to npm or yarn packages in the javascript world.

    - Researched answer:
      > Gem's are libraries that are created by users and companies packaged into distributable modules that are available for anyone to use. The most common Ruby gem that I didn't realize was a Gem is Rails, which I have been recently using almost daily. Gem's can be downloaded via the Ruby Bundler by just typing ``` $ gem install <gem_name> ``` in the terminal.

3. What is Ruby on Rails?
    - Your answer:
      > Ruby on Rails is the combination of using ruby on the frontend and rails controlling the backend. I've been using the ruby language to build terminal based applications, then graduating into implementing a basic ruby on rails app with a postgresql database using the rails command line interface.

    - Researched answer:
      > Ruby on Rails is a model, view, controller or MVC built using Ruby, what that means is that it controls the way an application accesses data, displays, and routes web applications. The framework allows ruby programmers to run a ruby backend that can render webpages on the server, then display it to the user. The Rails framework includes ways to access/query databases, test code and build web apps quickly.

4. What is a relational database? Are there other kinds of databases?
    - Your answer:
      > A relational database is a way to store data/information in a format similar to spreadsheets, but with more advanced capabilities and queries. I have used a relational database called PostgreSQL to create databases of movies and family members, which I used to hone my skills adding, removing and updating records... reinforcing CRUD programming methods.
      I have used other databases such as MongoDB which is a no-sql database which is a non-relational database. I used it in the backend of an equipment rental application I was working on to store equipment information and reservation data.

    - Researched answer:
      > Relational databases use relational mapping to connect related data. The data is sorted with columns and rows, each record being one row of data. The columns contain each of the records attributes, (i.e. name, address, etc.)

5. What are primary keys? Why are they important?
    - Your answer:
      > Primary keys are used in databases to provide unique ids to each database record. They are important because they ensure all records in a database have a unique number/key to identify them. The keys can be incremental or even randomized using key generators or internal methods. I've used primary keys while working with databases, mainly to identify which record to delete or modify dynamically.

    - Researched answer:
      > In addition to primary keys being unique, they are the key to ensure relational databases work. They help facilitate the relations between different tables and each record. The keys are typically created using numbers, since sql databases process numbers faster than other character types.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
    > REST stands for Representation State Transfer, which is a way to control routes and assist with creating CRUD applications. While the CRUD method stands for Create, Read, Update and Delete, the verbs REST uses are GET (Read), POST (Create), PUT (Update), and DELETE (Delete),

2. JSON:
    > JSON is the acronym for JavaScript Object Notation. This is a format that can be used to pass and store information between clients and servers.

3. ERB:
    > ERB is Ruby's Embedded template engine, which helps display html using embedded ruby.

4. Params:
    > Params in Ruby are short for the term Parameters which is used when sending GET or POST requests. The params come from the action controller.

5. API:
    > API's or Application Program Interfaces are used to communicate with other software or services.  
