import React, { useState, useEffect } from 'react';
import { Pressable, View } from 'react-native';
import axios from 'axios';
import StatGlimpse from '../../components/home/StatGlimpse.jsx';

export default function DisplayRobotList({searchQuery}) {
    const [genData, setGenData] = useState();

    useEffect(() => {
    async function fetchRobotList() {
        try{
            let robotList = await axios.get('http://10.0.2.2:3000/robotList');
            setGenData(robotList.data);
        } catch (error) {
            console.error('Error retrieving robotList', error)
        }
    }

        fetchRobotList();
    }, []);

    return (
        <>
            {genData
            ?.filter((robot) => robot._id !== 'robotID')
            .filter(
                (robot) => 
                    robot.profile.teamName &&
                    robot.profile.teamName.toLowerCase().includes(searchQuery.toLowerCase())) 
                    // Apply search filter with null check
            .map((robot) =>
                <View key={robot.robotID}>
                    <StatGlimpse 
                    name={robot.profile.teamName} 
                    teamNumber={robot.profile.teamNumber} 
                    rank={robot.profile.rank} 
                    winLossRatio={robot.profile.winLossRatio} 
                    />
                </View>
            )}
        </>
    );
}
