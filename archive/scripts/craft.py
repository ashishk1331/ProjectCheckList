from nanoid import generate
import json


ids = set([1])
data = []

def updateData(item):
    print(hello)
    print(item)  
    return item

with open('data.json','r') as file:
    data = json.loads(file.read())
    for i in data:
        if 'status' not in i:
            i['status'] = False
        elif i['status'] == 'finished':
            i['status'] = True
        else:
            i['status'] = False
        if 'id' not in i:
            a = generate(size=6)
            while a in ids:
                a = generate(size=6)
            ids.add(a)
            i['id'] = a

with open('data.json','w') as file:
    file.write(json.dumps(data))

print(list(data))
