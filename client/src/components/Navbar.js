
function NavBar()  {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <a class="navbar-brand" href="/">patens</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Collections
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/content">New Arrivals</a>
          <a class="dropdown-item" href="#">Another page</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/contact">Contact Us</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">About</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Sign In</button>
    </form>
  </div>
</nav>
  );
  }
 
export default NavBar;