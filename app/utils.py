from jinja2 import Template
from aiohttp.web import Response

def render_template(template: str, **kwargs) -> str:
    """Get template name, dict of args and returns rendered string

    :param template: filename of template
    :param args: argumets for rendering

    :return: rendered str    
    """
    with open(template, 'r') as f:
        t = f.read()
    text = Template(t).render(**kwargs)
    return Response(text=text, content_type='text/html')