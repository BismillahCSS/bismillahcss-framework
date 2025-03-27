import re
import os

# Root directory ka path
ROOT_DIR = "/workspaces/bismillahcss-framework"

# CSS Files ka path
css_files = [
    os.path.join(ROOT_DIR, "src/core/utilities.css"),
    # os.path.join(ROOT_DIR, "src/components/buttons.css"),
]

def remove_duplicate_css(file_paths):
    selectors = {}

    for file_path in file_paths:
        if not os.path.exists(file_path):
            print(f"❌ File not found: {file_path}")
            continue

        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()

        blocks = re.findall(r"([^{]+)\s*\{([^}]*)\}", content, re.DOTALL)

        new_content = []
        for selector, properties in blocks:
            selector = selector.strip()
            properties = properties.strip()

            if selector not in selectors:
                selectors[selector] = properties
                new_content.append(f"{selector} {{\n{properties}\n}}\n")

        with open(file_path, "w", encoding="utf-8") as file:
            file.writelines(new_content)

        print(f"✅ Duplicate selectors removed from {file_path}")

remove_duplicate_css(css_files)
