const ingredientsRoutes = require('./api/ingredient/routes')

module.exports =[
    {
        method:'GET',
        path:'/ping',
        handler:()=>'pong'
    },
    ...ingredientsRoutes
] 


