<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 3 Loop Method Array
        </h1>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          While loop
        </h1>
       <p>
         <ui>
           <li>
            If the condition is true, the program runs in curly bracket { } statement blocks.
           </li>
           <li>
            When the condition is false, the program exits the loop and executes the following statement after while.
           </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic1.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Do while loop
        </h1>
       <p>
         <ui>
           <li>
            It will run at least once, after which the condition will be checked at the end of the loop.
          </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic2.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Precautions for using while and do...while
        </h1>
       <p>
         <ui>
           <li>
             Makesure that in the loop body there is a statement that decreases or increases the value of the loop control. to make sure The loop will stop the loop.
          </li>
          <li>
            Make sure the loop repeats the correct number of times.
          </li>
          <li>
            If you want to loop through the loop body N times.<br>
                - Default counter cycle counter should start at 0 and test at counter less than M.<br>
                - Default counter cycle counter should start at 1 and test at counter less than and equlas M.
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
          For Loop
        </h1>
       <p>
         <ui>
           <li>
            Initial is the initial declaration of the loop, for example assigning a value to a variable.
          </li>
          <li>
            Condition defines the condition to run in the loop.
          </li>
          <li>
            This will update the value after each loop.
          </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic3.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Nested For loop
        </h1>
       <p>
         <ui>
           <li>
            Nested-for is a nested for statement.
          </li>
          <li>
            Make for inner and for outer.
          </li>
          <li>
            It is an important technique when writing complex programs. or have multiple dimensions
          </li>
          <li>
            or having to read the same value multiple times, working like a table with rows and columns
          </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic4.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Each For loop
        </h1>
       <p>
         <ui>
           <li>
            The for-each loop is used to traverse array or collection in java. It is easier to use than simple for loop because we don't need to increment value and use subscript notation.
          </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic5.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Principle of writing method in java
        </h1>
       <p>
         <ui>
           <li>
            Methods are things that every programmer can write. Most of the time we focus on using Java methods System.out.println(),Math.sqrt(), etc.
          </li>
          <li>
            The principle of writing a method is as follows.<br>
            What values must the method take? (how many values and what type)<br>
            Method must send value, what answer or not send value?
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
          Example A printmenu()
        </h1>
        <h3 class="title is-4">
          Write a method to print food items
        </h3>
       <p>
         <ui>
           <li>
            What values must be accepted (how many and what type) // not accepting
          </li>
          <li>
            What request must be sent or not sent // not sent because it was typed on the screen.
            </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic6.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Example B printString(String,int)
        </h1>
        <h3 class="title is-4">
          Write a method to print a String n times.
        </h3>
       <p>
         <ui>
           <li>
            What values must be received? (how many values and what type) // 2 values, get String, get n
          </li>
          <li>
            What request must be sent or not sent // not sent because it was typed on the screen.
            </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic7.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Example C  int CountVowels(String)
        </h1>
        <br>
        <img src="@/assets/ch3pic8.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Key word Break and Continue
        </h1>
       <p>
         <ui>
           <li>
            The Continue command is the command used to skip the current loop operation. that means The loop starts a new statement as soon as it encounters a continue statement;
          </li>
          <li>
            The break statement is used to stop the loop immediately. It doesn't care if the loop condition is true. When a program encounters a break statement, it exits the loop and continues running immediately after the loop.
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
          How To Comparison Data In primitive type
        </h1>
       <p>
         <ui>
           <li>
            == and != will be used with, will only apply to base 8 characters char,boolean,int,...,double<br>
            if(x==a) ... if(a! =0)...
            if(letter =='b')...  if(b ==true) ...
          </li>
          <li>
              !!!
              Caution: Avoid using == or != with double or float data, as this can sometimes result in rounding errors.
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
          How To Comparison Data In Object type Method equals
        </h1>
       <p>
         <ui>
           <li>
            If == and != are used with an object-type data, they are meant to compare and reference memory addresses, not value comparisons.
          </li>
          <li>
            But equals is used to compare the values of data.
          </li>
          <li>
            Example <br>
            String put = "hi";<br>
            if( put == "hi" ) .....<br>
            This works with String data, but is not recommended.<br>
            It is recommended to use Method equals.<br>
            if(input.equals("hi"))...<br>
            String put = in.nextLine();<br>
            if("stop".equals(put))...
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
          Example of Comparison Object
        </h1>
       <p>
         <ui>
           <li>
            If == and != are used with an object-type data, they are meant to compare and reference memory addresses, not value comparisons.
          </li>
          <li>
            But equals is used to compare the values of data.
          </li>
          </ui>
        </p><br>
        <img src="@/assets/ch3pic9.png" alt="pic" width="600" height="300"><br>
        <img src="@/assets/ch3pic10.png" alt="pic" width="600" height="300"><br>
        <img src="@/assets/ch3pic11.png" alt="pic" width="600" height="300">
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Array
        </h1>
       <p>
         <ui>
           <li>
            What is Array
          </li>
          <li>
            How to announcement array
          </li>
          <li>
            Array elements and index
          </li>
          <li>
            Primitive Type array manipulation
          </li>
          <li>
            Default value when creating an Array (By default)
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
         What is Array
        </h1>
       <p>
         <ui>
           <li>
            Array is a type of data that can store the same type of data in sequence. The data is contained in the same variable called an array variable. It uses index to access the data.
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
          How to announcement array
        </h1>
        <h3 class="title is-4">
          type[] name;<br>
          type[] name = new type[size];<br>
          type[] name = new type[] {value1, value2, ...};
        </h3>
       <p>
         <ui>
           <li>
            declaring that array There are 3 ways you can declare an array variable. where type is the type of data and can be a class, name is the name of an array variable. and in the next line is the size setting using the command new and size as integers The last line is the initialization of the array. without having to set the size
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
          Array elements and index
        </h1>
        <h3 class="title is-4">
          Index and Element
        </h3>
       <p>
         <ui>
           <li>
            The index or pointer specifies the position of an array starting from 0 to the size of the array -1.
          </li>
          <li>
            element or value stored in an array in a particular position
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
          Primitive Type array manipulation
        </h1>
       <p>
         <ui>
           <li>
            An array is a collection of data values.
          </li>
          <li>
            If you want to store all 10 int values in a single interpreter (instead of using 10 interpreters, e.g.
int a1 10; ,int a2 4; , ... int a10; 12; )
          </li>
          <li>
            In order to make programming easier, it will be int[] a = new int [10]; a[0]=10,a[1]=4,...
          </li>
          <li>
            !!! Note Arrays in Java must be of the same data type.
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
          Default value when creating an Array (By default)
        </h1>
       <p>
         <ui>
           <li>
            When an array object is created, for example int arr[] ; arr = new int [5];
          </li>
          <li>
            Each member in an array has a default value of the data type:<br>The number type (byte,sort,int...double) defaults to 0 or 0.0. The boolean type defaults to false. The object type defaults to null.
          </li>
          </ui>
        </p>
      </div>
    </div>
  </section>
  <breadcrumb-footer/>
</div>
</template>
<script lang="ts" src="./chapter3.ts"></script>
