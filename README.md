# Welcome to Kee's Kennel!

Kee's Kennel is just a simple place to store all those pesky keyboard shortcuts I use for a week and then forget over a long weekend!

## Components

* Eleventy (11ty)
* LightningCSS with Sass

## Adding a New Tool

1. Open ```/_data/data.json```
1. Add a new section for the new tool. **NOTE:** They will appear in the order they are placed within the file.
1. Save and close file.
1. Create a new ```.json``` file under ```/_data/```. It should be named with the *slug* that was added to ```/_data/data.json```.
1. The basic structure of this file without any shortcutes should be:
    ```json
    {
      "title": "TITLE",
      "sections": [
      ]
    }
    ```
