import {expect, it, describe} from '@jest/globals';
import mock from "../__mocks__/mock";
describe('filterData', () => {
    it("filters at the top level", () => {
        // Given a selection
        const selection = "Employee Handbook"
        // When we filter the data
        const filteredData = filterData(mock, selection);
        // Then assert the filtered data is as expected
        expect(filteredData.length).toBe(1);
        expect(filteredData).toStrictEqual([{
            "type": "pdf",
            "name": "Employee Handbook",
            "added": "2017-01-06",
            "size": 1
        }])
    })
    it("filters at the folder level", () => {
        // Given a selection
        const selection = "Fuel allowances"
        // When we filter the data
        const filteredData = filterData(mock, selection);
        // Then assert the filtered data is as expected
        expect(filteredData.length).toBe(1);
        expect(filteredData).toStrictEqual([{
            "type": "doc",
            "name": "Fuel allowances",
            "added": "2017-05-03",
            "size": 4
        }])
    })
})