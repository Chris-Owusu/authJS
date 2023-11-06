{/* <html>
<head>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel= "stylesheet" href= "stylesheets/style.css">
</head>
<body>

<div id="container">
<h1> Leave A Message </h1>

<section id="messages"></section>

<label for="author">Your name:</label>
<input id="author">

<label for="message">Your message:</label>
<textarea id="message"></textarea>

<input type="submit">
</div>
</body>
</html> */}

const {assert} = require('chai');

describe('User visits root', () => {

  describe('without existing messages', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#messages'),'');
    });
  });

  describe('posting a message', () => {
    it('saves the message with the author information', () => {
      
      const message ='feature tests often hit every level of the TDD Testing Pyramid';
      const author = 'username';

      browser.url('/');
      browser.setValue('input[id=author]', author);
      browser.setValue('textarea[id=message]', message);
      browser.click('input[type=submit]');

      assert.include(browser.getText('#messages'), message);
      assert.include(browser.getText('#messages'), author);
 
    });
  });
});