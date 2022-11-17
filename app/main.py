from aiohttp.web import Application, get, run_app

from utils import render_template
from links import Link


async def index(request):
    return render_template(
        'templates/index.html',
        links=[
            Link('mailto:petrov.ma@icloud.com', '/static/images/icons/email.svg'),
            Link('https://www.linkedin.com/mwlite/in/михаил-петров-559b70240', '/static/images/icons/linkedin.svg'),
            Link('https://t.me/clipdecliprepeat', '/static/images/icons/telegram.svg'),
            Link('https://instagram.com/clipdecliprepeat', '/static/images/icons/instagram.svg'),
            Link('https://github.com/ma-petrov', '/static/images/icons/github.svg'),
        ]
    )


app = Application()
app.add_routes([
    get('/', index),
])
run_app(app)