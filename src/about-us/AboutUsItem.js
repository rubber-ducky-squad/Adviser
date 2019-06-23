import Component from '../Component.js';

class AboutUsItem extends Component {
    renderTemplate() {
        return /*html*/`
            <section>
                <li class="about-item">
                    <div>
                        <h2>Vasily Markov</h2>
                        <img src="./assets/vasily.jpg"> 
                        <p class="personal-advice">"Want to experience euphoria?<br> Find a typo" </p>
                        <p>Student at Alchemy Code Lab. Excited about new experiences, and lifelong learning.
                        Devoted sleepyhead.</p>
                        <p><a href="https://github.com/Vasily93">Checkout his github.</a></p>
                    </div>
                </li>
                <li class="about-item">
                    <div>
                        <h2>Danny Suarez</h2>
                        <img src="./assets/danny.jpg">
                        <p class="personal-advice">“Always commit to Git”</p>
                        <p>Currently spending 8 hours a day staring at screen.</p>
                        <p><a href="https://github.com/DannySuarez">Checkout his github.</a></p>
                    </div>
                </li>
                <li class="about-item">
                    <div class='item-content'>
                        <h2>Alex Ramirez de Cruz</h2>
                        <img src="./assets/alex.jpg">
                        <p class="personal-advice">"1) Be courageous. 2) Dare to fail. 3) Learn. 4) Dare to fail again. 5) Reapeat."</p>
                        <p>Alex is a software developer, theatre artist, and avid embroiderer...Oh
                        and she is also an obsessive list-maker, (so she is excited to use Moddo)!</p>
                        <p><a href="https://github.com/aramirezdecruz3148">Checkout her github.</a></p>
                    </div>
                </li>
                <li class="about-item">
                    <div>
                        <h2>Emily</h2>
                        <img src="./assets/emily.jpg">
                        <p class="personal-advice">"Don't take advice from me"</p>
                        <p>Single mom, cat lady, old vegan.</p>
                        <p><a href="https://github.com/mle4d">Checkout her github.</a></p>
                    </div>
                </li>
                <li class="about-item">
                    <div>
                        <h2>Jon Forney</h2>
                        <img src="./assets/jon.jpg">
                        <p class="personal-advice">"If you ever drop your keys into a river of molten lava, let 'em go, because man, they're gone."</p>
                        <p>Jon has spent the last 8 weeks going insane (and learning JavaScript) and he is very excited to have the next week off.</p>
                        <p><a href="https://github.com/MustardJoe">Checkout his github.</a></p>
                    </div>
                </li>
                <li>*</li>
                <li>*</li>
                <li>*</li>
                <li>*</li>
            </section>
        `;
    }
}

export default AboutUsItem;