function binarySearch(list, target) {
  if(list.length === 0 ) return false;
if(list.length === 1 && list[0]!== target)return false;
  let slicePoint;
  if(list.length % 2 === 0){
    slicePoint=list.length / 2 ;
  }else{
    slicePoint = (list.length -1) / 2;
  }
  let leftHalf = list.slice(0,slicePoint);
  let rightHalf = list.slice(slicePoint);
  
  if(target < list[slicePoint]){
    
    return binarySearch(leftHalf, target);

  }else if(target > list[slicePoint]){
    
    return binarySearch(rightHalf, target)
  }else if(target === list[slicePoint]){
  
    return true;
  }
  return false;
}

function binarySearchIndex(list, target, low, high) {
  // parameter list: a list of sorted value
  // parameter target: the value to search for
  // parameter low: the lower index for the search
  // parameter high: the upper index for the search

  // if low is equal to high, then return -1 to indicate
  //   that the value was not found

  // determine the slice point:
  //   if the list between the high index and the low index
  //   has an even number of elements,
  //     the slice point is the number of elements
  //     between high and low divided by two
  //   if the list between the high index and the low index
  //   has an odd number of elements,
  //     the slice point is the number of elements
  //     between high and low minus one, divided by two

  // if the target is less than the value in the
  //   original array at the slice point, then
  //   return the binary search of the array,
  //   the target, low, and the slice point
  // if the target is greater than the value in the
  //   original array at the slice point, then return
  //   the binary search of the array, the target,
  //   the slice point plus one, and high
  // if neither of those is true, return the slice point
}


module.exports = {
  binarySearch,
  binarySearchIndex
};
