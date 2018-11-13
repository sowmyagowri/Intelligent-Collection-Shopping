/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import LineChart from './src/client/components/charts/LineChart';
import ICSApp from './src/client/components/User/ICSApp';


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryPie, VictoryScatter,VictoryLabel } from "victory-native";

// const data = [
//     { quarter: 1, earnings: 13000 },
//     { quarter: 2, earnings: 16500 },
//     { quarter: 3, earnings: 14250 },
//     { quarter: 4, earnings: 19000 }
// ];
//
// const lineChartData = [
//         { x: 1, y: 2 },
//         { x: 2, y: 3 },
//         { x: 3, y: 5 },
//         { x: 4, y: 4 },
//         { x: 5, y: 7 }
// ];
//
//
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R1 on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};

export default class App extends React.Component {
    render() {
        return (
               <ICSApp/>
        );
    }
}

// export default  class App extends React.Component {
//
//     render() {
//         return (
//             <VictoryChart
//                 domain={{ y: [0, 1] }}
//                 animate={{ duration: 2000 }}
//             >
//                 <VictoryScatter
//                     size={5}
//                     data={this.state.data}
//                     animate={{
//                         onExit: {
//                             duration: 500,
//                             before: () => ({ opacity: 0.3, _y: 0 })
//                         },
//                         onEnter: {
//                             duration: 500,
//                             before: () => ({ opacity: 0.3, _y: 0 }),
//                             after: (datum) => ({ opacity: 1, _y: datum._y })
//                         }
//                     }}
//                 />
//             </VictoryChart>
//         );
//     }
//
//     constructor(props) {
//         super(props);
//         this.state = { data: this.getData() };
//     }
//
//     componentDidMount() {
//         this.setStateInterval = window.setInterval(() => {
//             this.setState({ data: this.getData() });
//         }, 3000);
//     }
//
//     componentWillUnmount() {
//         window.clearInterval(this.setStateInterval);
//     }
//
//     getData() {
//         const num = Math.floor(10 * Math.random() + 5);
//         const points = new Array(num).fill(1);
//         return points.map((point, index) => {
//             return { x: index + 1, y: Math.random() };
//         });
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#f5fcff"
//     }
// });
