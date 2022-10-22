import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Component;
