
import { Link } from "react-router-dom"
import { ModeToggle } from "./ModeToggle"
import { Button } from "./ui/button"
const Header = () => {
  return (
    <nav className='w-full h-[60px] bg-gray-900 text-white p-3 flex justify-between items-center'>
      <Link to="/">
        <h2 className="font-bold text-2xl">JD Complier</h2>
      </Link>

      <ul className="flex gap-2">
        <li>
          <Link to="/compile" className=" mr-4">
            <Button variant={"secondary"}>Complie</Button>
          </Link>
          <ModeToggle /> 
        </li>
      </ul>
    </nav>
  )
}

export default Header