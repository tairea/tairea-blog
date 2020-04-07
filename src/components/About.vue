<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Ian
        <span class="text-primary">Tairea</span>
      </h1>
      <div class="subheading mb-5">
        Palmerston North, Aotearoa · (+64) 022 6933 982 ·
        <a
          href="mailto:ian@tairea.io"
        >ian@tairea.io</a>
      </div>
      <p
        class="lead mb-5"
      >I'm passionate about learning how to apply technology to benefit indigenous peoples.</p>
      
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/ian-tairea/" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/tairea" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
        <a href="https://gitlab.com/iantairea" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'gitlab']"/>
        </a>
        <a href="https://www.facebook.com/ian.tairea" target="_blank" rel="noopener noreferrer">
          <font-awesome :icon="['fab', 'facebook']"/>
        </a>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
