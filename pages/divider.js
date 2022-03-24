import React from "react";
import { Drawer, Button } from "antd";

class Divider extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <>
        <Button
          className="text-black bg-gray-500 rounded-full p-2 m-4 text-center hover:bg-yellow-400 hover:text-black border-none"
          onClick={this.showDrawer}
        >
          Open
        </Button>
        <Drawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Button
            className="text-black bg-gray-500 rounded-full p-2 m-4 text-center hover:bg-yellow-400 hover:text-black border-none"
            onClick={this.showChildrenDrawer}
          >
            Two-level drawer
          </Button>

          <Drawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </Drawer>
          <Button type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </Button>
        </Drawer>
      </>
    );
  }
}

export default Divider;
