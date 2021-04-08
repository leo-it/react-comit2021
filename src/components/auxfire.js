/*  
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
   const firebase = useFirebaseApp()
    const [user, setUser ]= useState("")
    const [emailError, setEmailError]=useState("")
    const [PasswordError, setPasswordError]=useState("")
    const [hasAccount, setHasAccount]= useState(false)
 
    const clearImputs = () => {
        setEmail("")
        setPassword("")
    }

    const clearErrors = () => {
        setEmailError("")
        setPasswordError("")
    }


    const handleLogin = () => {
        clearErrors()
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disable":
                    setEmailError(err.mesage)
                    break;
                    case "auth/wrong-password":
                        setPasswordError(err.mesage)
                        break;

            }
        })
    }

    const handleSignup = () => {
        clearErrors()
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.mesage)
                    break;
                    case "auth/weak-password":
                        setPasswordError(err.mesage)
                        break;

            }
        })
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener =() => {
        if(user){
            clearImputs()
            setUser(user)
        }else{
            setUser("")
        }
    }

    useEffect(() => {
        authListener();
    },[])
 */
/*     const submit =  (e) => {
        e.preventDefault()
       firebase.auth().createUserWithEmailAndPassword(email,password)
       .then((res) => alert("usuario registrado"))
       .catch(err => console.log(err))
    } */

/* 
const logout =  (e) => {
    e.preventDefault()
    console.log("salir");
     firebase.auth().signOut()
     .then(() => { 
        console.log("signup out");
    })
    .catch(function(error) {
        console.log('Error occurred:', error);
    })
} */
/* 
firebase.auth().onAuthStateChanged((user) => {
    if (user ){
        console.log(user);
    }else{
        console.log("no usuariop");
    }
}
 */



/* import firebase from 'firebase'
 */
/* var firebaseConfig = { 
    apiKey: "AIzaSyCrIPLM21_BHXrFWosiX5hVVSK29BNy3GQ",
    authDomain: "trailer-17225.firebaseapp.com",
    projectId: "trailer-17225",
    storageBucket: "trailer-17225.appspot.com",
    messagingSenderId: "1045794358280",
    appId: "1:1045794358280:web:6de1ba995df8392d137dbd",
    measurementId: "G-NGWP9EBYN9"

}

const fire = firebase.initializeApp(firebaseConfig)
 */
/* export default fire */