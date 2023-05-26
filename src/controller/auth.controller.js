import { createAccessToken, createRefreshToken } from '../utils/generateTokens.util.js'

const handleSignIn = (req, res) => {
    console.log("call got")
    const user = 'riyas'
    const accessToken = createAccessToken(user)
    const refreshToken = createRefreshToken(user)

    res.json({
        refreshToken,
        accessToken
    })
}

// console.log(handleSignIn)

export default {
    handleSignIn
}

