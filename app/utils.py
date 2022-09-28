import os

from jinja2 import Template


def render_template(template: str, args: dict) -> str:
    """Get template name, dict of args and returns rendered string

    :param template: filename of template
    :param args: argumets for rendering

    :return: rendered str    
    """
    with open(template, 'r') as f:
        t = f.read()
    return Template(t).render(**args)