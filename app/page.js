import Link from 'next/link'
export default function Home(){
return <main style={{padding:'40px',textAlign:'center'}}>
<h1 style={{fontSize:'52px'}}><span style={{color:'#1d4ed8'}}>Join</span><span style={{color:'#f97316'}}>HireRank</span></h1>
<p>Premium hiring platform for students, freshers and startups.</p>
<div style={{display:'flex',gap:'10px',justifyContent:'center',flexWrap:'wrap'}}>
<Link href='/signup'>Join Free</Link>
<Link href='/login'>Login</Link>
<Link href='/jobs'>Browse Jobs</Link>
<Link href='/dashboard'>Dashboard</Link>
</div>
</main>}
