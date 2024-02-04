import React from "react";
import './style.css'
class MainBody extends React.Component {
    state = {
        users : [],
        loading: false
    }
    componentDidMount() {
        this.setState(this.state.users = [
            {
                login: "mojombo",
                id: 1,
                html_url: "https://github.com/mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
            },
            {
                login: "defunkt",
                id: 2,
                html_url: "https://github.com/defunkt",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            },
            {
                login: "pjhyett",
                id: 3,
                html_url: "https://github.com/pjhyett",
                avatar_url: "https://avatars.githubusercontent.com/u/3?v=4"
            }
        ])
    }

    render() {
        return (
            <main>
                <div className="container">
                        {this.state.users.map(user => {
                            return (
                            <div className="user-card">
                                 <img src={user.avatar_url} alt="profile-picture"/>
                                 <div className="username">{user.login}</div>
                                 <a href={user.html_url}>Profile</a>
                            </div>
                            )
                        })}
                                   
                </div>
            </main>
        )
    }

}
export default MainBody;