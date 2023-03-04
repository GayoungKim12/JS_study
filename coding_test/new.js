function solution(numbers, hand) {
    var answer = [];
    const left = [1, 4, 7];
    const right = [3, 6, 9];
    let leftPosition = '*';
    let rightPosition = '#';
    for(const num of numbers) {
        if(left.includes(num)) {
            answer.push('L');
            leftPosition = num;
        } else if(right.includes(num)) {
            answer.push('R');
            rightPosition = num;
        } else {
            let leftLocation = 0;
            let rightLocation = 0;
            
            if((leftPosition === 1 && num === 2) || 
            (leftPosition === 4 && num === 5) || 
            (leftPosition === 7 && num === 8) || 
            (leftPosition === '*' && num === 0) || 
            (leftPosition === 2 && num === 5) || 
            (leftPosition === 5 && (num === 2 || num === 8)) || 
            (leftPosition === 8 && (num === 5 || num === 0)) ||
            (leftPosition === 0 && num === 8)) {
                leftLocation = 1;
            } else if((leftPosition === 1 && num === 5) || 
            (leftPosition === 4 && (num === 2 || num === 8)) || 
            (leftPosition === 7 && (num === 5 || num === 0)) || 
            (leftPosition === '*' && num === 8) || 
            (leftPosition === 2 && num === 8) || 
            (leftPosition === 5 && num === 0) || 
            (leftPosition === 8 && num === 2) ||
            (leftPosition === 0 && num === 5)) {
                leftLocation = 2;
            } else if((leftPosition === 1 && num === 8) || 
            (leftPosition === 4 && num === 0) || 
            (leftPosition === 7 && num === 2) || 
            (leftPosition === '*' && num === 5) ||
            (leftPosition === 2 && num === 0) ||
            (leftPosition === 0 && num === 2)) {
                leftLocation = 3;
            } else {
                leftLocation = 4;
            }
            
            if((rightPosition === 3 && num === 2) || 
            (rightPosition === 6 && num === 5) || 
            (rightPosition === 9 && num === 8) || 
            (rightPosition === '#' && num === 0) || 
            (rightPosition === 2 && num === 5) || 
            (rightPosition === 5 && (num === 2 || num === 8)) || 
            (rightPosition === 8 && (num === 5 || num === 0)) ||
            (rightPosition === 0 && num === 8)) {
                rightLocation = 1;
            } else if((rightPosition === 3 && num === 5) || 
            (rightPosition === 6 && (num === 2 || num === 8)) || 
            (rightPosition === 9 && (num === 5 || num === 0)) || 
            (rightPosition === '#' && num === 8) || 
            (rightPosition === 2 && num === 8) || 
            (rightPosition === 5 && num === 0) || 
            (rightPosition === 8 && num === 2) ||
            (rightPosition === 0 && num === 5)) {
                rightLocation = 2;
            } else if((rightPosition === 3 && num === 8) || 
            (rightPosition === 6 && num === 0) || 
            (rightPosition === 9 && num === 2) || 
            (rightPosition === '#' && num === 5) ||
            (rightPosition === 2 && num === 0) ||
            (rightPosition === 0 && num === 2)) {
                rightLocation = 3;
            } else {
                rightLocation = 4;
            }
            
            if (leftLocation < rightLocation) {
                answer.push('L');
                leftPosition = num;
            } else if (leftLocation > rightLocation) {
                answer.push('R');
                rightPosition = num;
            } else {
              if (hand === 'left') {
                answer.push('L');
                leftPosition = num;
            } else {
                answer.push('R');
                rightPosition = num;
              }
            }
        }
    }
    return answer;
}