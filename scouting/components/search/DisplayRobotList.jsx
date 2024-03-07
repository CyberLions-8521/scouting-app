import React, { useState, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import axios from 'axios';
import StatGlimpse from '../../components/home/StatGlimpse.jsx';

export default function DisplayRobotList() {
    const [genData, setGenData] = useState();

    useEffect(() => {

        async function fetchRobotList() {
            let robotList = await axios.get('http://10.0.2.2:3000/robotList');
            setGenData(robotList.data);
        }

        fetchRobotList();
    }, []);

    return (
        <>
            {genData?.filter((robot) => robot._id !== 'robotID').map((robot) =>
                <View key={robot.robotID}>
                    <StatGlimpse name={robot.profile.teamName} teamNumber={robot.profile.teamName} rank={5} winLossRatio={'3:5'} />
                </View>
            )}
        </>
    );
}
