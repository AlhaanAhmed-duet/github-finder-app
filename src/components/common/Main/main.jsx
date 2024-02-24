import React from "react";
import './style.css'
import axios from "axios";
class MainBody extends React.Component {
    state = {
        users: [],
        splashScreenLoading: false
    }
    async componentDidMount() {
        this.setState({splashScreenLoading: true});
        const url = "https://api.github.com/users";
        const getResponse = await axios.get(url);
        this.setState({users: getResponse.data});
        console.log(this.state.users);
    }

    render() {
        return (
            <main>
                <div className="container-main">
                {this.state.users.map(user => {
                            return (
                            <div className="user-card">
                                 <img src={user.avatar_url} alt="profile-picture"/>
                                 <div className="username">{user.login}</div>
                                 <a href={user.html_url} target="_blank">Profile</a>
                            </div>
                            )
                        })}
                </div>
            </main>
        )
    }

}
export default MainBody;