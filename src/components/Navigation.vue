<template>
  <nav class="translucent-navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">captains..™</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                THE SPORTS DEVELOPMENT
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/">Home</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Co2Erad">CO2 Eradication</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/User">Users And Accounts</a>
                </li>
                <li><a class="dropdown-item" href="/Vote">Vote</a></li>
                <li>
                  <a class="dropdown-item" href="/addRolePage">Sign a Petition</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Schedule">Lights Out</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Results">Results</a>
                </li>
                <li><a class="dropdown-item" href="/aboutUs">About us</a></li>
                <li><hr class="dropdown-divider" /></li>

                <li><a class="dropdown-item" href="/Help">Help</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Help">Help</a>
            </li>
            
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/login"
              >Login</a>
          </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Register</a>
            </li>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script></script>

<style scoped>
.container-fluid {
  background-color: rgb(250, 28, 28);
  position: fixed;
  padding-top: 30px;
  padding-bottom: 10px;
  margin-top: 30px;
  margin-bottom: 20px; 
}
</style>
