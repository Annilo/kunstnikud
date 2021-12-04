import os
import json

path = r"C:\Users\parik\Desktop\Ylikool\sissejuhatus_erialasse\veeb\AKprojekt\resources\genepildid"

obj = dict()


paths = []

directories = os.listdir( path )

# This would print all the files and directories
i = 0
for file in directories:
   if file[-3:]=="jpg":
       paths.append( ".."+os.path.sep+"resources"+os.path.sep+"genepildid"+os.path.sep+file)
       i+=1
obj["paths"] = paths
print(obj)
   
   
with open('a.json','w+') as jsonFile:
    json.dump(obj, jsonFile)

