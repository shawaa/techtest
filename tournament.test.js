import { createLeague } from "./tournament"

describe("tournament", () => {

    // data is deliberately a bit jank don't touch
    const league = createLeague([
        { teamA: { teamName: "hungry austin", points: 17 }, teamB: { teamName: "modest brattain", points: 10 } },
        { teamA: { teamName: "hungry austin", points: 18 }, teamB: { teamName: "sharp euler", points: 18 } },
        { teamA: { teamName: "modest brattain", points: 6 }, teamB: { teamName: "sharp euler", points: 21 } },
        { teamA: { teamName: "hungry austin", points: 18 }, teamB: { teamName: "modest brattain", points: 12 } },
        { teamA: { teamName: "sharp euler", points: 28 }, teamB: { teamName: "hungry austin", points: 28 } },
        { teamA: { teamName: "modest brattain", points: 16 }, teamB: { teamName: "sharp euler", points: 17 } },
    ]);

    it("has winner with the most wins (or total points if wins are equal)", () => {
        expect(league.winner).toEqual("sharp euler");
    });

    it("has wins for all teams", () => {
        expect(league.table.find(x => x.teamName == "sharp euler").wins).toEqual(2);
        expect(league.table.find(x => x.teamName == "hungry austin").wins).toEqual(2);
        expect(league.table.find(x => x.teamName == "modest brattain").wins).toEqual(0);
    });

    it("has losses for all teams", () => {
        expect(league.table.find(x => x.teamName == "sharp euler").losses).toEqual(0);
        expect(league.table.find(x => x.teamName == "hungry austin").losses).toEqual(0);
        expect(league.table.find(x => x.teamName == "modest brattain").losses).toEqual(4);
    });

    it("has draws for all teams", () => {
        expect(league.table.find(x => x.teamName == "sharp euler").draws).toEqual(2);
        expect(league.table.find(x => x.teamName == "hungry austin").draws).toEqual(2);
        expect(league.table.find(x => x.teamName == "modest brattain").draws).toEqual(0);
    });

    it("has total points for all teams", () => {
        expect(league.table.find(x => x.teamName == "sharp euler").totalPoints).toEqual(84);
        expect(league.table.find(x => x.teamName == "hungry austin").totalPoints).toEqual(81);
        expect(league.table.find(x => x.teamName == "modest brattain").totalPoints).toEqual(44);
    });

    it("has league table with all teams listed once in order", () => {
        expect(league.table.map(x => x.teamName)).toEqual([
            "sharp euler",
            "hungry austin",
            "modest brattain"
        ])
    });
});