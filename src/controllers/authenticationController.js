import authenticationService from '#src/services/authenticationServices'
import personnesServices from '#src/services/personnesServices'
import { signJwt, verifyJwt } from '#src/utils/jwtoken'

const exposeController = {

    login: async (req, res) => {
        const { body } = req
        const user = await personnesServices.getOnePersonneByEmail(body)
        try {
            if (user.length === 0) return res.sendStatus(401)
            const comparePwd = await authenticationService.comparePassword({ password: body.password, storedPassword: user.password })
            const tokenPayload = {
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                // roles:user.roles
            }
            if (comparePwd) {
                const token = signJwt({ payload: tokenPayload, expiresIn: '5min' })
                const refreshToken = signJwt({ payload: tokenPayload, expiresIn: '7d' })
                const accessToken = { access_token: token, token_type: 'Bearer' }
                const updateRefresh = await personnesServices.updatePersonneToken(user.id,refreshToken)
                return res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).json(accessToken) 
            }
            return res.sendStatus(401)
        }
        catch (error) {
            console.log(error)
            return res.sendStatus(500)
        }
    },

    refreshToken: async (req, res) => {
        const { cookie } = req
        if (!cookie?.refreshToken) return res.sendStatus(401)
        const refreshToken = cookie.refreshToken
        res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'None', secure: true })
        // is refreshToken still valid on our side? 

        const foundUser = await personnesService.getPersonneByRefreshToken({ refreshToken })
        if (!foundUser) return res.sendStatus(403)
        try {
            const decoded = verifyJwt(refreshToken)
            const tokenPayload = {
                nom: foundUser.nom,
                prenom: foundUser.prenom,
                email: foundUser.email,
                // roles:user.roles
            }
            if (decoded.email !== foundUser.email) return res.sendStatus(403)
            const accessToken = signJwt({ payload: tokenPayload, expiresIn: '1d' })
            return res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' }).json(accessToken) 
        } catch (error) {
            console.log(error)
            return res.sendStatus(401); // expired refresh token
        }
    }


}

export default exposeController