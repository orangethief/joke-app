

const Contact = () => {
  return (
    <div className="w-full">
        <div className="prose max-w-full m-6">
          <h1>You want to change your mood and laugh more?</h1>
          <h3>Subscribe to our newsletter and don't miss any laughs!</h3>
        </div>
        <div className="join m-6">
          <input className="input input-bordered join-item" placeholder="Email" />
          <button className="btn bg-neutral join-item rounded-r-full">Subscribe</button>
        </div>
        
        <div className="flex justify-center">
        <div className="w-3/5 h-auto diff aspect-[16/9] ">
    <div className="diff-item-1">
    <img src="https://images.unsplash.com/photo-1474901879171-d6f34b3a99b0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="crying woman by Danie Franco" />
    </div>
    <div className="diff-item-2">
      <img
        alt="glückliche Frau by Vinicius Wiesehofer"
        src="https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
    <div className="diff-resizer"></div>
  </div></div></div>
  )
}

export default Contact