<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-signin-client_id" content="889450042224-42b9udsuesja54sq450638rrefub6q98.apps.googleusercontent.com">
    <title>VBE - DE</title>
    
    <link rel="stylesheet" href="/css/index.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
    <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><span class="fw-bold">Voice based Email</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/pages/inbox.html">Inbox</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/pages/profile.html">Profile</a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/send-mail.html">Send mail</a>
                </li>
              </ul>
              <button type="button" class="btn btn-danger" onclick="signOut()">Sign Out</button>
              
            </div>
          </div>
    </nav>
    

    <div class="bg-primary bg-opacity-50 container-fluid" style="height: 100vh;" id="body-section">
        <div class="data">
            <p>Name : </p> <span id="name" class="alert alert-success"></span>
            <img src="" class="rounded-circle" width="10vw" height="10vh" alt="profile picture of current logged in user" id="profile">
            <p>Email : </p> <span id="email"></span>
            <button type="button" class="btn btn-danger" onclick="signOut()">Sign Out</button>
        </div>
    </div>

    <script src="/js/index.js"></script>
    <script src="/js/login.js"></script>
    <!-- signin with google -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <!-- Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</body>
</html>


