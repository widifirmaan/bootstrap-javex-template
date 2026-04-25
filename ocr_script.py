import os
import pytesseract
from PIL import Image

image_dir = 'm'
image_files = [f for f in os.listdir(image_dir) if f.endswith(('.png', '.jpg', '.jpeg'))]
image_files.sort()

# Configuration for Indonesian language and maybe a bit of English
config = '-l ind+eng'

results = {}

for img_file in image_files:
    path = os.path.join(image_dir, img_file)
    try:
        text = pytesseract.image_to_string(Image.open(path), config=config)
        print(f"--- {img_file} ---")
        print(text.strip())
        print("-------------------")
    except Exception as e:
        print(f"Error on {img_file}: {e}")
