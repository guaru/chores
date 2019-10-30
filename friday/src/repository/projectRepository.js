import Project from '../entities/projects';
import Status from '../entities/status';

export async function getAll() {
   const projects = await Project.findAll({
      order: [
           ['id','ASC']
      ]
   });
   return projects;
}

export async function findOne(id) {
   const project = await Project.findOne({
      where: {
         id
      }
   });
   return project;
}

export async function create(req) {
   const { name, priority, description, deliverydate } = req;
   try {
      let newProject = await Project.create({
         name,
         priority: 1,
         description,
         deliverydate: '2019-01-01'
      }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
         });


      return newProject;
   } catch (e) {
      console.log(e);
      return null;
   }
}

export async function initStatusProject(projectId) {
   console.log(projectId);
   let status = await Status.create({
      
      name: 'ANALISIS',
      colorId: 2,
      projectId: projectId,
      position:1
   }, {
         fields: ['name', 'colorId', 'projectId']
      });

     status = await Status.create({
        name : 'PENDIENTES',
        colorId: 3,
        projectId:projectId,
        position:2
     },{fields : ['name','colorId','projectId']});

     status = await Status.create({
      name : 'TRABAJANDO',
      colorId: 5,
      projectId:projectId,
      position:3
   },{fields : ['name','colorId','projectId']});
  
     status = await Status.create({
        name : 'PRUEBAS',
        colorId: 4,
        projectId:projectId,
        position:4
     },{fields : ['name','colorId','projectId']});
  
     status = await Status.create({
        name : 'LISTO',
        colorId: 1,
        projectId:projectId,
        position:5
     },{fields : ['name','colorId','projectId']});
   return status;
}


export async function update(tablero) {
   const { id, name, priority, description, deliverydate } = tablero;
   const result = await Project.update({
      name, priority, description, deliverydate
   }, {
         where: { id }
      });
   return result;
}

export async function deleteOne(res, req) {
   const { id } = res.params;
   const isDelete = await Project.destroy({
      where: {
         id
      }
   });
   return isDelete;
}

