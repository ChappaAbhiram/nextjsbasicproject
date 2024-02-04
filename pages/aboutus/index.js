import Link from "next/link";
function Aboutpage(){
    const developers = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' },
      ];
      return (
        <div>
          <h1>Developer List</h1>
          <ul>
            {developers.map(dev => (
              <li key={dev.id}>
                <Link href={`/aboutus/${dev.id}`}>
                {dev.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
}
export default Aboutpage;