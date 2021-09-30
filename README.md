# Netlify Serverless Function with Netlify Functions

## airtable database with airtable-node

### Netlify Deploy Build [ Show Advanced ] New Available All in .env

## Netlify TOML for create-react-app

```toml
# For build
[build]
command = 'yarn run build'
functions = './functions'
pubilch = '/build'

# for api
[[redirects]]
from = '/api/*'
status = 200
to = '/.netlify/functions/:splat'

# Home
[[redirects]]
from = '/*'
status = 200
to = '/index.html'
```

## Build Command

`"build": "CI= react-scripts build"`
