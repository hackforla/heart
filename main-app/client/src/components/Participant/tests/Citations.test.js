import React from "react";
import Citations from "../components/Citations";
import { mount } from "enzyme";

jest.mock("axios");

const citations = {
    citation_number: "1123-322",
    citation_status: "warrant",
    court_code: "CC 1235",
    created_at: "2019-03-25T23:12:52.217Z",
    id: 2,
    participant_id: 1,
    updated_at: "2019-03-25T23:12:52.217Z",
    violations: ["VN 1235"],
}