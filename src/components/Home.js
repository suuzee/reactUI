import React, { Component } from 'react';
import { Button } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                {/* 图标是字体，改变颜色用color */}
                
            </div>
        );
    }
}

export default Home;