# TheChember's HookBook

AI hook generator for Skyfluence performance creatives.

## Deploy to Vercel (5 min)

1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. In Environment Variables add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key from console.anthropic.com
4. Deploy

## Local dev

```bash
cp .env.example .env.local
# add your ANTHROPIC_API_KEY to .env.local
npm install
npm run dev
# open http://localhost:3000
```

## How it works

Frontend (`components/HookBook.tsx`) calls `/api/messages`.  
Server route (`app/api/messages/route.ts`) adds the API key and forwards to Anthropic.  
API key never exposed to the client.
