var Item = React.createClass({
  handleEdit() {
    console.log('edit button clicked')
  },

  render() {
    render (
      <div>
        <h3>{this.props.item.name}</h3>
        <p>{this.props.item.description}</p>
        <button onClick={this.props.handleDelete}> Delete </button>
        <button onClick={this.handleEdit}> Edit </button>
      </div>
    )
  }
});
