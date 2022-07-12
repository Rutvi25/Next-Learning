import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const userCollection = client.db('next-auth').collection('users');
        const user = await userCollection.findOne({ email: credentials.email });
        if(!user) {
          client.close();
          throw new Error('No user found!');
        }
        const isValid = await verifyPassword(credentials.password, user.password);
        if(!isValid) {
          client.close();
          throw new Error('Couldn\'t logged you in!');
        }
        client.close();
        return { email: user.email };
      }
    })
  ]
})