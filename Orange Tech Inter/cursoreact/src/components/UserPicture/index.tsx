import React from 'react'
import { ProfileImage } from './style'
import { IUserPicture } from './types'

const UserPicture = ({src, width}: IUserPicture) => {
  return (
    <ProfileImage width={width} src={src}/>
  )
}

export default UserPicture