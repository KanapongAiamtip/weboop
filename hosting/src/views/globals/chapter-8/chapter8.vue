<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 8 Encapsulation
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          What is Encapsulation ?
        </h1>
       <p>
        in object-oriented programming encapsulation is to conceal or control access to the object's data from outside. The method used to control is to work through methods to perform operations on that data in Java and other object-oriented programming languages. can use this property to mask components within a class.
        <img src="@/assets/ch8pic1.png" alt="pic" width="700" height="300">
        </p>
        <p><br>
          Concept of Encapsulation with hidden variables<br><br>
          It is an abstract saying that explains the meaning of encapsulation clearly for example You order your food and a few minutes later you receive your order. You don't need to know the process of getting your food, for example, to start with the waiter taking the food from you. Next, prepare the ingredients and cooking equipment. Start cooking and serving you.
        </p>
        <p><br>
          This is what happened that you didn't know. and it is not necessary to know But it's about knowing what you want. and what to do to achieve that for encapsulation that is the same You invoke a class's method for some purpose. You just know how to run it. And what are the results?
          </p>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Example Encapsulation
        </h1>
       <p>
        Next, let's look at an example of developing a program with anonymity feature. which is a clock program
       </p><br>
        <img src="@/assets/ch8pic2a.png" alt="pic" width="600" height="300"><br>
        <img src="@/assets/ch8pic2b.png" alt="pic" width="600" height="300">
        <p><br>
          In the example, it is a program to display a clock like on our computer. We have created a Timer class which is a class of watches. and inside there is a private variable member second minute hour and method member updateMembers() means that these data are encapsulated. We cannot access it directly.<br><br>
          The only way we can do this is to access the data by public methods or variables in the statement.
        </p><br>
        <img src="@/assets/ch8pic3.png" alt="pic" width="600" height="300">
        <p><br>
          This increases the time by 1 second. We know that when this method is executed the time increases by 1 second, but what about inside its execution? we don't know and next order
        </p><br>
        <img src="@/assets/ch8pic4.png" alt="pic" width="600" height="300">
        <p><br>
          Likewise, we know that this method returns a time value. And we don't know what kind of information it sends. or what type of data is collected These are what we call **Encapsulation**
        </p><br>
        <img src="@/assets/ch8pic5.png" alt="pic" width="600" height="300">
        <p><br>
          This command suspends the program for 1 second before doing the next one. To make the program more realistic
        </p><br>
        <p>
          09:30:56<br>
          09:30:57<br>
          09:30:58<br>
          09:30:59<br>
          09:31:00<br>
          09:31:01<br>
          09:31:02<br>
          09:31:03<br>
          09:31:04<br>
          09:31:05<br>
          .<br>
          .<br>
          .
        </p>
        <p><br>
          and this is the result of the program It counts and shows the time, because we give an infinity loop. You have to exit the program to end it.<br><br>
          in fact encapsulation There are some around or you've used them, for example, the println() method, which has a background in the process of interacting with the screen, and much more, but we only use one command and get results. Or even you drive a car and change gears. which has various mechanisms That happens more than you see on the dial. but it was hidden
        </p>
      </div>
    </div>
  </section>
  <breadcrumb-footer/>
</div>
</template>
<!--template src="./chapter8.html"></template-->
<script lang="ts" src="./chapter8.ts"></script>
