from os import path
from aiohttp import web

from utils import render_template

async def handle(request):
    text = render_template(
        'templates/index.html',
        dict(links=[
            dict(href=l[0], img_src=l[1])
            for l in [
                ('mailto:petrov.ma@icloud.com', '/static/images/icons/email.svg'),
                ('https://www.linkedin.com/mwlite/in/михаил-петров-559b70240', '/static/images/icons/linkedin.svg'),
                ('https://t.me/clipdecliprepeat', '/static/images/icons/telegram.svg'),
                ('https://instagram.com/clipdecliprepeat', '/static/images/icons/instagram.svg'),
                ('https://github.com/ma-petrov', '/static/images/icons/github.svg'),
            ]
        ])
    )
    return web.Response(text=text, content_type='text/html')

app = web.Application()
app.add_routes([web.get('/', handle)])
web.run_app(app)