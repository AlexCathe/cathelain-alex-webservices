import personnesServices from '#src/services/personnesServices'


const personnesController = {
    createPersonne:async (req,res)=>{
        const {body}  = req
        try {
                const registeredPersonne = await personnesServices.createPersonne(body)
                return res.json(registeredPersonne)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },

    getAllPersonnes:async (req,res)=>{
        const allUsers = await personnesServices.getAllPersonnes()
        return res.json(allUsers)
    },

    getOnePersonne:async (req,res)=>{
        const {id} = req.params
        const oneUser = await personnesServices.getOnePersonneById(id)
        if (oneUser.length == 0) {
            return res.sendStatus(404)
        }
        return res.json(oneUser)
    },

    updatePersonne:async (req,res)=>{
        const {id} = req.params
        const {body} = req
        try {
            const updatedUser = await personnesServices.updatePersonne(id, body)
            return res.json(updatedUser)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    deletePersonne:async (req,res)=>{
        const {id} = req.params
        try {
            const deletedUser = await personnesServices.deletePersonne(id)
            return res.sendStatus(204)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    setPersonneCompetences:async (req,res)=>{
        const {id} = req.params
        const {body} = req
        try {
            const userCompetences = await personnesServices.setPersonneCompetences(id, body)
            return res.json(userCompetences)
        } catch (error) {
            return res.sendStatus(400)
        }
    },


}

export default personnesController