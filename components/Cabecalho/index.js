import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cabecalho = ({titulo}) => {
  return(
    <View>
      <Text style={styles.cabecalho}>{titulo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cabecalho: {
      fontSize: 20,
      paddingTop: 10,
      paddingBottom: 5,
      backgroundColor: "#1A237E",
      color: "#FFFFFF",
      textAlign: 'center',
      fontWeight: 'bold'
    }
})
export default Cabecalho