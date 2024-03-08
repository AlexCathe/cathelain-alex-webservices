import supabase from '#src/db/connect'

const competencesServices = {
    createCompetence: async (competence) => {
        console.log(competence)
        const { data, error } = await supabase.from('competence').insert([{libelle: competence.libelle}]).select()
        if (error) {
            throw error
        }
        return data
    },

    getAllCompetences: async () => {
        const { data, error } = await supabase.from('competence').select()
        if (error) {
            throw error
        }
        return data
    },

    getOneCompetenceById: async (id) => {
        const { data, error } = await supabase.from('competence').select().eq('id', id)
        if (error) {
            throw error
        }
        return data[0]
    },

    updateCompetence: async (id, rawData) => {
        const { data, error } = await supabase.from('competence').update({ libelle: rawData.libelle }).eq('id', id).select()
        if (error) {
            throw error
        }
        return data
    },

    deleteCompetence: async (id) => {
        await supabase.from('competence_personne').delete().eq('idCompetence', id)
        const { data, error } = await supabase.from('competence').delete().eq('id', id)
        if (error) {
            throw error
        }
        return data
    }
}

export default competencesServices