let goals = [];
for (let i = 0; i <= 10; i++)
    goals.push(i);

async function getGoalsScored(competition, year) {
    let ans = 0;
    let response = await fetch("https://jsonmock.hackerrank.com/api/football_competitions?year=" + year + "&name=" + competition);
    let data = await response.json();
    let winner = data.data[0].winner;
    console.log(winner);

    await Promise.all(
        goals.map(async (goal) => {
            const respone = await fetch("https://jsonmock.hackerrank.com/api/football_matches?competition=" + competition + "&year=" + year + "&team1=" + "winner+&team1goals=" + goal);
            const data = await respone.json();
            ans += data.total * goal;
        })
    );
    await Promise.all(
        goals.map(async (goal) => {
            const respone = await fetch("https://jsonmock.hackerrank.com/api/football_matches?competition=" + competition + "&year=" + year + "&team2=" + "winner+&team2goals=" + goal);
            const data = await respone.json();
            ans += data.total * goal;
        })
    );
    return ans;
}
getGoalsScored
    ("UEFA Champions League", 2011).then((answer) => console.log(answer));