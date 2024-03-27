import { React } from 'react';
import { View } from 'react-native';
import StatGlimpseSkeleton from '../home/StatGlimpseSkeleton';

export default function SearchRobotsSkeleton(){
    return (
      <>
        <StatGlimpseSkeleton />
        <StatGlimpseSkeleton />
      </>
    );
}
