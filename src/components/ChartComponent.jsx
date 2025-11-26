import { Text, View } from "react-native";

function ChartComponent({ data, options }) {
  return (
    <View>
      <Text>
        {options.title || 'Chart'}
      </Text>
    </View>
  );
}

export default ChartComponent;