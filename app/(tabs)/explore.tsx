
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { Bar, CartesianChart } from "victory-native"
//👇 Add LinearGradient and vec to our imports React Native Skia
import { LinearGradient, vec } from "@shopify/react-native-skia"
export default function TabTwoScreen() {

  const data = Array.from({ length: 6 }, (_, index) => ({
    // Starting at 1 for Jaunary
    month: index + 1,
    // Randomizing the listen count between 100 and 50
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
}))
  return (
    // <View style={{flex:1, backgroundColor:'white'}}>
   <CartesianChart
      data={data}
      xKey="month"
      yKeys={["listenCount"]}
      // 👇 Add domain padding to the chart to prevent the first and last bar from being cut off.
      domainPadding={{ left: 50, right: 50, top: 30 }}
      axisOptions={{
        formatXLabel: (value) => {
          const date = new Date(2023, value - 1);
          return date.toLocaleString("default", { month: "short" });
        },
      }}
    >
      {({ points, chartBounds }) => (
        <Bar
          chartBounds={chartBounds}
          points={points.listenCount}
          roundedCorners={{
            topLeft: 5,
            topRight: 5,
          }}
        >
            <LinearGradient
       start={vec(0, 0)} // 👈 The start and end are vectors that represent the direction of the gradient.
      end={vec(0, 400)}
       colors={[ // 👈 The colors are an array of strings that represent the colors of the gradient.
      "#a78bfa",
      "#a78bfa50" // 👈 The second color is the same as the first but with an alpha value of 50%.
    ]}
  />

          </Bar>
      )}
    </CartesianChart>
  // </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 1,
    width: 2,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

