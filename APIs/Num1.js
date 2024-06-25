const fetch = require("node-fetch");
let goals = [];
for (let i = 0; i <= 10; i++)
    goals.push(i);
let ans = 0;
async function getDrawnMatches(year) {
    await Promise.all(
        goals.map(async (goal) => {
            const respone = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=` + goal + `&team2goals=` + goal);
            const data = await respone.json();
            ans += data.total;
            console.log(ans, data.total, goal);
        })
    );
    return ans;
}
getDrawnMatches
    (2011).then((answer) => console.log(answer));