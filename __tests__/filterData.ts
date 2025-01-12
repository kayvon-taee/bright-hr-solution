import {expect, it, describe} from '@jest/globals';
import mock from "../__mocks__/mock";
describe('FilterData', () => {
    const names = [
        "Employee Handbook",
        "Public Holiday policy",
        "Expenses",
        "Expenses claim form",
        "Fuel allowances",
        "Cost centres",
        "Misc",
        "Christmas party",
        "Welcome to the company!"
    ]

    it("filters at the top level", () => {
        // Given a selection
        const selection = "Employee Handbook"
        // When we filter the data

        // Then assert the filtered data is as expected
    })
    it("filters at the folder level", () => {
        // Given a selection
        const selection = "Fuel allowances"
        // When we filter the data

        // Then assert the filtered data is as expected
    })
})