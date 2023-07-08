import React from 'react'
import { Loader, Text, View } from '@aws-amplify/ui-react';

const VideoListSearchComponent = ({searchWords}) => {
  return (
    <Text style={{color: "white"}}>Searching ... {searchWords}</Text>
  )
}

export default VideoListSearchComponent