import bcrypt from "bcrypt"
import supabase from '#src/db/connect'

const personnesServices = {

    createPersonne: async (rawData) => {
        const { password } = rawData
        const salt = bcrypt.genSaltSync(4);
        const hash = bcrypt.hashSync(password, salt);

        const newUserData = {
            ...rawData,
            password: hash
        }
        try {
            await supabase.from().insert([newUser])
            const { data, error } = await supabase.from('personne').insert({ nom: newUserData.nom, prenom: newUserData.prenom, email: newUserData.email, password: newUserData.password }).select()
            return data
        } catch (error) {
            throw error
        }
    },

    getAllPersonnes: async () => {
        const { data, error } = await supabase.from('personne').select()
        if (error) {
            throw error
        }
        return data
    },

    getOnePersonneById: async (id) => {
        const { data, error } = await supabase.from('personne').select().eq('id', id)
        if (error) {
            throw error
        }
        return data
    },

    updatePersonne: async (id, rawData) => {
        let newUserData = {}
        if (rawData.password) {
            const { password } = rawData
            const salt = bcrypt.genSaltSync(4);
            const hash = bcrypt.hashSync(password, salt);
            newUserData = {
                ...rawData,
                password: hash
            }
        }
        else {
            newUserData = {
                ...rawData
            }
        }
        const { data, error } = await supabase.from('personne').update(newUserData).eq('id', id).select()
        if (error) {
            throw error
        }
        return data
    },

    deletePersonne: async (id) => {
        await supabase.from('competence_personne').delete().eq('idPersonne', id)
        await supabase.from('equipe').delete().eq('id', id)
        const { data, error } = await supabase.from('personne').delete().eq('id', id)
        if (error) {
            throw error
        }
        return data
    },

    setPersonneCompetences: async (userId, competences) => {
        let userCompetences = []
        const { data, error } = await supabase.from('competence').select("*")
        competences.forEach(competence => {
            data.forEach(competenceBdd => {
                console.log(competenceBdd)
                if (competenceBdd.libelle == competence) {
                    userCompetences.push({ idPersonne: userId, idCompetence: competenceBdd.id })
                }
            });
        });
        console.log(userCompetences)
        const { data: data2, error: error2 } = await supabase.from('competence_personne').insert(userCompetences).select()
        console.log(error2)
        return data2

    },

    getPersonneByRefreshToken: async ({ refreshToken }) => {
        const { data, error } = await supabase.from('personne').select().eq('refreshToken', refreshToken)
        if (error) {
            throw error
        }
        return data
    },

    updateUserToken: async ({id,refreshToken})=>{
        const { data, error } = await supabase.from('personne').update({refreshToken}).eq('id', id).select()
        if (error) {
            throw error
        }
        return data
    },

    getOnePersonneByEmail: async ({email}) => {
        const { data, error } = await supabase.from('personne').select().eq('email', email)
        if (error) {
            throw error
        }
        return data[0]
    }

}



export default personnesServices