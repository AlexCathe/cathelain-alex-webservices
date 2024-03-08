import competencesService from '#src/services/competencesServices'

const competencesController = {
    createCompetence:async (req,res)=>{
        const {body}  = req
        try {
                const registeredCompetence = await competencesService.createCompetence(body)
                return res.json(registeredCompetence)
            } catch (error) {
               return res.sendStatus(400)
            // return res.json({error})
        }
        
    },

    getAllCompetences:async (req, res)=> {
        try {
            const allCompetences = await competencesService.getAllCompetences()
            return res.json(allCompetences)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    getOneCompetenceById:async (req, res)=> {
        const {id} = req.params
        try {
            const oneCompetence = await competencesService.getOneCompetenceById(id)
            if (oneCompetence?.length == 0 || !oneCompetence) {
                return res.sendStatus(404)
            }
            return res.json(oneCompetence)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    updateCompetence:async (req,res)=>{
        const {id} = req.params
        const {body} = req
        try {
            const updatedCompetence = await competencesService.updateCompetence(id, body)
            return res.json(updatedCompetence)
        } catch (error) {
            return res.sendStatus(400)
        }
    },

    deleteCompetence:async (req,res)=>{
        const {id} = req.params
        try {
            const deletedCompetence = await competencesService.deleteCompetence(id)
            return res.sendStatus(204)
        } catch (error) {
            return res.sendStatus(400)
        }
    }
}

export default competencesController