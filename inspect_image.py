from PIL import Image

path = 'C:\\Users\\Emanuel\\Documents\\grupo-hw-security\\src\\assets\\images\\celular.png'
img = Image.open(path)
print('mode', img.mode)
print('size', img.size)
if img.mode in ('RGBA', 'LA'):
    alpha = img.split()[-1]
    print('alpha min/max', alpha.getextrema())
for coord in [(0,0), (img.width-1,0), (0,img.height-1), (img.width-1,img.height-1), (img.width//2, img.height//2)]:
    print(coord, img.getpixel(coord))
