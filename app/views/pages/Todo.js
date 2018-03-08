import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { FormLabel } from 'react-native-elements'
import moment from 'moment'
import { openDatePicker, openTimePicker } from '../enhancers'
import { tmpTodoOperations } from '../../state/ducks/ui/tmpTodo'
import { StyledButton as Button, DateText, StyledFormInput as FormInput } from '.'

export class Todo extends Component {
  handleDatePicker = async (initialDate) => {
    const date = await openDatePicker(initialDate)
    if (date) this.props.changeDate(date)
    return date
  }

  handleTimePicker = async (initialTime) => {
    const time = await openTimePicker(initialTime)
    if (time) this.props.changeTime(time)
    return time
  }

  render () {
    const { todo, changeName, clearDateTime } = this.props
    const date = todo.date ? moment({...todo.date, ...todo.time}) : undefined
    return (
      <View>
        <FormInput
          autoFocus
          autoGrow
          onSubmitEditing={async () => {
            const date = await this.handleDatePicker(todo.date)
            if (date) this.handleTimePicker(todo.time)
          }}
          returnKeyType='next'
          placeholder='Title'
          {...todo ? {defaultValue: todo.name} : {}}
          onChangeText={changeName}
        />
        {date && <FormLabel><DateText date={date} /></FormLabel>}
        <Button
          containerViewStyle={{marginBottom: 1, marginTop: 7}}
          icon={{name: 'date-range'}}
          title='set date'
          onPress={async () => {
            const date = await this.handleDatePicker(todo.date)
            if (date) this.handleTimePicker(todo.time)
          }}
        />
        <Button
          containerViewStyle={{marginBottom: 1}}
          icon={{name: 'access-time'}}
          title='set time'
          onPress={() => this.handleTimePicker(todo.time)}
          {...todo.date ? {} : { disabled: true }}
        />
        <Button
          icon={{name: 'clear'}}
          title='clear'
          onPress={clearDateTime}
          {...todo.date || todo.time ? {} : { disabled: true }}
        />
      </View>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object,
  changeName: PropTypes.func,
  changeDate: PropTypes.func,
  changeTime: PropTypes.func,
  clearDateTime: PropTypes.func
}

const mapStateToProps = (state) => ({
  todo: state.ui.tmpTodo
})

const mapDispatchToProps = {
  changeName: tmpTodoOperations.changeName,
  changeDate: tmpTodoOperations.changeDate,
  changeTime: tmpTodoOperations.changeTime,
  clearDateTime: tmpTodoOperations.clearDateTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
