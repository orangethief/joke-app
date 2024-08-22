
import { FaRegLaughSquint, FaRegLaugh,FaRegSmileWink  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer flex justify-between bg-neutral text-neutral-content p-10 rounded-b m-6">
  <div>
  <FaRegSmileWink size={100} />
  </div>
  <div>
  <FaRegLaughSquint size={100} className="md:text-6xl lg:text-8xl"/>


  </div>
  <div>
  <FaRegLaugh size={100} />
  </div>

</footer>
  )
}

export default Footer