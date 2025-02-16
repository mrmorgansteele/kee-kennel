---
pagination:
  data: data.tools
  size: 1
  alias: tool
  generatePageOnEmptyData: true
permalink: tools/{{ tool.name | slugify }}/
layout: pages/tools.html
body_class: tool
eleventyComputed:
  title: "{{ tool.name }}"
---

# {{ [tool.slug].title }}

{% assign shortcuts = [tool.slug].shortcuts %}
{%- for shortcut in shortcuts -%}
  <p>{{ shortcut.action }}: {{ shortcut.keys }}</p>
{%- endfor -%}
