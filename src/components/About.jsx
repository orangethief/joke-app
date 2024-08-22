import { MdChildCare, MdElderlyWoman } from "react-icons/md";
import { FaPersonHalfDress } from "react-icons/fa6";


const About = () => {
  return (
    <div className="max-auto min-h-[65vh] pr-6 pl-2 py-4">
        <div className="join join-vertical">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked/>
            <div className="collapse-title text-xl font-medium">
            <div className="prose"><h2>Why is laughing important?</h2></div>
            </div>
            <div className="collapse-content">
              <p>Laughter is a powerful tool that brings numerous benefits to our lives. It serves as a natural stress reliever, releasing endorphins that enhance our mood and promote a sense of well-being. Physically, laughter improves heart health by increasing blood flow and relaxing blood vessels. It can also strengthen the immune system, helping us fight off illness more effectively. Beyond health, laughter fosters connections with others, creating bonds and enhancing relationships. It acts as a social glue, allowing us to share joy and lightness in everyday moments. Furthermore, laughter can inspire creativity, enabling us to think outside the box and approach challenges with a fresh perspective. In tough times, a good laugh can provide relief and help us cope with difficult situations. Ultimately, embracing laughter in our lives enriches our experiences and enhances our overall happiness.</p>
            </div>
         </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium w-full">
            <div className="prose"><h2>When has your neighbour laughed the last time?</h2></div>
          </div>
    <div className="collapse-content">
    <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdChildCare className="text-4xl"/>
    </div>
    <div className="stat-title">Children</div>
    <div className="stat-value">300 laughs</div>
    <div className="stat-desc">per day</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaPersonHalfDress className="text-4xl"/>
    </div>
    <div className="stat-title">Adults</div>
    <div className="stat-value">15 - 100 laughs</div>
    <div className="stat-desc">per day</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
    <MdElderlyWoman className="text-4xl"/>
    </div>
    <div className="stat-title">Seniors</div>
    <div className="stat-value">less frequently</div>
    <div className="stat-desc"></div>
  </div>
</div>
      
<div className="w-full">
<div className="prose"><h3 className="pt-4">Factors Influencing Laughter Frequency</h3></div>
<div className=" w-full"><blockquote>
  <ul className="list-none">
    <li>1. Social Interactions: Engaging in conversations, watching comedies, or spending time with friends can increase laughter.</li>
    <li>2. Environment: A positive or humorous environment encourages more laughter.</li>
    <li>3. Cultural Differences: Different cultures have varying attitudes toward humor and laughter, affecting how often people laugh.</li>
    <li>4. Personality Traits: Individuals with a more playful or outgoing personality tend to laugh more than those who are more reserved.</li>
  </ul>
  </blockquote></div>
  <p>Overall, while there is a general range for laughter frequency, individual experiences can vary widely.</p>
    </div>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">
    <div className="prose"><h2>Why we do this!</h2></div></div>
    <div className="collapse-content">
      <p>Welcome to our Random Jokes page! Here, we believe that laughter is the best medicine, and what better way to brighten your day than with a spontaneous joke? Our platform is dedicated to bringing you a never-ending supply of humor, one joke at a time.

Whether you're looking for a quick chuckle or a belly laugh, our collection of random jokes is sure to have something for everyone. We pull from a wide range of categories, so you never know what you might get—a clever pun, a classic one-liner, or a joke that makes you think.

So, sit back, relax, and let the laughs roll in. We're here to keep the fun going, and we hope our jokes bring a smile to your face!</p>
    </div>
  </div>
</div>
        
        
        </div>
  )
}

export default About