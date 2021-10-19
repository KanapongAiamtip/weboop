<template>
  <div class="missing-query-in-answer-page">
    <section class="hero is-fullheight is-sailor-pink">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1">
            {{ pun }}
          </h1>
          <img src="@/assets/missing-query.png" width="200px" height="200px" alt="Missing Querystring">
          <h1 class="title is-2">
            The page you are trying to access needs a <b>querystring</b> to work properly.
          </h1>
          <h1 class="subtitle is-4">
            Choose from the menu on the top to keep navigating further :)
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" src="./missing-query.ts"></script>
