import { useState } from 'react';

import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnterGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default GoalInput;
