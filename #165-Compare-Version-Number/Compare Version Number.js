/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

 const compareVersion = function(version1, version2) {

    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let len = Math.max(v1.length, v2.length);
  
    let t1 = 0;
    let t2 = 0;
  
    for (let i = 0; i < len; i++) {
  
      t1 = parseInt(v1[i] || 0);
      t2 = parseInt(v2[i] || 0);
      if (t1 > t2) return 1;
      if (t1 < t2) return -1;
  
    }
  
    return 0;
  
  };