import personnesServices from '#src/services/personnesServices' 
import rolesServices from '#src/services/rolesServices'


const exposeMiddleware = {

    authorizationChecker:async (req,res,next)=>{
        const {userId, baseUrl, method} = req
        const currentUser = await personnesServices.getOnePersonneById(userId)
        const {permissions} = await rolesServices.getOneRoleById(currentUser.role)  
        const ressourcePath = baseUrl.split('/')[3]
       
        // on tente de trouver la ressource:
        const findRessource = permissions.find(({ressource})=>ressource==ressourcePath)
        if(!findRessource){
            return res.sendStatus(403)
        }
        // on tente de trouver la method
        const isAllowed = findRessource.method.includes(method)
        
        if(isAllowed){
          return next()
        }
        return res.sendStatus(403)
       
    }
}

export default exposeMiddleware