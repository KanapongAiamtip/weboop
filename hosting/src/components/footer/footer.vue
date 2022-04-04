<template>
  <footer class="footer">
    <div class="container has-text-centered">
       <p class="subtitle is-6">
        <strong>Made in Phitsanulok</strong> 💜💜💜<br><br>
        by members of the MeltdownCoding community
      </p>
      <nav class="breadcrumb is-centered has-bullet-separator" aria-label="breadcrumb">
        <ul>
          <li>
            <a href="https://github.com/vuejs/vue">Vue</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">Typescript</a>
          </li>
          <li>
            <a href="https://buefy.org">Buefy</a>
          </li>
          <li>
            <a href="https://eslint.org">Eslint</a>
          </li>
        </ul>
      </nav>

      <nav class="level is-mobile">
        <div class="level-item">
          <figure class="image is-48x48 mx-1">
            <a href="https://vuejs.org/"><img class="is-rounded" src="@/assets/vue.svg"></a>
          </figure>
           <figure class="image is-48x48 mx-1">
            <a href="https://buefy.org"><img class="is-rounded" src="@/assets/buefy.png"></a>
          </figure>
          <figure class="image is-48x48 mx-1">
            <a href="https://firebase.google.com/"><img class="is-rounded" src="@/assets/firebase.svg"></a>
          </figure>
          <figure class="image is-48x48 mx-1">
            <a href="https://www.typescriptlang.org/"><img class="is-rounded" src="@/assets/typescript.svg"></a>
          </figure>
          <figure class="image is-48x48 mx-1">
            <a href="https://eslint.org"><img class="is-rounded" src="@/assets/eslint.svg"></a>
          </figure>
          <figure class="image is-48x48 mx-1">
            <a href="https://www.javascript.com"><img class="is-rounded" src="@/assets/js.png"></a>
          </figure>
          <figure class="image is-48x48 mx-1">
            <a href="https://sass-lang.com/"><img class="is-rounded" src="@/assets/scss.png"></a>
          </figure>
          <figure class="image is-48x48 mx-1">
            <a href="https://github.com/MeltdownCoding"><img class="is-rounded" src="@/assets/github.svg"></a>
          </figure>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts" src="./footer.ts"></script>
<style scoped lang="scss">
@import '../../variables';

.footer {
  background-color: rgb(255, 255, 255);
  border-top: 2px solid $gray-border;
  height: 142px;
}
</style>
