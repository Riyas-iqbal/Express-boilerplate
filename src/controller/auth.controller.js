import { createAccessToken, createRefreshToken } from '../utils/generate.tokens.util.js'

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

export {
    handleSignIn
}

