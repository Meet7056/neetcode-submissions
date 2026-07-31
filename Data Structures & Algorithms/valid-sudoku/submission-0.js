class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Create 9 empty Sets for rows, 9 for columns, and 9 for 3x3 boxes
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                // Skip empty cell positions
                if (val === ".") {
                    continue;
                }

                // Calculate which of the nine 3x3 boxes this cell belongs to
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Check if the number already exists in the current row, column, or box
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false; // Found a duplicate, Sudoku is invalid!
                }

                // Store the number in the respective Sets for future checks
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true; // No duplicates found anywhere!
    }
}
