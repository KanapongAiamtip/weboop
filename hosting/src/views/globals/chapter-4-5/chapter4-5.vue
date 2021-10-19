<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 4-5 Class and Object
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Class And Object
        </h1>
        <h1 class="title is-4">
          Object-oriented programming consists of classes and objects. Each object has a variable to store data (variable) and its functionality or methods (method). Next, let's create classes and objects in Java.
        </h1>
       <p>
          <ui>
           <li>
            Create Classes
           </li>
           <li>
            Create and use Objects
           </li>
           <li>
            Constructor
           </li>
           <li>
            This Command
           </li>
           <li>
            Static Command
           </li>
          </ui>
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Create Classes
        </h1>
        <p>
          Classes define components. to be used to create an object A class consists of two members, variables and methods. Variables are used to store information. about objects and a method defines the functionality of an object. This is a form of class declaration in Java.
        </p><br>
        <img src="@/assets/ch4pic1.png" alt="pic" width="600" height="300">
        <p>
        <br>
        To create a class use the class statement followed by the name of the class you will create. Class names should begin with a capital letter and have the same naming convention as variables. Within a class's statement blocks, there are members that are both variables and methods. or either Let's look at an example of creating a class in Java.
      </p><br>
        <img src="@/assets/ch4pic2.png" alt="pic" width="600" height="300">
        <p><br>In the example above We create a class called Person and in this class three variables are name as a String variable, age is an integer variable for age, and speed is a float variable to store speed. The three method members are the setSpeed() method for defining the new speed, the getSpeed() method for getting the speed value, and the run() method for the object to run. In the example, it shows the message
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Create and use Objects
        </h1>
        <p>
          After we have created the class Next up for the class to create the object, we'll use the Person class to create the object for the next example.
        </p><br>
        <img src="@/assets/ch4pic3.png" alt="pic" width="700" height="300">
        <p><br>
          In this example, we created an object from the Person class with the command
      </p><br>
        <img src="@/assets/ch4pic4.png" alt="pic" width="600" height="300">
        <p>
          <br>Where p1 and p2 are object type variables of the Person class, they are independent of each other. Each object has its own variables and methods. Next, we assign values to both objects with the command
        </p><br>
        <img src="@/assets/ch4pic5.png" alt="pic" width="600" height="300">
        <p><br>To access a member of an object, a dot (.) is used, followed by the name of the variable to be accessed. We have configured various to both objects In the example we didn't assign speed to the p2 object, so it uses the default we've declared in the class 4.0.
          </p><br>
        <p>
          Next, we display the data for each object.
        </p><br>
        <img src="@/assets/ch4pic6.png" alt="pic" width="600" height="300">
        <p><br>
          From the impressions in the example, it's straightforward. We've shown the name, age and speed of each object on the screen. and we call the method with We call the method In the example of the p2 object, we use run() to instruct the object to run. p2.getSpeed() to get the speed. We also changed the speed of the p2 object and used the run() method again to see its speed.
        </p>
        <p><br>
          And below is the result of the program<br><br>
          p1 is Mateo<br>
          He is 20 year old.<br>
          Mateo has speed 3.5 feet/s.<br>
          Mateo is running at speed 3.5 feet/s.<br>
          <br>
          p2 is Danny<br>
          He is 25 year old.<br>
          Danny has speed 4.0 feet/s.<br>
          Danny is running at speed 4.0 feet/s.<br>
          Danny is running at speed 5.0 feet/s.<br>
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Constructor
        </h1>
        <p>
          Constructor A constructor is a special method that runs when an object is created. We often use constructors to initialize objects. An example of creating and using a constructor in Java
        </p><br>
        <img src="@/assets/ch4pic7.png" alt="pic" width="600" height="300">
        <p>
        <br>
        In our example, we've also created a constructor for the Person class. The constructor must always have the same name as the class and the access level set to public. We can create multiple constructors that we call Overloading. The constructor is the same as the Overloading Method.
      </p><br>
        <img src="@/assets/ch4pic8.png" alt="pic" width="600" height="300">
        <p><br>You can create objects to assign values to objects immediately when creating the constructor. by passing arguments into the constructor and you can choose which one to use. Because you've built an Overloading Constructor for every type.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          This Command and Static Command
        </h1>
        <p>
            <ui>
              <li>
                this is a command to refer to members of the current object. For the example in the constructor, we use this.name to refer to the object's name, while the name is for the method. If the scope of the program you are using doesn't have duplicate variable names, then you don't need to use this as in the getSpeed() method. This is also used for Inheritance.
              </li>
              <li>
                static is a command used to define variables or methods. It is publicly accessible if declared public and if applied to an object will cause all objects to refer to the same variable. An example of using the static command
              </li>
              </ui>
        </p><br>
        <img src="@/assets/ch4pic9.png" alt="pic" width="600" height="300">
        <p>
        <br>
        In the example we have changed the age variable in the Person class to static, so every object created by this class is static. will give this variable together
        And we've created a StaticMember class with all static members. Its members can be accessed anywhere by class prefixes like StaticMember.NAME_PREFIX and StaticMember.displayName() that we've used in the example.
      </p><br>
      <p>
      Name: Mateo<br>
      Age: 25<br>
      Mr. Mateo <br>
      <br>
      Name: Danny<br>
      Age: 25<br>
      Mr. Danny<br>
      </p><br>
      <p>
        and this is the result of the program You say the ages of the two objects are equal to because it received the latest changes from the p2.age=25 command.
        </p>
      </div>
    </div>
  </section>
  <breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./chapter4-5.ts"></script>
