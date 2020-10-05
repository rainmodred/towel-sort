module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    
    const res = [];

    matrix.forEach((row, index) => {
        if (index % 2 === 1) {
            res.push(...row.reverse());
        } else {
            res.push(...row);
        }
    });
    
    return res; 
}
