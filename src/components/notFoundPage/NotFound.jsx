import { Link } from "react-router-dom";
import NotFoundImg from "../../../public/notfound.jpg";
function NotFound() {
  return (
    <div className="w-full h-[91vh] flex flex-col items-center justify-center">
        <img src={NotFoundImg} alt="Not Found" className="w-[90%] md:w-[40%] lg:w-[35%] h-[60%]" />
        <p className="text-center text-base font-medium text-blue-700 mb-4">Hey you've mistakenly reached the wrong path. Let's get you back to the right path!</p>
        <Link to={"/"} className="px-6 py-4 bg-blue-400 text-white rounded-lg text-base font-bold hover:bg-blue-700 transition-colors">Go Back Home</Link>
    </div>
  )
}

export default NotFound