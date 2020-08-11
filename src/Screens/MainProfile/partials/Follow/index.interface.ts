import { ImageURISource } from "react-native"

const follwerImg1 = require('../../../../assests/eventfulAssests/images/follower1.png')
const follwerImg2 = require('../../../../assests/eventfulAssests/images/follower2.png')
const follwerImg3 = require('../../../../assests/eventfulAssests/images/follower3.png')
const follwerImg4 = require('../../../../assests/eventfulAssests/images/follower4.png')
const follwerImg5 = require('../../../../assests/eventfulAssests/images/follower5.png')

export default interface FollowProps {
    follwers?: followerProps[]
}

export interface followerProps {
    key: string,
    image: string | ImageURISource,
    name: string,
    description: string,

}

export const follwers = [
    {
        key: "1",
        image: follwerImg1,
        name: "User Name",
        description: "Nickname"
    },
    {
        key: "2",
        image: follwerImg2,
        name: "User Name",
        description: "Nickname"
    },
    {
        key: "3",
        image: follwerImg3,
        name: "User Name",
        description: "Nickname"
    },
    {
        key: "4",
        image: follwerImg4,
        name: "User Name",
        description: "Nickname"
    },
    {
        key: "5",
        image: follwerImg5,
        name: "User Name",
        description: "Nickname"
    }
]