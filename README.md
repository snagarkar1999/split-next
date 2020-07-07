# Example Next.js + Split on client and server-side

This example uses Split JS SDK on a Web app based on React and Next.js.
On the server-side, the SDK is used to get a treatment.
On the client-side, the SDK is used to track events.

## How to use

 - Add your Split API keys:
   - Split API Key (Browser type) at `/pages/_app.js`
   - Split API Key (SDK type) at `/server/splitClient.js`

 - Update the name of your Split at `/constants.js`

 - Install and run the app:

```bash
$ npm install
$ npm run dev
```

 - Open `http://localhost:3000/?userkey=<some_user_id>` in your browser. If not `userkey` is provided, `anonymous` is used as user key.# split-next
