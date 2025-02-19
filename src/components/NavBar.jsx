import { Link } from 'react-router-dom'
export function NavBar(props){

    return (<div>
        <div className="bg-[#1F1F1F]  px-[20px] sm:px-[50px] md:px-[100px] xl:px-[200px] py-5 flex justify-between">
         <div>{props.title}</div>
         <div className="links">
            <ul className=" space-x-3 hidden sm:flex text-[#7b7a7a] ">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">{props.link2}</Link></li>
                <li><Link to="/country">{props.link3}</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
        </div>
    </div>)
}