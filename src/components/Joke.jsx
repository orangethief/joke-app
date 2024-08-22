import { useState } from "react";

const Joke = () => {
    const [joke, setJoke] = useState({setup:'',punchline:''});
    const [showPunchline, setShowPunchline] = useState(false);
    const [animate, setAnimate] = useState(false);
    

    const fetchJoke = () => {

    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
        if (!response.ok) {
            throw new Error ('Sorry, something went wrong!');
        }
        return response.json();
    })
    .then(data =>
        {
        console.log(data);
        setJoke ({ setup: data.setup, punchline: data.punchline});
        
        setShowPunchline(false);
        setTimeout(() => {
            setShowPunchline(true);
        setAnimate(true)}, 3500);
        })
    .catch(error => console.error ("Sorry, something went wrong!", error));
    }

  return (
    <div className="hero bg-base-100  min-h-[60vh] max-auto">
  <div className="hero-content text-center">
    <div className="max-w-md my-16">
      <h1 className="text-5xl font-bold">Your Random Joke</h1>
      <div className="py-6" id="joke-p1">
<p className="py-6 font-bold text-lg">{joke.setup}</p>
  <p className={`py-6 ${animate ? 'zoom-animation' : ''}`}>
    {showPunchline && joke.punchline}</p>
        

      </div>
      <button className="btn btn-primary" onClick={fetchJoke}>Get Your Joke</button>
    </div>
  </div>
</div>
  )
}

export default Joke;