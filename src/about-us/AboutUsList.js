import Component from '../Component.js';
import AboutUsItem from './AboutUsItem.js';

class AboutUsContent extends Component {
    render() {
        const dom = this.renderDOM();

        const aboutUsItem = new AboutUsItem();
        dom.appendChild(aboutUsItem.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <ul id="about-us-list"></ul> 
        `;
    }
}

export default AboutUsContent;