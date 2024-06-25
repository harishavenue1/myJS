const fetch = require("node-fetch");

async function getDrawnMatches(year) {
    let goals = [];
    let ans = 0;
    for (let goal = 0; goal <= 10; goal++) {
        const myPromise = fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=` + goal + `&team2goals=` + goal)
            .then(res => res.json())
            .then(data => {
                ans += data.total;
                console.log(data.total, goal);
                return data.total
            });

        goals.push(myPromise);
    }
    await Promise.all(goals)
    return ans;
}
getDrawnMatches
    (2011).then((ans) => {
        console.log(ans);
    })