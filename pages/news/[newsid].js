import { useRouter } from "next/router";

function Detailpage(){
    const router = useRouter();
   console.log(router.query.newsid);
    return <h1>The Detail page</h1>
}
export default Detailpage;