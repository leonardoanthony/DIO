import React from 'react'
import { ProfileImage } from './style'

const UserPicture = ({src, width}) => {
  return (
    <ProfileImage width={width} src={src}/>
  )
}

export default UserPicture