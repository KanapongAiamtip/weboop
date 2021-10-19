/* eslint-disable no-irregular-whitespace */
<template>
    <div class="sources-page">
  <section class="hero is-sailor-pink is-medium">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-gray-border">
          Chapter 1 Introduction of programming
        </h1>
      </div>
    </div>
  </section>
  <section class="hero is-white">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Basic Java
        </h1>
        <div class="content">
          <h2>Hello world</h2>
          <h5>
            Hello World Program is the first program that every programmer will ever write. It is a program that displays the message "Hello World!" on your computer screen. It is a basic program that We have learned since the last semester.
          </h5>
          <pre>
            public class HelloWorld {
              public static void main (String[] args) {
                  System.out.println("Hello World!");
              }
          }
            </pre><br>
          <ul>
            <li>
              Structure and datatype
            </li>
            <li>
            Condition Selection Order
            </li>
            <li>
              Loop statements
            </li>
            <li>
              Array
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Structure and datatype
        </h1>
        <h5>The structure of the Java language consists of 1.Package 2.Class 3.Method 4.Statements
          <br>And in Java language, there are 8 basic types of information that can be used. These are often referred to as primitive types. In programming, you need to choose the data type that best matches the data you will collect. Because it will reduce memory usage and speed of work as well.<br>
          Data type in java there are 2 types Primitive data types: The primitive data types include boolean, char, byte, short, int, long, float and double.<br>
          Reference data type: The non-primitive data types include Classes, Interfaces, and Arrays.
        </h5>
        <br>
         <h1>Table of Data Value </h1>
         <br>
          <table>
            <tr>
              <th>Type</th>
              <th>Explanation</th>
              <th>Values Rank</th>
            </tr>
            <tr>
              <td>byte</td>
              <td>8 bit (1 byte) integer value</td>
              <td>-128-127</td>
            </tr>
            <tr>
              <td>short</td>
              <td>16 bit (2 byte) integer value</td>
              <td>-32768 - 32767</td>
            </tr>
            <tr>
              <td>int</td>
              <td>32 bit (4 byte) integer value</td>
              <td>-2147483648 - 2147483647</td>
            </tr>
            <tr>
              <td>long</td>
              <td>64 bit (8 byte) integer value</td>
              <td>-9223372036854775808 - 9223372036854775807</td>
            </tr>
            <tr>
              <td>float</td>
              <td>32 bit (4 byte) floating-point value</td>
              <td>1.4E-45 - 3.4028235E38</td>
            </tr>
            <tr>
              <td>double</td>
              <td>  64 bit (8 byte) floating-point value</td>
              <td>4.9E-324 - 1.7976931348623157E308
          </td>
            </tr>
            <tr>
              <td>char</td>
              <td>16 bit (2 byte) character Unicode encoding value</td>
              <td> </td>
            </tr>
            <tr>
              <td>boolean</td>
              <td>1 bit boolean value</td>
              <td>true and false</td>
            </tr>
          </table>
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          Condition Selection Order
        </h1><br>
        <p class="subtitle">
          A conditional statement (selection statement) is a statement that allows you to control a program to run as needed. according to the specified conditions
          <ui>
          <li>
           if
            </li>
            <li>
              if else
             <li>
               else if
               </li>
              <li>
                switch
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
          Loop statements
        </h1><br>
        <p class="subtitle">
          Loop statements are statements that allow you to control a program to run repeatedly if the condition is true. It is a very useful command in programming
         <br>
          <ui>
          <li>
           While loop
            </li>
            <li>
              Do While loop
             <li>
               For loop
               </li>
              <li>
                Nested For loop
                </li>
              <li>
                Each For loop
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
          Array
        </h1><br>
        <p class="subtitle">
          Array is a type of data that can store the same type of data in sequence. The data is contained in the same variable called an array variable. It uses index to access the data. Imagine you have 5 numbers to keep in your programming.
Putting it in 5 variables wouldn't be a problem. But if you have more data, such as 100 numbers, then surely an array will help us with this. Let's switch from the old method to using an array to store data instead.
          <br>
          <ui>
          <li>
           Array
            </li>
            <li>
            Multi-dimensional Arrays
            </li>
          </ui>
        </p>
      </div>
    </div>
  </section>
  <breadcrumb-footer />
</div>
</template>
<script lang="ts" src="./chapter1.ts"></script>
