var HomePage = React.createClass({
    render: function() {
      return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: "\n.btn {\n  border: none;\n  color: white;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.success {background-color: #04AA6D;} /* Green */\n.success:hover {background-color: #46a049;}\n\n.info {background-color: #2196F3;} /* Blue */\n.info:hover {background: #0b7dda;}\n\n.warning {background-color: #ff9800;} /* Orange */\n.warning:hover {background: #e68a00;}\n\n.danger {background-color: #f44336;} /* Red */ \n.danger:hover {background: #da190b;}\n\n.default {background-color: #e7e7e7; color: black;} /* Gray */ \n.default:hover {background: #ddd;}\n" }} />
          <h1>Alert Buttons</h1>
          <button className="btn su
  ccess">Success</button>
          <button className="btn info">Info</button>
          <button className="btn warning">Warning</button>
          <button className="btn danger">Danger</button>
          <button className="btn default">Default</button>
        </div>
      );
    }
  });