/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
<script src="http://localhost:8097"></script>

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryPie, VictoryScatter,VictoryLabel } from "victory-native";

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000'

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
];

const lineChartData = [
    {
        "x": 1,
        "y": 2
    },
    {
        "x": 2,
        "y": 3
    },
    {
        "x": 3,
        "y": 5
    },
    {
        "x": 4,
        "y": 4
    },
    {
        "x": 5,
        "y": 7
    }
];

export default class LineChart extends React.Component {

    state = {
        data:[],
    };

    componentWillMount(){
        this.fetchData();
    }

    fetchData = async () => {
        const response = await fetch(`${api}/lineChartData`, {
            method: 'GET',
            Mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        const json = await response.json();
        this.setState({data: json});
    };

    render() {
        return (
            <View style={styles.container}>
                {/*<VictoryChart width={350} theme={VictoryTheme.material}>*/}
                {/*<VictoryBar data={data} x="quarter" y="earnings" />*/}
                {/*</VictoryChart>*/}


                <VictoryChart
                    theme={VictoryTheme.material}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        data={lineChartData}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        labels={(datum) => datum.y}
                        labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
                    />
                </VictoryChart>

                {/*<VictoryPie*/}
                {/*data={[*/}
                {/*{ x: "Cats", y: 35 },*/}
                {/*{ x: "Dogs", y: 40 },*/}
                {/*{ x: "Birds", y: 55 }*/}
                {/*]}*/}
                {/*/>*/}



            </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff"
    }
});