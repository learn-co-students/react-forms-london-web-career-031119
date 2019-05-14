class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={this.handleChange} />
        <input type="text" name="lastName" onChange={this.handleChange} />
      </form>
    );
  }
}

export default ControlledInput;
