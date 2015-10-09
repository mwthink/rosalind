from sys import argv
txt = open('data.txt').read()
result = ""
for x in list(txt):
	if x == "T":
		result+="U"
	else:
		result+=x
print result
