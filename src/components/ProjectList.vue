<template>
  <div class="sidebar-container-2">
    <aside class="sidebar-2">
      <nav class="navbar-2">
        <h1>Mina projekt</h1>
        <ul class="project-list">          
          <li><router-link to="/todofe">Att-göra lista</router-link></li><br />
          <li><router-link to="/todolist">Att-göra lista med VueJS</router-link></li><br />
          <li><router-link to="/blogg">Bloggplattform</router-link></li><br />
          <li><router-link to="/bloggapi">Bloggplattform med API</router-link></li><br />
          <li><router-link to="/bloggsql">Bloggplattform med SQL</router-link></li><br />
          <li><router-link to="/bloggvue">Bloggplattform med VueJS</router-link></li><br />
          <li><router-link to="/loan">CRUD för lån</router-link></li><br />
          <li><router-link to="/companyweb">Företagssida</router-link></li><br />
          <li><router-link to="/fizzbuzz">FizzBuzz</router-link></li><br />
          <li><router-link to="/goal">Goals</router-link></li><br />          
          <li><router-link to="/portfoliomvc">Portfolio med MVC</router-link></li><br />
          <li><router-link to="/portfnode">Portfolio med NodeJS</router-link></li><br />
          <li><router-link to="/receptlista">Receptlista</router-link></li><br />
          <li><router-link to="/receptapi">Receptlista med API</router-link></li><br />
          <li><router-link to="/receptnode">Receptlista med NodeJS</router-link></li><br />
          <li><router-link to="/sqlreceptlista">Receptlista med SQL</router-link></li><br />
          <li><router-link to="/restvue">Restaurangsida med VueJS</router-link></li><br />
          <li><router-link to="/tictac">Tic-Tac-Toe</router-link></li><br />
          <li><router-link to="/workout">Träningsdagbok</router-link></li><br />
          <li><router-link to="/sqlworkout">Träningsdagbok med SQL</router-link></li><br />
          <li><router-link to="/webshop">Webbutik</router-link></li>
        </ul>
      </nav>
      <router-view />
    </aside>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
}
</script>