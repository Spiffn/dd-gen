print("{")
print("\t\"male\": [")
with open("male.txt", "r") as file:
  for line in file:
    if line.strip():
      print(f'\t\t\"{line.strip()}\",')
print("\t],")
print("\t\"female\": [")
with open("female.txt", "r") as file:
  for line in file:
    if line.strip():
      print(f'\t\t\"{line.strip()}\",')
print("\t]")
print("}")