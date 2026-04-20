import Link from 'next/link'
export default function Login(){
 return (
  <main style={{padding:'30px'}}>
   <h1>Login</h1>
   <input placeholder='Email' style={{display:'block',marginBottom:'10px',padding:'10px'}}/>
   <input placeholder='Password' type='password' style={{display:'block',marginBottom:'10px',padding:'10px'}}/>
   <button>Login</button>
   <br/><br/><Link href='/'>Back Home</Link>
  </main>
 )
}
