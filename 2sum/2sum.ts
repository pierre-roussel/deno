const twoSum = (nums: number[], target: number): number[] => {
  let startIdx = 0;
  let lastIdx = nums.length - 1;
  const sorted = nums.slice().sort((a, b) => a - b);

  while (startIdx !== lastIdx) {
    const val1 = sorted[startIdx];
    const val2 = sorted[lastIdx];
    const sum = val1 + val2;

    if (sum == target) break;
    else if (sum > target) {
      lastIdx = lastIdx - 1;
    } else if (sum < target) {
      startIdx = startIdx + 1;
    }
  }

  const val1 = sorted[startIdx];
  const val2 = sorted[lastIdx];

  return [nums.indexOf(val1), nums.lastIndexOf(val2)];
};

export { twoSum };
