/* **********************************

Josephus Problem

There are X number of soldiers, they gather in a circle and kill each other.
Counting begins at a specified point in the circle and proceeds around the circle in a specified direction.
After a specified number of people are skipped, the next person is executed. 
The procedure is repeated with the remaining people, starting with the next person, 
going in the same direction and skipping the same number of people, until only one person remains, and is freed. 
Make sure you are the last man standing!

~Example:
5 soldiers:                      
1. 1st kills 2nd                    *1
2. 3rd kills 4th                  *5   2*
3. 5th kills 1st                   *4 3
4. 3rd kills 5th

3rd remains

*********************************** */
const soldiersCount = 5;
let soldiers = [...Array(soldiersCount)].map((_, i) => i + 1);

while (soldiers.length > 1) {
    soldiers.forEach(function(value, index) {
        const nextIndex = index < soldiers.length - 1 ? index + 1 : 0;
        console.log(`Soldier ${value} kills ${soldiers[nextIndex]}`);
        soldiers.splice(nextIndex, 1);
    });
}

console.log(`Soldier ${soldiers} Remains`);
