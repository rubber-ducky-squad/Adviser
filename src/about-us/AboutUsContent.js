import Component from '../Component.js';

class AboutUsContent extends Component {
    renderTemplate() {
        return /*html*/`
            <ul>
                <li class="Vasily">
                    <img>
                    <h1>Vasily</h1>
                    <p>Stuff about Vasily</p>
                </li>
                <li class="Danny">
                    <img>
                    <h1>Danny</h1>
                    <p>Stuff about Danny</p>
                </li>
                <li class="Alex">
                    <img>
                    <h1>Alex</h1>
                    <p>Stuff about Alex</p>
                </li>
                <li class="Emily">
                    <img>
                    <h1>Emily</h1>
                    <p>Stuff about Emily</p>
                </li>
                <li class="Jon">
                    <img>
                    <h1>Jon</h1>
                    <p>Stuff about Jon</p>
                </li>
            </ul>
        `;
    }
}
export default AboutUsContent;