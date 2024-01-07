import React from 'react';
import './styles/FollowList.css'; // Importuj plik CSS

interface FollowListProps {

}

const FollowList: React.FC<FollowListProps> = () => {
    return (
        <div className="follow-list">
            <div className='header-follow-list'>
                <h2>Who to follow</h2>
            </div>
            <div className='list'>

                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>

                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>

                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>


                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>


                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>



                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>


                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>


                <div className='single-row'>
                    <div className='avatar-name'>
                        <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg' />
                        <span className='name'>Alex</span>
                    </div>
                    <span className='add-friend-button'>Add Friend</span>
                </div>
            </div>
        </div>
    );
};

export default FollowList;