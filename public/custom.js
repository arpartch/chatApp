// global vairables....
let client, channel, username, activeUser;

client = new StreamChat('<36thr2wa5bn5>');
```
> Again, make sure to replace the `<STREAM_APP_KEY>` placeholder with your own key.
Next, add a function for generating token to the `public/custom.js` file:
```js
// [...]

async function generateToken(username) {
  const { token } = (await axios.get(`/token?username=${username}`)).data;
  return token;
}

async function initializeClient() {
    const token = await generateToken(username);
  
    await client.setUser(
      {
        id: username,
        name: 'The user name', // Update this name dynamically
        image: 'https://bit.ly/2u9Vc0r' // user image
      },
      token
    ); // token generated from our Node server
  
    return client;
  }