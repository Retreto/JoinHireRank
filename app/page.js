import Link from 'next/link'
export default function Home(){
 return (
  <main style={{padding:'40px',textAlign:'center'}}>
   <h1><span style={{color:'#1d4ed8'}}>Join</span><span style={{color:'#f97316'}}>HireRank</span></h1>
   <p>Get Hired Faster. Hire Smarter.</p>
   <div style={{display:'flex',gap:'10px',justifyContent:'center',flexWrap:'wrap'}}>
    <Link href='/signup'>Join Free</Link>
    <Link href='/login'>Login</Link>
    <Link href='/jobs'>Jobs</Link>
   </div>
  </main>
 )
}
