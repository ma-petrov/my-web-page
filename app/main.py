from aiohttp.web import Application, get, post, run_app

from utils import render_template
from links import Link


with open('/opt/mnt/logs/js.log', 'w') as f:
    f.write('Hello\n')


async def index(request):
    print('loaded')
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


async def log(request):
    with open('/opt/mnt/logs/js.log', 'a') as f:
        try:
            f.write(f'{await request.content.readline()}\n')
        except Exception as e:
            f.write(e)


app = Application()
app.add_routes([
    get('/', index),
    post('/log', log),
])
run_app(app)