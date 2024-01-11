import {useState} from 'react'
import { signInWithPopup, GoogleAuthProvider,sendSignInLinkToEmail} from 'firebase/auth';
import { auth } from '../src/firebase';
const SignIn = () => {
    const [email, setemail] = useState<string>('');
    const provider = new GoogleAuthProvider();
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:5173/',
        // This must be true.
        handleCodeInApp: true,
      };
      async function onSignin (e:any) {
            e.preventDefault()
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                // ...
                console.log(email);
            })
            .catch((error) => {
                console.log(error);
                // ...
            })
        }
    async function googleSignIn  () {
        // sign in
         signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                if(!credential){
                    return
                }
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                 console.log(error)
                // ...
            });
    
        }
  return (
    <div className="text-center">
         <h1>Sing In page</h1>
           <form onSubmit={onSignin}>
                <input type='email' placeholder='type email' value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                <button type='submit'>Sign in</button>
           </form>
            <button type='submit' onClick={googleSignIn}>Goolge Login</button>
    </div>
  )
  }

export default SignIn
