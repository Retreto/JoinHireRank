import Link from 'next/link'
export default function Jobs(){
 return (
  <main style={{padding:'30px'}}>
   <h1>Jobs</h1>
   <p>Frontend Developer - Remote</p>
   <p>Data Analyst - Bengaluru</p>
   <p>Backend Engineer - Hyderabad</p>
   <Link href='/'>Back Home</Link>
  </main>
 )
}
