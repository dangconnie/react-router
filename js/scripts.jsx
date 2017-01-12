var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      );
    }
});

var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});

var Home = React.createClass({
  render: function(props) {
      return (
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
  
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
});



var App = React.createClass({
	render: function(){
		return(
		<div>
	        <h1>Simple SPA, Hello {this.props.route.name}</h1>
	        <ul className="header">
	          <li><ReactRouter.IndexLink to="/" activeClassName="active">Home</ReactRouter.IndexLink></li>
	          <li><ReactRouter.Link to="/stuff" activeClassName="active">Stuff</ReactRouter.Link></li>
	          <li><ReactRouter.Link to="/contact" activeClassName="active">Contact</ReactRouter.Link></li>
	        </ul>
	        <div className="content">
	        	{this.props.children}
	        </div>
      	</div>
		)
	}
});

//App will always be displayed. The child paths are "home", "stuff" and "contact". They will be known as {this.props.children} to "App". 
//If you want to display "blah" in "stuff", you need to do {this.props.children}
ReactDOM.render(
  <ReactRouter.Router>
    <ReactRouter.Route path="/" component={App} name="C">
 		<ReactRouter.IndexRoute component={Home} />
 		<ReactRouter.Route path="stuff" component={Stuff} />
      	<ReactRouter.Route path="contact" component={Contact} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('container')
)