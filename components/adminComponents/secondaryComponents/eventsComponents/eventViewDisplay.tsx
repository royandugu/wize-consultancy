"use client"

import { useQuery } from "react-query";
import { universalGet } from "../../../systemComponents/apiConnectors/system/GET";
import parse from "html-react-parser"

import Spinner from "../../../systemComponents/modules/spinner";

import Table from "../../primaryComponents/table";

const EventViewDisplay = () => {
    const { data, status } = useQuery("all-events", () => universalGet("/events"));

    if (status === "loading") return <Spinner />
    else if (status === "error") return <h1> Data fetch error </h1>
    else if (status === "success") {
        const newData = data.map((item: any) => {
            const formattedStartDate = new Date(item.startDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12:false});

            const formattedEndDate = new Date(item.endDate).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',hour12:false});

            return {
                ...item,
                startDate:formattedStartDate,
                endDate:formattedEndDate,
                body: parse(item.body.slice(0, 100))
            };
        });
        return (
            <Table title="Your events" tableRows={["Banner", "Title", "Start date", "End date", "Body", "Action"]} dataKeys={["banner", "title", "startDate", "endDate", "body"]} tableCols={newData} hasImage={true} parseOn={5} />
        )
    }
}
export default EventViewDisplay; 