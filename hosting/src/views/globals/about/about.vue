<template>
  <div class="about-page">
    <section class="hero is-sailor-pink is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1 has-text-gray-border">About</h1>
          <h3 class="subtitle is-3">I guess this one is about me ???</h3>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Who am I ❤❤❤</h1>
          <br />
          <p class="subtitle">My name is Kunapong Aiamtip Nick Name Soda</p>
          <img
            class="img_circle"
            src="https://avatars.githubusercontent.com/u/75485361?v=4" width="360" height="360"
          />
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">What is this site ?</h1>
          <p class="subtitle">
            <br />
            Learn Subject 254275 Object Oriented Programming in CSIT NU
          </p>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Why create this website ???</h1>
          <p class="subtitle">
            <br />
            Renovate that old website
          </p>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Tech stack and tools ?</h1>
          <div class="content">
            <h4>The website</h4>
            <p>The site is created by Vue, TypeScript and Buefy</p>
          </div>
        </div>
      </div>
    </section>
    <breadcrumb-footer />
  </div>
</template>
<style>
.img_circle{
  border-top-left-radius: 50% 50%;
  border-top-right-radius: 50% 50%;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
</style>
<script lang="ts" src="./about.ts"></script>
