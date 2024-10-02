import os
import json

# Directory containing the images
image_dir = "images/memories"
path = r'C:\Users\EKLAVYA\Documents\GitHub\Melkor7354.github.io\images\memories'

# List to hold image paths
image_paths = []

# Iterate over the files in the directory
for filename in os.listdir(path):
    if filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg"):
        # Get the relative path of each image
        image_path = os.path.join(image_dir, filename).replace("\\", "/")
        image_paths.append(image_path)

# Create a JSON object with the image paths
memories_data = {"images": image_paths}

# Write the JSON object to a file
with open("memories.json", "w") as json_file:
    json.dump(memories_data, json_file, indent=4)

print("memories.json created successfully!")
