import Link from 'next/link'
export default function Signup(){
 return (
  <main style={{padding:'30px'}}>
   <h1>Create Account</h1>
   <input placeholder='Full Name' style={{display:'block',marginBottom:'10px',padding:'10px'}}/>
   <input placeholder='Email' style={{display:'block',marginBottom:'10px',padding:'10px'}}/>
   <button>Join Free</button>
   <br/><br/><Link href='/'>Back Home</Link>
  </main>
 )
}
