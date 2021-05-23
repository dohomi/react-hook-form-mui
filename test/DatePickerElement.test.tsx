import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DatePickerElement, FormContainer } from '../_unused'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P'
}

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiPickersUtilsProvider utils={LocalizedUtils}>
      <FormContainer
        onSuccess={() => console.log('success')}
        defaultValues={''}
      >
        <DatePickerElement
          label="The DatePickerElement label"
          name={'basic date picker'}
          fullWidth
          openTo="year"
        />
      </FormContainer>
    </MuiPickersUtilsProvider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
