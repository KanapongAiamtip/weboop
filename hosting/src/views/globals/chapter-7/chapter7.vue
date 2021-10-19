<!--template src="./chapter7.html"></template-->
<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 7 Polymorphism
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          What is Polymorphism ?
        </h1>
       <p>
        Polymorphism is that an object can take many forms. Which is derived from the inheritance of the super class and it retains the state and properties of the super class. For example, the people of the world will have athletes, singers, musicians, which is to say that there are many career forms of a person. We can use the word person to refer to people in different professions, which is the concept of polymorphism in programming. which it means is to have many forms
        </p>
        <p><br>
          In object-oriented programming, polymorphism is the process of creating an object as an object created from the same super class. In a sub class, methods are reassigned to match their purpose. That class or override method. After that, we can use super class for declaring object variables (class instances) that create objects from sub classes.
        </p><br>
        Here is an example of how to use polymorphism property in Java. We will have the Person class as a super class and create another class to inherit from it.
        <br>
           <img src="@/assets/ch7pic1.png" alt="pic" width="700" height="300">
          <p><br>
            In that example we have the class Person which is a super class. We have created two delivered classes, Sheriff and Police, that are classes that inherit variable and method properties from the Person class.<br><br>
            In both delivered classes, we override the introduce method to provide additional information. And next is the implementation of polymorphism properties in the code.
          </p><br>
          <img src="@/assets/ch7pic2.png" alt="pic" width="600" height="300">
          <p><br>
            Currently, we have used the Person class to declare three variables (instances), and we use instances of this class to create objects from the classes Person, Sheriff, and Police. Variables created from the Person class can take many forms. In this example, there are 3 types.
          </p><br>
          <img src="@/assets/ch7pic3.png" alt="pic" width="600" height="300">
          <p><br>
            Next is the invocation of the introduce method for each object that is created from a different class. For the delivered class, the introduce method is override to provide additional information.<br><br>
            The advantage of polymorphism is that objects that inherit from the same class can be handled by using their super class in object declarations.
          </p>
          <p><br>
            And this is the result of the program<br><br>
            My name is Mark, I was born in 1980.<br>
            My name is Mateo, I was born in 1981.<br>
            I'm a sheriff and work in California.<br>
            My name is Danny, I was born in 1986.<br>
            I'm a police and work in NYC.<br>
          </p>
          <p><br>
            Warning: Using instances created from a super class can only be applied to variables or methods that exist in the super class or that have been overridden. If you create a new method or variable in a delivered class, you can't use it through an instance of the super class. We'll talk about this in interfaces and abstract classes.<br><br>
            To give you a better understanding of polymorphism, let's look at an example of a propagation of arrays and functions by passing them as function parameters.
          </p><br>
          <img src="@/assets/ch7pic4.png" alt="pic" width="700" height="300">
          <p><br>
            In our example, we have a Shape class to define shapes. This class has a draw() method to draw shapes in the class. Next, we created two more classes, Rectangle and Triangle, that inherited from the Shape class and override the draw() method to conform to both classes.
          </p><br>
          <img src="@/assets/ch7pic5.png" alt="pic" width="700" height="300">
          <p><br>
            At the start of the program we create an ArrayList using the Shape class as an instance of the object, so we can use it to create an object that inherits from this class. That is, we create an object from the Rectangle and Triangle classes and store them in an ArrayList. Thus, the shapes variable can have many forms of objects that inherit from the Shape class. This is the concept of Polymorphism.
          </p><br>
          <img src="@/assets/ch7pic6.png" alt="pic" width="700" height="300">
          <p><br>
            In addition, the drawShape() method is a method for drawing shapes with Shape parameters, so we don't care if the incoming object is a Rectangle or Triangle object, we only care about what we want. To do this is to invoke the draw() method, where the Polymorphism mechanism automatically executes the object's method.
          </p>
          <p><br>
            Draw rectangle<br>
            Perform draw from base class<br>
            Draw triangle<br>
            Perform draw from base class<br>
            Draw circle<br>
            Perform draw from base class
            </p>
            <p><br>
              This is the result of a program running Polymorphism with arrays and methods.
            </p>
      </div>
    </div>
  </section>

  <breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./chapter7.ts"></script>
