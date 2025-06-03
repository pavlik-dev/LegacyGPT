import json

# Assuming the JSON data is stored in a variable called `data`
with open("models.json", "r") as f:
    models = json.load(f)

# Start building the TypeScript output
ts_output = ""

for model in models:
    name = model.get("description", model["name"])
    id_ = model["name"]
    provider = model.get("provider")
    
    ts_output += f"""\"{id_}\": {{\n  name: "{name}",\n  id: "{id_}",\n"""
    
    if provider:
        ts_output += f'  provider: "{provider}",\n'
    
    ts_output += "},\n"

# Wrap it in an array export (optional)
ts_output = "export const models: { [key: string]: Model } = {\n" + ts_output + "};"

print(ts_output)

