


   
const generateProfile = team => {


  const generateManager = manager => {
   
  return `  <header class="p-5 mb-4 header bg-light">
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
const generateEngineer = engineer  => { 
   

return `<header class="p-5 mb-4 header bg-light">
<h2 class="card-title">${engineer.getName()}</h2>
<h2 class="card-title">${engineer.getRole()}</h2>
</header>

<div class="card" style="width: 18rem;">
<div class="card-header">

</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${engineer.getId()}</li>
  <li class="list-group-item">Email: <a href="mail:${engineer.getEmail()}"></a></li>
  <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer"></a></li>
  
 
</ul>
</div>
`;

};
const generateIntern = intern => {
    
    return `
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

const html = [];
  
html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
);

return html.join("");


}


module.exports = team => {

return `<!DOCTYPE html>
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
            ${generateProfile(team)}
        </div>
    </div>
</div>


</body>
</html>
`;
}
  
