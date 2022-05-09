import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyAPI, { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken(token) {
  try {
    spotifyAPI.setAccessToken(token.accessToken)
    spotifyAPI.setRefreshToken(token.refreshToken)
    
    const { body: refreshedToken } = await spotifyAPI.refreshAccessToken() 
    console.log('Refreshed Token is: ', refreshedToken)

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken
    }
    
  } catch(error) {
    console.log(error)
    return {
      ...token,
      error: 'refreshAccessTokenError'
    }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial signin
      if(account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          userName: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000
        }
      }
      // Returning previous token is access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('Existing access token is valid')
        return token
      }
      // Refreshing the access token
      console.log('access token has expired')
      return await refreshAccessToken(token)
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.user.username = token.username
      return session
    }
  }
})