import React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { useState } from 'react'
import { Button } from 'react-native-elements';
import UploadCard from '../components/UploadCard'



export default function UploadScreen({handleUploadClick}) {
  const [uploadURL, setUploadURL] = useState("")
  const [showUpload, setShowUpload] = useState(false)
  const handleType = (text) => {
    setUploadURL(text)
  }
  const handleSubmit = () => {
    setShowUpload(true)
  }
  return (
    <View>
      {showUpload
        ? <UploadCard uploadURL={uploadURL}/>
        : <View style={styles.uploadContainer}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
              onChangeText={text => handleType(text)}
              value={uploadURL}
            />
            <Button
                title="Upload"
                type="outline"
                onPress={handleSubmit}
                style={{padding: 5}}
              />
          </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  uploadContainer: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
});

