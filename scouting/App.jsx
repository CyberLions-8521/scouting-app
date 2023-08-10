import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Loading from './components/Loading';

export default function App() {
  return (
    <>

      <Loading />

    </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
