import '../styles/globals.css'
import Layout from '../components/layout'

// amplify 
import { Amplify } from 'aws-amplify';
// import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);
const component = {Header(){return <h1>hello</h1>}}

export default function App() {
  return (
    <Authenticator components ={component}> 
    {({ signOut, user}) => (
  <Layout>
  
        <main>
          <h1>Hello, {user.username}</h1>
          <button onClick={signOut}>Log out</button>
        </main>
      
  </Layout>
  )}
  </Authenticator>
  )
}

