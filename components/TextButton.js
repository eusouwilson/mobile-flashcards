import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { red } from '../utils/colors'

export default function TextButton({ children, onPress, style = {} }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={[styles.reset, style]}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: red,
    fontWeight: "600",
    fontSize: 16,
  }
})