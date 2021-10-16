var merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  let sorted = intervals.sort((a, b) => a[0] - b[0]);

  let merged = [intervals[0]];

  intervals.shift();

  while (intervals.length > 0) {
    if (merged[merged.length - 1][1] < intervals[0][0]) {
      merged.push(intervals.shift());
      continue;
    } else if (merged[merged.length - 1][1] <= intervals[0][1]) {
      merged[merged.length - 1][1] = intervals[0][1];
    }
    intervals.shift();
  }

  return merged;
};



*******



  var merge = function(intervals) {
    
    if (intervals.length ===1)  return intervals
   
    intervals = intervals.sort((a,b) => a[0] - b[0])
   
    let merged= [intervals.shift()]
    
    for(let cur of intervals) {
         prev = merged[merged.length-1]
         
        if (prev[1] >= cur[0]) {
             prev[1] = Math.max(prev[1], cur[1])
        } else {
            merged.push(cur)
        }
    }
    return merged
   
};