function solution(num1, num2) {
    const result = Math.floor((num1 / num2) * 1000);
    return result;
}

// 예시 사용
const result = solution(3, 2);
console.log(result); // 3333
