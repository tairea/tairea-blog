<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <div v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
      <span class="d-block d-lg-none">Tairea.io</span>
      <span class="d-none d-lg-block">
        <g-image alt="Image of Ian" src="~/assets/images/ian.png"
          class="img-fluid img-profile rounded-circle mx-auto mb-2" />
      </span>
    </div>

    <div id="name">
      Ian Tairea
    </div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav social-icons">
        <!-- <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#about')">About</a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#experience')">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#education')">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#skills')">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#interests')">Interests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#awards')">Awards</a>
        </li> -->
        <li>
          <a href="https://www.linkedin.com/in/ian-tairea/" target="_blank" rel="noopener noreferrer">
            <font-awesome :icon="['fab', 'linkedin']" />
          </a>
        </li>
        <li>
          <a href="https://github.com/tairea" target="_blank" rel="noopener noreferrer">
            <font-awesome :icon="['fab', 'github']" />
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/iantairea" target="_blank" rel="noopener noreferrer">
            <font-awesome :icon="['fab', 'gitlab']" />
          </a>
        </li>
        <li>
          <a href="https://m.me/ian.tairea" target="_blank" rel="noopener noreferrer">
            <font-awesome :icon="['fab', 'facebook-messenger']" />
          </a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
  import Nav from "../components/Nav";

  export default {
    components: {
      Nav
    },
    props: ["tairea"],
    data() {
      return {
        ian: {
          linkedin: "https://www.linkedin.com/in/ian-tairea/",
          github: "https://github.com/tairea",
          gitlab: "https://gitlab.com/iantairea",
          messenger: "https://m.me/ian.tairea"
        },
        ben: {
          linkedin: "https://www.linkedin.com/in/ian-tairea/",
          github: "https://github.com/tairea",
          gitlab: "https://gitlab.com/iantairea",
          messenger: "https://m.me/ian.tairea"
        },

      }
    },
  };
</script>

<style scoped lang="scss">
  .navbar-brand,
  .nav-item {
    cursor: pointer;
  }

  #sideNav .navbar-nav .nav-item .nav-link,
  #name {
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  #sideNav .navbar-toggler:focus {
    outline-color: #d48a6e;
  }


  .social-icons li {
    margin-top: 1rem;
  }

  .social-icons a {
    cursor: pointer;
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--primary);
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
  }

  .social-icons a:last-child {
    margin-right: 0;
  }

  .social-icons a:hover {
    background-color: var(--secondary);
  }

  @media (min-width: 992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
    }

    #sideNav .navbar-brand {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: auto auto 0;
      padding: 0.5rem;
    }

    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }

    #sideNav .navbar-collapse {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-flex: 0;
      -ms-flex-positive: 0;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto;
    }

    #sideNav .navbar-collapse .navbar-nav {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block;
    }

    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block;
    }

  }
</style>