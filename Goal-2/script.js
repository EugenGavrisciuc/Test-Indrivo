const K = 22;
const ARR = [10, 15, 18, 24, 38];

function findBestMatch(K, ARR) {
    if (ARR.length <= 0) {
        return null;
    }

    const biggerNumbers = ARR.filter((element) => K <= element).sort((a, b) => a - b);
    const smallerNumbers = ARR.filter((element) => K > element).sort((a, b) => b - a);

    if (biggerNumbers[0] === K) {
        return biggerNumbers[0];
    }

    if ((K - smallerNumbers[0]) === (biggerNumbers[0]) - K) {
        return biggerNumbers[0];
    }

    if (biggerNumbers[0] - K < K - smallerNumbers[0]) {
        return biggerNumbers[0];
    } else {
        return smallerNumbers[0];
    }
}

const bestMatch = findBestMatch(K, ARR);
console.log(bestMatch);