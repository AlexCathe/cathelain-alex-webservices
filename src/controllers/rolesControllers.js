import rolesServices from '#src/services/rolesServices';

const rolesController = {
    getAllRoles: async (req, res) => {
        try {
            const roles = await rolesServices.getAllRoles();
            res.json(roles);
        } catch (error) {
            res.sendStatus(400)
        }
    }
}

export default rolesController;