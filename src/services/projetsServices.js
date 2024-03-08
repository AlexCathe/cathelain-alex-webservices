import supabase from '#src/db/connect'

const projetsServices = {
    createProjet: async (projet) => {
        const { data, error } = await supabase.from('projet').insert([projet]).select()
        if (error) {
            throw error
        }
        return data
    },

    getAllProjets: async () => {
        const { data, error } = await supabase.from('projet').select()
        if (error) {
            throw error
        }
        return data
    },

    getOneProjetById: async (id) => {
        const { data, error } = await supabase.from('projet').select().eq('id', id)
        if (error) {
            throw error
        }
        return data
    },

    updateProjet: async (id, rawData) => {
        const { data, error } = await supabase.from('projet').update(rawData).eq('id', id).select()
        if (error) {
            throw error
        }
        return data
    },

    deleteProjet: async (id) => {
        await supabase.from('equipe').delete().eq('idProjet', id)
        const { data, error } = await supabase.from('projet').delete().eq('id', id)
        if (error) {
            throw error
        }
        return data
    },

    addPersonneToProjet: async (id, personnes) => {
        console.log(id)

        const newEquipe = personnes.map(personne => {
            return {idProjet: id, idPersonne: personne}
        })

        console.log(newEquipe)

        const { data, error } = await supabase.from('equipe').insert(newEquipe).select()
        if (error) {
            throw error
        }
        return data
    }
}

export default projetsServices