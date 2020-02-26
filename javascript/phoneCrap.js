// i did flatiron this morning and idk i kinda didn't enjoy it as much as the harry's
// 2:05
// Given a string of numbers, find all of the valid "T9" words that can be associated with them.
// Valid examples would be that 223 could map to both "ACE" and "BAD". 2233 could map to both "BADE" and "CAFE".
// 4663 could map to "good", "home", "gone", and "hood"
// -------------------
// |  1  |  2  |  3  |
// |     | abc | def |
// -------------------
// |  4  |  5  |  6  |
// | ghi | jkl | mno |
// -------------------
// |  7  |  8  |  9  |
// | pqrs| tuv | wxyz|
// -------------------
// |  *  |  0  |  #  |
// |     |     |     |
// -------------------
// assumed dictionary - collection of words that show which words are valid