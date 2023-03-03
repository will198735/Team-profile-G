


   
const generateProfile = team => {


  const generateManager = manager => {
   return `

  <div class="card text-bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">
  <h3 class="card-title">${manager.name}</h3>
    <h5 class="card-title">${manager.getRole()}</h5>

  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
      <li class="list-group-item">${manager.id}</li>
      <li class="list-group-item">Email: <a href="mail:${manager.email}"></a></li>
    
      <li class="list-group-item">${manager.officeNumber}</li>
     
    </ul>
 
  </div>
</div>
  `;
};


const generateEngineer = engineer  => { 
   


return `
<div class="card text-bg-success mb-3" style="max-width: 18rem;">
<div class="card-header">
<h3 class="card-title">${engineer.name}</h3>
  <h5 class="card-title">${engineer.getRole()}</h5>

</div>
<div class="card-body">
<ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mail:${engineer.email}"></a></li>
  
    <li class="list-group-item">${engineer.officeNumber}</li>
   
  </ul>

</div>
</div>

`;

};
const generateIntern = intern => {
    
    return `
    <div class="card text-bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3 class="card-title">${intern.name}</h3>
      <h5 class="card-title">${intern.getRole()}</h5>
  
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${intern.id}</li>
        <li class="list-group-item">Email: <a href="mail:${intern.email}"></a></li>
      
        <li class="list-group-item">${intern.officeNumber}</li>
       
      </ul>
   
    </div>
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
 
        <div class="row team-area col-4 d-flex justify-content-center">
            ${generateProfile(team)}
        </div>
        
    </div>
</div>



</body>
</html>
`;
}
  
