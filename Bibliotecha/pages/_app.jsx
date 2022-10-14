import '../styles/globals.css'
import Layout from '../components/layout'

// amplify 
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);

function App({ Component, pageProps,signOut, user }) {
  return (
  <Layout>
  <Component {...pageProps} />
  <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
  </Layout>
  )
}

export default withAuthenticator(App);