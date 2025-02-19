import { useNavigate } from "react-router-dom"
import notFoundImage from "../assets/images/notfound.webp"
export function NotFound() {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate("/")
    }
    return (
        <div className="mt-10 mb-15  items-center ">
            <div className="flex flex-col w-full max-w-200 items-center m-auto">
                <img  className="w-full max-w-100" src={notFoundImage} alt="404 image" />
                <button className="mt-10 border border-gray-600 px-2 py-1" onClick={handleClick}>Go Back</button>
            </div>
        </div>
    )
}