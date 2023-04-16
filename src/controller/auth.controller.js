const { createAccessToken, createRefreshToken } = require('../utils/generateTokens.util')

const handleSignIn = (req, res) => {
    console.log("call got")
    const user = 'riyas'
    const accessToken =  createAccessToken(user)
    const refreshToken = createRefreshToken(user)
    
    res.json({
        refreshToken,
        accessToken   
    })
}

// console.log(handleSignIn)

module.exports = {
    handleSignIn
}

    