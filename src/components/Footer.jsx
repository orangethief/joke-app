
import { FaRegLaughSquint, FaRegLaugh,FaRegSmileWink  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex justify-between bg-neutral text-neutral-content p-10 rounded-b mt-6 max-auto">
  <div>
  <FaRegSmileWink className="text-6xl md:text-8xl" />
  </div>
  <div>
  <FaRegLaughSquint className="text-6xl md:text-8xl"/>


  </div>
  <div>
  <FaRegLaugh className="text-6xl md:text-8xl" />
  </div>

</footer>
  )
}

export default Footer