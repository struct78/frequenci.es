import React from 'react'
import renderer from 'react-test-renderer'
import FlightBoard from './flightBoard'
import { countries, country, data, location, center, testFlight } from '../tests/setup'
import { shallow, mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

let component, raw

beforeEach(() => {
    raw = <FlightBoard
      countries={countries}
      country={country}
      data={data}
      location={location}
      center={center}/>
    component = shallow(raw)
})

describe("FlightBoard", () => {
  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it ("airport code is correct", () => {
    expect(component.instance().getAirportByCode('YMML')).not.toBe(null)
    expect(component.instance().getAirportByCode('YMML')).toHaveLength(1)
    expect(component.instance().getAirportByCode('YMML')[0].name).toBe('Melbourne International Airport')
  })

  it ("departure airport is not null", () => {
    expect(component.instance().isValidFlight(testFlight)).not.toBe(null)
  })

  it ("departure airport is null", () => {
    testFlight.departure_airport = null;
    expect(component.instance().isValidFlight(testFlight)).toBe(null)
  })
})
