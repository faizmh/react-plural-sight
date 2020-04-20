import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this);
    const result = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.addProfile(result.data);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

// This component is not a function ; its anonymous function.. Why?
const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      // beautiful way to pass props by destructing an object like below;
      // see the alternative approach below that as well
      <Card key={profile.id} {...profile} />
      /* <Card
        key={profile.id}
        avatar_url={profile.avatar_url}
        name={profile.name}
      /> */
    ))}
  </div>
);

function Card(props) {
  const profile = props;
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
}

function App(props) {
  const [profiles, setProfiles] = React.useState([]);
  function addProfile(profile) {
    setProfiles([...profiles, profile]);
  }
  return (
    <div>
      <div className="header">{props.title}</div>
      <Form addProfile={addProfile} />
      <CardList profiles={profiles} />
    </div>
  );
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById('github')
);
