import { useRouter } from "next/router";
function Developerpage(){
    const router = useRouter();
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]

        const devId = router.query.developerId;
        const selectedDevloper = details.find(dev=>dev.id.toString()===devId);
        if(!selectedDevloper){
            return <h1>Developer not found</h1>
        }
        return <h1>{selectedDevloper.name} is a {selectedDevloper.role}</h1>
}
export default Developerpage;