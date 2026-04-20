import Link from 'next/link'
export default function Login(){return <main style={{padding:'30px'}}><h1>Login</h1><input placeholder='Email'/><br/><br/><input placeholder='Password' type='password'/><br/><br/><button>Login</button><br/><br/><Link href='/'>Home</Link></main>}
