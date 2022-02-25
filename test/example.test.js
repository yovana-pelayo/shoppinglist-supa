// IMPORT MODULES under test here:
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem will display a li description', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="complete">Buy eggs and milk please</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ description: 'Buy eggs and milk please', complete: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
