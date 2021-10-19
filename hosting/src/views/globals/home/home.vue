<template>
<div class="home-page">
  <section class="hero is-sailor-pink is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <img src="@/assets/programming.png" alt="OOP" class="oop-logo">
          </div>
          <div class="column">
            <h1 class="title is-1 has-text-mint">
              OOP
            </h1>
            <h3 class="subtitle is-3">
              <span class="has-text-mint">O</span>bject
              <span class="has-text-mint">O</span>riented
              <span class="has-text-mint">P</span>rogramming
            </h3>
            <br>
            <!--b-button tag="router-link" to="" type="is-link">Codee Club</b-button-->
            <b-button tag="a" href="https://codee.club" type="is-link">Codee Club</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1 has-text-centered">
          254275 Object Oriented Programming
        </h1><br>
        <h3 class="subtitle is-3 has-text-centered">
          Thai Name: การเขียนโปรแกรมเชิงวัตถุ
        </h3><br>
        <h3 class="subtitle is-3 has-text-centered">
          Englist Name: Object Oriented Programming
        </h3><br>
        <h3 class="subtitle is-3 has-text-centered">
          Required subjects before: ---
        </h3><br>
        <h3 class="subtitle is-3 has-text-centered">
          Credits: 3 (2-2-6) --- 2 hours of lecture per week and 2 hours of practice per week.
        </h3>
      </div>
    </div>
  </section>

  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-2">
          COURSE SUMMARY
        </h1>
        <p class="subtitle">
          <br>
        Introduction object oriented programming and language, abstract data types in object-oriented programming,
objects, classes, attributes and methods and method overloading, constructor and destructor, encapsulation and information hiding class composition, inheritance, polymorphism, interface, reu
        </p>
      </div>
    </div>
    </section>

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title is-2">
              INSTRUCTOR
            </h1>
            <p class="subtitle">
              <br>
              <ui>
                <li>
                  Asst.Prof.Dr. Jaratsri Rungrattanaubol
                  </li>
                  <li>
                    Dr. Antony Harfield
                  </li>
                  <li>
                    Dr. Nattapon komtao
                  </li>
                  <li>
                    Instructor Wuttipong Ruanthong
                  </li>
                  <li>
                    TA Kunapong Aiamtip
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
                Software
              </h1>
              <p class="subtitle">
                <br>
              <ui>
                <li>
                  <a href="https://atom.io">Atom</a>
                  </li>
                  <li>
                    <a href="https://code.visualstudio.com">Vs Code</a>
                    </li>
                </ui>
              </p>
            </div>
          </div>
        </section>
  <breadcrumb-footer/>
</div>
</template>

<script lang="ts" src="./home.ts"></script>
<style scoped lang="scss" src="./home.scss"></style>
