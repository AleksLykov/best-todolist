<template>
  <div id="app">
    <h2>Best simple TODOList app</h2>
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<script>
import { todosSort } from "./main";

export default {
  created() {
    this.$store.dispatch("GET_TODOS", todosSort);
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 750px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  @media only screen and (max-width: 1200px) { width: 60vw; }
  @media only screen and (max-width: 991px) { width: 70vw; }
  @media only screen and (max-width: 767px) { width: 90vw; }
  @media only screen and (max-width: 480px) { width: 98vw;}
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img {
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
article > * + * {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  text-decoration: none;
  border: solid 1px #ddd;
  border-radius: .3em;
  outline: none;
  padding: .2em .5em;
  font: inherit;
  background-color: #fff;
  transition: all .4s ease .1s;
  &:hover{
    border-color: #ccc;
    background-color: rgba(252, 252, 252, 1);
  }
  &:focus{
    border-color: #aaa;
    background-color: rgba(249, 249, 249, 1);
  }
}

h2{
  padding: .5em;
}
#nav {
  padding: 15px;

  a {
    font-weight: 900;
    color: #444;

    &.router-link-exact-active {
      color: #888;
    }
  }
}
.btn{
  user-select: none;
  cursor: pointer;
  height: 2em;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border: solid 1px transparent;
  border-radius: .5em;
  outline: none;
  background-color: rgb(249, 249, 249);
  &:hover{
    background-color: #ccc;
  }
  &:active{
    background-color: #ddd;
  }
}
</style>
