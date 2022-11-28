# Testing how render deploys work

## Steps

1. From [your dashboard](https://dashboard.render.com/), choose a new service type
2. Connect a repo, then fill the required config
   - Root directory: useful for monorepos
   - Build command: e.g `npm ci --omit=dev`
   - Start command: e.g `npm start`
   - `Advanced > Environments` to add env vars 
   - `Advanced > Auto-Deploy` to choose if you want CD on push
   - `Advanced > Build filters` is useful for auto-deploys, e.g: ignoring deploys triggered by readme changes
