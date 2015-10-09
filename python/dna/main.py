from sys import argv
txt = open('data.txt').read()
a = 0
g = 0
c = 0
t = 0
for x in list(txt):
	if x == "A":
		a += 1
	if x == "G":
		g += 1
	if x == "C":
		c += 1
	if x == "T":
		t += 1
print str(a)+" "+str(c)+" "+str(g)+" "+str(t)
