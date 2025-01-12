import {expect, it, describe} from '@jest/globals';
import {DocumentInterface} from "../utils/types/types";
import mock from "../__mocks__/mock_data.json"

describe('ExtractNames', () => {
    it("extracts the names correctly", () => {
        // Given the data
        const data = mock as DocumentInterface
        // When we extract the names
        const extractedNames = extractNames(data)
        // Then assert it works as expected
        expect(extractedNames).toHaveLength(9)
        expect(extractedNames).toStrictEqual(['Christmas party',
            'Public Holiday policy',
            'Welcome to the company!',
            'Employee Handbook',
            'Cost centres',
            'Expenses claim form',
            'Fuel allowances'])
    })
})

