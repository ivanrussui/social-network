// import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="ivanrussui.ru" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("ivanrussui.ru");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="ivanrussui.ru" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="ivanrussui.ru" />);
        const root = component.root;
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            root.findByType('input');
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="ivanrussui.ru" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        expect(span.children[0]).toBe('ivanrussui.ru');
        // expect(span.children.length).toBe(1);
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="ivanrussui.ru" />);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        const span = root.findByType('span');
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        const input = root.findByType('input');
        expect(input.props.value).toBe('ivanrussui.ru');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="ivanrussui.ru" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.changeStatusFalse();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});