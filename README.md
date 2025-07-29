# client-demo

### What is this?
This is a demo for a client on working with:

- Figma
- ShadCN
- Code Connect


### Tech Stack:
- Vite
- TypeScript
- TailWind
- ShadCN
- Card Component


### Code Connect commands:

This will install the code-connect module, it only needs to run once (per machine).
```bash
sudo npm install --global @figma/code-connect@latest
```

This will run the code-connect wizard, don't forget to add the token.
```bash
npx figma connect --token=
```

This will actually publish it to Figma so it's visible on Dev Mode.
```bash
npx figma connect publish --token=
```