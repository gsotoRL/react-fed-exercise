import React from 'react';
import ReactDom from 'react-dom';
import ArizonaPAckage from '../ArizonaPAckage';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);
it("renders component correctly", ()=>{
    const {getByTestId} = render(<ArizonaPAckage/>);
    expect(getByTestId("arizonaComponent"));
});