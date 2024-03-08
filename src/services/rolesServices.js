import supabase from '#src/db/connect'

const rolesServices = {

    getAllRoles: async () => {
        const { data, error } = await supabase.from('role').select()
        if (error) {
            throw error
        }
        return data
    }, 

    getOneRoleById: async (id) => {
        const { data, error } = await supabase.from('role').select().eq('id', id)
        if (error) {
            throw error
        }
        return data[0]
    }

}



export default rolesServices