const ProfileOgTemplate = () => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
  
      <!-- font awesome icon -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  
      <style>
          body {
              background: "white";
              background-image: radial-gradient(circle at 25px 25px,
                      lightgray 1%,
                      transparent 0%),
                  radial-gradient(circle at 75px 75px, lightgray 1%, transparent 0%);
              background-size: 100px 100px;
              height: 100vh;
          }
      </style>
  
      <title>Eddie Jaoude</title>
  </head>
  
  <body class="p-5">
  
      <div class="row">
          <div class="col-6">
              <img src="https://github.com/eddiejaoude.png" alt="Eddie Jaoude" class="rounded-3 shadow-lg"
                  style="width: 500px">
          </div>
          <div class="col-6 pt-4">
              <div class="col-12 pt-1">
                  <h1>
                      <b>Eddie Jaoude</b>
                  </h1>
              </div>
              <div class="col-12 p-1">
                  <h6 class="text-muted">
                      Open Source DevRel | Founder of <b>EddieHub</b> | <b>GitHub</b> Star
                  </h6>
              </div>
              <div class="col-9 pt-4">
                  <span class="badge text-bg-secondary shadow-lg m-2 p-2">Open Source</span>
                  <span class="badge text-bg-secondary shadow-lg m-2 p-2">Javascript</span>
                  <span class="badge text-bg-secondary shadow-lg m-2 p-2">Typescript</span>
                  <span class="badge text-bg-secondary shadow-lg m-2 p-2">NextJS</span>
                  <span class="badge text-bg-secondary shadow-lg m-2 p-2">DevOps</span>
                  <span class="badge text-bg-secondary shadow-lg m-2 p-2">DevRel</span>
              </div>
              <div class="col-12 mt-4">
                  <h5>
                      <b>Connect With Me 🤝</b>
                  </h5>
              </div>
              <div class="col-12 mt-2">
                  <div class="row" style="margin-left: 1px">
                      <div class="col-6 p-2">
                          <i class="fa fa-github" style="font-size:20px;"></i>
                          <b>
                              /eddiejaoude
                          </b>
                      </div>
                      <div class="col-6 p-2">
                          <i class="fa fa-twitter" style="font-size:20px;"></i>
                          <b>
                              /eddiejaoude
                          </b>
                      </div>
                      <div class="col-6 p-2">
                          <i class="fa fa-youtube-play" style="font-size:20px;"></i>
                          <b>
                              /eddiejaoude
                          </b>
                      </div>
                      <div class="col-6 p-2">
                          <i class="fa fa-linkedin" style="font-size:20px;"></i>
                          <b>
                              /eddiejaoude
                          </b>
                      </div>
                      <div class="col-6 p-2">
                          <i class="fa fa-twitch" style="font-size:20px;"></i>
                          <b>
                              /eddiejaoude
                          </b>
                      </div>
                  </div>
              </div>
              <div class="col-12 mt-4">
                  <img src="https://avatars.githubusercontent.com/u/66388388?s=20&v=4" alt="Eddie Jaoude"
                      class="rounded-3" style="width: 20px">
                  <small class="pt-1">
                      linkfree.eddiehub.io/
                      <b>
                          eddiejaoude
                      </b>
                  </small>
              </div>
          </div>
      </div>
  
  </body>
  
  </html>
     `;
};

export default ProfileOgTemplate;
