


    module.exports = manager => {
        return
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
  <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateProfile(profile)}
            </div>
        </div>
    </div>
  

  </body>
  </html>
  `;
    }


const generateProfile = profile => {


  const htmlManager = manager => {
    return
   `  <header class="p-5 mb-4 header bg-light">
    <h2 class="card-title">${manager.getName()}</h2>
    <h2 class="card-title">${manager.getRole()}</h2>
    </header>
  
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.getId()}</li>
      <li class="list-group-item">Email: <a href="mail:${manager.getEmail()}"></a></li>
    
      <li class="list-group-item">${officeNumber}</li>
     
    </ul>
  </div>
  `;
};
const htmlEngeneer = engeneer  => { 
    return

`<header class="p-5 mb-4 header bg-light">
<h2 class="card-title">${engeneer.getName()}</h2>
<h2 class="card-title">${engeneer.getRole()}</h2>
</header>

<div class="card" style="width: 18rem;">
<div class="card-header">

</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${engeneer.getId()}</li>
  <li class="list-group-item">Email: <a href="mail:${engeneer.getEmail()}"></a></li>
  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer"></a></li>
  
 
</ul>
</div>
`;

};
const htmlIntern = intern => {
    return
    `
    <header class="p-5 mb-4 header bg-light">
    <h2 class="card-title">${intern.getName()}</h2>
    <h2 class="card-title">${intern.getRole()}</h2>
    </header>
  
    <div class="card" style="width: 18rem;">
    <div class="card-header">
    
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.getId()}</li>
      <li class="list-group-item">Email: <a href="mail:${intern.getEmail()}"></a></li>
    
      <li class="list-group-item">${intern.getSchool}</li>
     
    </ul>
  </div>
  `;
};


}
  
