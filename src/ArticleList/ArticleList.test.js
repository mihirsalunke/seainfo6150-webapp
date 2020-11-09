import React from "react";
import ArticleList from "./ArticleList";

const data = [
    {
        displayDate: "November 19th 2018, 3:10 am",
        shortText: "I was sitting in an aisle seat on a flight earlier this year when a fellow traveler approached and politely said he thought I may be sitting in his seat.",
        slug: "120103104851-couple-airplane-cabin",
        timeStamp: "2018-11-19T11:10:20.000Z",
        title: "Airline etiquette: Tips from an expert "
    },
    {
        displayDate: "November 22nd 2018, 1:55 am",
        shortText: "From the dramatic Cliffs of Moher to regal Powerscourt Estate in Wicklow, escape to 32 of the most beautiful places to visit in Ireland.",
        slug: "160315093137-beautiful-ireland",
        timeStamp: "2018-11-22T09:55:34.000Z",
        title: "The 32 most beautiful places to visit in Ireland"
    }
];

describe("ArticleList tests", () => {
    it("renders correctly", () => {
        const { container  } = render(<ArticleList articles = {data}/>);
        expect(container ).toMatchSnapshot();
    });
});