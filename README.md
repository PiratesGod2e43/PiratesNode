# PiratesNodes

A Next.js starter scaffold for a Minecraft/VPS hosting control platform.

## Run in GitHub Codespaces

```bash
npm install
npm run dev
```

Open port 3000 in the Codespaces **Ports** tab.

## Included
- Responsive dark-blue PiratesNodes dashboard preview
- Manage Servers and planned module navigation
- Owner account names displayed as setup-pending: `PiratesGaming` and `slashingdugu`

## Not yet connected
This is a frontend starter, not a production hosting service. Login, registration, password storage, role enforcement, billing, plugin/mod downloads, Minecraft version changes, node management and server provisioning still require backend implementation and testing.

## Security
No passwords are included in this archive. Set unique passwords through a secure, one-time owner bootstrap flow after authentication and database setup. Never commit secrets to Git. Use Codespaces Secrets for development secrets and a suitable secret manager in production.

## Public 24/7 hosting
GitHub Codespaces is a development environment and should not be used as the always-on production hosting infrastructure. Deploy the website to an appropriate production host and connect it to secured, always-on server nodes. Configure monitoring, backups, firewall rules, billing webhooks and incident alerts before accepting customers.
