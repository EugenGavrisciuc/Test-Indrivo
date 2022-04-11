For the code on line 16, if the condition was not to return a number, I could return a string with 2 numbers that both are the closest to the K.

if ((K - smallerNumbers[0]) === (biggerNumbers[0]) - K) {
	return(`${smallerNumbers[0]} and ${biggerNumbers[0]}`);
}