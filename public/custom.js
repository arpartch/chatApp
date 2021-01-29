// global vairables....
let client, channel, username, activeUser;

client = new StreamChat('<STREAM_APP_KEY>');
```
> Again, make sure to replace the `<STREAM_APP_KEY>` placeholder with your own key.
Next, add a function for generating token to the `public/custom.js` file:
```js
// [...]

async function generateToken(username) {
  const { token } = (await axios.get(`/token?username=${username}`)).data;
  return token;
}