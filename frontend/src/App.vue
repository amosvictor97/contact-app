<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">KCONTACT</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-5">
    <router-view />
  </div>
  


</template>

<script>
  export default {
    name: 'App',

  }
</script>