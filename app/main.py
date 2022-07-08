from os import path
from aiohttp import web

async def handle(request):
    with open('templates/index.html', 'r') as f:
        text = f.read()
    # return web.Response(text=text)
    return web.Response(text=text, content_type='text/html')

app = web.Application()
app.add_routes([web.get('/', handle)])
web.run_app(app)