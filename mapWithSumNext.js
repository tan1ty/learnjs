
const mapWithSumNext = (array) => array.map((num, idx, arr) => idx == array.length - 1 ? num : num + arr[idx + 1])

mapWithSumNext([2, 13, 4])
