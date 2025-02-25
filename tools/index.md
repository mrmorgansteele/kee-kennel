---
pagination:
  data: data.tools
  size: 1
  alias: tool
  generatePageOnEmptyData: true
permalink: ./tools/{{ tool.name | slugify }}/
layout: pages/tools.html
body_class: tool
eleventyComputed:
  title: "{{ tool.name }}"
---

# {{ [tool.slug].title }}

{% assign sections = [tool.slug].sections %}
{%- for section in sections -%}
  <h2>{{ section.section_title }}</h2>
  {%- for shortcuts in section.shortcuts -%}
    <div class="shortcut-block">
      {% if shortcuts.operation %} <p>{{ shortcuts.operation }}</p> {% endif %}
      {%- for actions in shortcuts.actions -%}
        <div class="shortcut-block__inner">
          <span>{{ actions.outcome }}</span>
          <span>{{ actions.keys }}</span>
        </div>
      {%- endfor -%}
    </div>
  {%- endfor -%}
{%- endfor -%}
