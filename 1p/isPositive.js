function isPositive(n){
		if (n > 0)
			return true
		else
			return false
}

function isNegative(n){
		return !isPositive(n)
}

print(isPositive(-1))
print(isPositive(1))
print(isNegative(-1))
print(isNegative(1))