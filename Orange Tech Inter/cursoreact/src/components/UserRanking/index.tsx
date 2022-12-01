import React from 'react'
import { Progress, Row, Title, UserContainer } from './style';
import  UserPicture  from '../UserPicture';
import { IUserRanking } from './types';

const UserRanking = ({src, width}: IUserRanking) => {
  return (
    <UserContainer>
        <Row>
            <div>
                <UserPicture width='60' src={src}/>
            </div>

            <div>
                <Title>Leonardo Anthony</Title>
                <Progress width={width}/>
            </div>
        </Row>
    </UserContainer>
  )
}

export default UserRanking