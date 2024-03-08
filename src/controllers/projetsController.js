import projetsService from '#src/services/projetsServices'

const projetsController = {
    createProjet:async (req,res)=>{
        const {body}  = req
        try {
                const registeredprojet = await projetsService.createProjet(body)
                return res.json(registeredprojet)
            } catch (error) {
               return res.sendStatus(400)
        }
        
    },

    getAllProjets:async (req, res)=> {
        const {query} = req
        try {
            const allprojets = await projetsService.getAllProjets(query)
            return res.json(allprojets)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    getOneProjetById:async (req, res)=> {
        const {id} = req.params
        try {
            const oneprojet = await projetsService.getOneProjetById(id)
            if (oneprojet?.length == 0 || !oneprojet) {
                return res.sendStatus(404)
            }
            return res.json(oneprojet)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    updateProjet:async (req,res)=>{
        const {id} = req.params
        const {body} = req
        try {
            const updatedprojet = await projetsService.updateProjet(id, body)
            return res.json(updatedprojet)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    deleteProjet:async (req,res)=>{
        const {id} = req.params
        try {
            const deletedprojet = await projetsService.deleteProjet(id)
            return res.sendStatus(204)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    addPersonneToProjet:async (req,res)=>{
        const {id} = req.params
        const {body} = req
        try {
            const addedPersonne = await projetsService.addPersonneToProjet(id, body)
            return res.json(addedPersonne)
        } catch (error) {
            return res.sendStatus(400)
        }
    }
}

export default projetsController