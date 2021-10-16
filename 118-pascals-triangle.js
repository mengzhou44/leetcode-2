/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
    let result = [];
    for (let row = 1; row <= numRows; row++) {
      if (result.length === 0) {
        result.push([1]);
      } else {
        let prev = result[result.length - 1];
        let cur = [1];
        for (let i = 0; i < prev.length - 1; i++) {
          cur.push(prev[i] + prev[i + 1]);
        }
        cur.push(1);
        result.push(cur);
      }
    }
  
    return result;
  };
