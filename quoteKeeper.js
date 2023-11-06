
// <html>
// <head>
// <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
// <link rel= "stylesheet" href= "stylesheets/style.css">
// </head>
// <body>

// <div id="container">
// <h1> Leave A Message </h1>

// <section id="messages"></section>

// <label for="message">Your message:</label>
// <textarea id="quote">
//   Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.
// </textarea>

// <label for="attributed">Your attributed:</label>
// <input id="attributed" value="Marianne Williamson">

// <label for="source">Your source:</label>
// <input id="source" value="A Return to Love: Reflections on the Principles of A Course in Miracles">


// <input type="submit">
// </div>
// </body>
// </html>

const {assert} = require('chai');
describe("User visits root", () => {
  describe("posting a quote", () => {
    it('saves quote and metadata submitted by user', () => {
      const quote = 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.';
      const attributed = 'Marianne Williamson';
      const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles';

      browser.url('/')
      browser.setValue('textarea[id=quote]', quote)
      browser.setValue('input[id=attributed]', attributed)
      browser.setValue('input[id=source]', source)
      browser.click('input[type=submit]')

      assert.include(browser.getText('#quote'), quote)
      assert.include(browser.getValue('input[id=attributed]'), attributed);
      assert.include(browser.getValue('input[id=source]'), source);
    })
  })
})