import Inspiration from '../src/home/Inspiration.js';

const test = QUnit.test;

QUnit.module('Inspiration Component');

test('renders with full user props', assert => {

    //arrange
    const advice = {
        advice: 'Do not pee on the toilet seat'
    };
    const pic = {
        url: 'https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg'
    };
    const inspiration = new Inspiration({ advice, pic });
    const expected = /*html*/ `
        <div class="advice-pic">
            <h1 class="advice">"Do not pee on the toilet seat"</h1>
            <img src="https://lh5.googleusercontent.com/-EnRNBAYvURk/AAAAAAAAAAI/AAAAAAAAAK8/cMJNFAVX5SE/photo.jpg" alt="random stock photo"><br>    
        </div>
    `;

    //act
    const rendered = inspiration.renderTemplate();
    
    //assert
    assert.htmlEqual(rendered, expected);
});