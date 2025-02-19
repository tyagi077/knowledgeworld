import { useParams } from "react-router-dom";
import { DescCard } from "../components/DescCard";

export function Description(){
    const {id} = useParams()
    return <div>
        <div className="">
            <div className="bg-[#0F0C11] border-1 border-[#463f4b] mt-10 mb-10">
            <DescCard id={id}/> 
            </div>
        </div>
    </div>
}