import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { useScrollToTop } from '@react-navigation/native';

export default function NextPageFooter({pageNumber, setPageNumber, totalPages}) {


  return (
    <View style={styles.nextPageContainer}>
      {pageNumber === 1
        ? null
        : <Button
          title="←"
          type="outline"
          onPress={()=> {
            setPageNumber(pageNumber - 1)
          }}
          style={{padding: 5}}
        />
      }
      <Text
        style={{paddingTop: 15}}
      >{pageNumber}</Text>
      {pageNumber === totalPages
        ? null
        : <Button
          title="→"
          type="outline"
          onPress={()=> {
            setPageNumber(pageNumber + 1)
          }}
          style={{padding: 5}}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  nextPageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
});
