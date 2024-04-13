# PDF image / text extraction proof-of-concept
import fitz
from io import BytesIO
from PIL import Image

# STEP 2
# file path you want to extract images from
file = "../data/lec16.pdf"

# open the file
pdf_file = fitz.open(file)

# STEP 3
# iterate over PDF pages
for page_index in range(len(pdf_file)):

    # get the page itself
    page = pdf_file[page_index]
    image_list = page.get_images()

    # printing number of images found in this page
    if image_list:
        print(f"[+] Found a total of {len(image_list)} images in page {page_index}")
    else:
        print("[!] No images found on page", page_index)

    text = page.get_text()
    print("Text from page {}:".format(page_index))
    print(text)

    # for image_index, img in enumerate(page.get_images(), start=1):
    #     # get the XREF of the image
    #     xref = img[0]

    #     # extract the image bytes
    #     base_image = pdf_file.extract_image(xref)
    #     image_bytes = base_image["image"]

    #     # get the image extension
    #     image_ext = base_image["ext"]

    #     image = Image.open(BytesIO(image_bytes))

    #     # Show the image
    #     image.show()