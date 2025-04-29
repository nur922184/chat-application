import React from 'react';
import './Chat.css'
import LeftSideber from '../../Component/LeftSideber/LeftSideber';
import ChatBox from '../../Component/ChatBox/ChatBox';
import RightSideber from '../../Component/RightSideber/RightSideber';
const Chat = () => {
    return (
        <div className='chat'>
            <div className="chat-container">
                <LeftSideber></LeftSideber>
                <ChatBox></ChatBox>
                <RightSideber></RightSideber>
            </div>
        </div>
    );
};

export default Chat;