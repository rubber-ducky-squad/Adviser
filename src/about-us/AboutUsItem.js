import Component from '../Component.js';
class AboutUsItem extends Component {
    renderTemplate() {
        return /*html*/`
            <section>
                <li class="Vasily">
                    <img>
                    <p></p>
                    <h2>Vasily</h2>
                    <p>Stuff about Vasily</p>
                </li>
                <li class="Danny">
                    <img>
                    <p></p>
                    <h2>Danny</h2>
                    <p>Stuff about Danny</p>
                </li>
                <li class="Alex">
                    <img>
                    <p>"1) Be courageous. 2) Dare to fail. 3) Learn. 
                    4) Dare to fail again. 5) Reapeat."</p>
                    <h2>Alex Ramirez de Cruz</h2>
                    <p>Alex is a software developer, theatre artist, and avid embroiderer...Oh
                    and she is also an obsessive list-maker, (so she is excited to use Moddo)!
                    <a href="https://github.com/aramirezdecruz3148">Checkout her github.</a></p>
                </li>
                <li class="Emily">
                    <img>
                    <p></p>
                    <h2>Emily</h2>
                    <p>Stuff about Emily</p>
                </li>
                <li class="Jon">
                    <img>
                    <p></p>
                    <h2>Jon</h2>
                    <p>Stuff about Jon</p>
                </li>
            </section>
        `;
    }
}
export default AboutUsItem;