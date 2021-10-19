<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 6 Inheritance
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          What is Inheritance?
        </h1>
       <p>
        Inheritance is a property in object-oriented programming called inheritance property. A class can inherit its members from a super class to a subclass (delivered class). By inheritance in Java, all members are inherited to subclasses. Excludes a member with access level private and its constructor.<br><br>
        in class inheritance In addition to receiving members from the parent class. It is also possible to add members and its own methods. make it more capable This is the inheritance pattern of classes in Java.
        </p><br>
        <img src="@/assets/ch6pic1.png" alt="pic" width="600" height="300">
        <p><br>
          In inheritance the extends directive is used, where SuperClass is the parent class to inherit to. DeliveredClass
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Create Inheritance classes
        </h1>
        <p>
          Now let's look at an example of class inheritance in Java. We will create a new version of the Person class.
        </p><br>
        <img src="@/assets/ch6pic2.png" alt="pic" width="600" height="300">
        <p><br>In our example, our Person class, we'll use it to inherit properties to other classes. This means that this class will be a super class.
        </p><br>
        <img src="@/assets/ch6pic3.png" alt="pic" width="600" height="300">
        <p><br>
          Next we created a delivered class as follows:
          The Artist class is a class inherited from the Person class, meaning that all Person members except the constructor and private members are not inherited. And we've added variables to this class, genre is the variable for the music genre to play, and the playMusic() method to play the music.<br><br>
          Next is the Athlete class. Inheritance is the same as the Artist class because it inherits from the same class. And we've added variables to this class: sport is the variable for the sport to play and the playSport() method for that sport. <br><br>We also create constructors for both classes, because constructors do not inherit. We put all the code words together and create an object.
        </p><br>
        <img src="@/assets/ch6pic4.png" alt="pic" width="600" height="300">
        <p><br>
          In the example we created objects from both classes. You notice that in both the delivered class constructors we use this.name is a variable that inherits from the super class, and in the Main method the art.introduce() and ath directives. introduce() is a method that is also inherited. Note that we don't have to declare it when creating the delivered class, which is another reason why we can reuse the same code. without having to rewrite all
        </p><br>
        <p>
          And this is the result of running the program
        </p><br>
        <p>
          My name is Marcus<br>
          Marcus is playing Trip Hop music.<br>
          <br>
          My name is Danny<br>
          Danny is playing Football.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Overriding Super Class
        </h1>
        <p>
          In inheritance from a super class to a delivered class, a delivered class can also override a method's functionality in a super class by override a method in Java that precedes the desired method with @Override.
        </p><br>
        <img src="@/assets/ch6pic5.png" alt="pic" width="600" height="300">
        <p><br>
          The example is to override the introduce() method from the super class to provide a different greeting for each class. Now you can copy both casts in place of the original without override and run the viewer again.
        </p>
        <p><br>
          My name is Marcus<br>
          I'm an artist.<br>
          Marcus is playing Trip Hop music.<br>
          <br>
          My name is Danny<br>
          I'm an athlete.<br>
          Danny is playing Football<br>
        </p>
        <p><br>
          which will result in the above working result. Recommendations are different for each class. This is caused by Override the introduce() method.
        </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Super Command
        </h1>
        <p>
          In addition to this command, which is a command to access the members of the current class. You can also access the members or constructors of a super class by using the super statement. It is used with an override class or method. Let's look at an example of a super statement in Java.
        </p><br>
        <img src="@/assets/ch6pic6.png" alt="pic" width="600" height="300">
        <p>
        <br>
        from above example We have used the super statement in the constructor of the subclass in the super(name, age) statement because it behaves like the parent class. We don't need to rewrite. Next, we've used the introduce super.introduce() method to call the greeting from the super class as well. When you run the above class, it has the same result as the example in the previous override.
        </p>
      </div>
    </div>
  </section>
  <breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./chapter6.ts"></script>
